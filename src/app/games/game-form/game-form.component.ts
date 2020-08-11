import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../game.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlataformsService } from 'src/app/services/plataforms.service';
import { Plataform } from 'src/app/plataforms/plataform.model';
import { IMAGE_URL } from 'src/app/app.api';
@Component({
  selector: 'bdg-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  // @ViewChild('name') name: ElementRef;
  // @ViewChild('artbox') artbox: ElementRef;
  // @ViewChild('plataform') plataform: ElementRef;
  // @ViewChild('slug') slug: ElementRef;
  editMode = false;
  game: Game = new Game(null, '', '', { _id: '', name: '' }, '');
  plataforms: Plataform[] = [];
  _id: string;
  preview: String = 'http://localhost:4200/assets/logo.svg';
  invalidImage = false;
  loadedImage = false;
  image_url = IMAGE_URL;
  image_blob: Blob;
  @ViewChild('gameForm') gameForm: NgForm;
  constructor(
    private gameService: GameService,
    private plataformSerice: PlataformsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPlataforms();
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.editMode = true;
          this._id = params['id'];
          this.initForm();
        }

      }
    )
  }
  private async initForm() {
    if (this.editMode) {
      const gameResponse = await this.gameService.getGame(this._id).toPromise();
      this.game = gameResponse.game;
      this.preview = IMAGE_URL + this.game.artbox;
    }

    this.gameForm.setValue({
      name: this.game.name,
      artbox: '',
      plataform: this.game.plataform
    })
  }
  getPlataforms() {
    this.plataformSerice.getPlataforms()
      .subscribe(response => this.plataforms = response.plataformas);
  }
  onChangeArtBox(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      if (file.type.includes('image')) {
        reader.readAsDataURL(file);

        reader.onload = () => {
          this.preview = reader.result as string;
          this.image_blob = file;
          this.loadedImage = true;
        }

      }
      else this.invalidImage = true;
    }
  }
  onSubmit(form: NgForm) {
    //$event.preventDefault();
    const newGame = form.value;
    const formData = new FormData();
    formData.append('name', newGame.name)
    formData.append('plataform', newGame.plataform)
    if (this.image_blob)
      formData.append('artbox', this.image_blob)
    console.log('Form Value:', newGame)

    if (this.editMode)
      this.gameService.updateGame(formData, this._id).subscribe(
        () => this.router.navigate([''])
      )
    else
      this.gameService.addGame(formData).subscribe(
        () => this.router.navigate([''])
      )

  }

}
