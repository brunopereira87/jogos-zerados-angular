import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Game } from '../game.model';

@Component({
  selector: 'bdg-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game = {} as Game;
  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.gameService.getGame(id).subscribe(
      response => {
        console.log(response.game)
        this.game = response.game
      }
    )
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     const
    //     this.game = this.gameService.getGame(params['slug'])
    //   }
    // )
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }
}
