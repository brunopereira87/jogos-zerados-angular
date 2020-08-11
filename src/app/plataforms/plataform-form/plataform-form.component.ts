import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PlataformsService } from 'src/app/services/plataforms.service';
import { Plataform } from '../plataform.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMAGE_URL } from 'src/app/app.api';

@Component({
  selector: 'bdg-plataform-form',
  templateUrl: './plataform-form.component.html',
  styleUrls: ['./plataform-form.component.scss']
})
export class PlataformFormComponent implements OnInit {

  plataformForm: FormGroup;
  editMode = false;
  slug: string;
  image_url = IMAGE_URL;
  preview: string;
  loadedImage: boolean = false;
  invalidImage = false;
  validTypes = ['png', 'jpeg', 'jpg'];
  plataform: Plataform;
  constructor(
    private plataformServices: PlataformsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.slug = params['slug'];
        this.editMode = params['slug'] != null;
        this.initForm();
      }
    )

  }

  private async initForm() {
    let name = '';
    let company = '';
    let logo = '';

    if (this.editMode) {
      const plataformResponse = await this.plataformServices.getPlataform(this.slug).toPromise();
      this.plataform = plataformResponse.plataforma;

      name = this.plataform.name;
      company = this.plataform.company;
      logo = this.plataform.logo;
      this.preview = this.plataform.logo;
    }

    this.plataformForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'company': new FormControl(company, Validators.required),
      'logo': new FormControl(''),
    })
  }
  onChangeLogo(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file: File = event.target.files[0];

      if (file.type.includes('image')) {
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          this.preview = reader.result as string;
          this.loadedImage = true;

          this.plataformForm.patchValue({
            logo: file
          })
        }
      }
      else this.invalidImage = true;

    }
  }

  onSubmit() {
    const newPlataform = this.plataformForm.value
    const form = new FormData();

    form.append('name', newPlataform.name);
    form.append('company', newPlataform.company)
    if (newPlataform.logo)
      form.append('logo', newPlataform.logo);
    if (this.editMode) {
      this.plataformServices.updatePlataform(this.plataform._id, form)
        .subscribe(() => this.router.navigate(['plataforms']));
      // .subscribe();


    }
    else {
      this.plataformServices.addPlataform(form)
        .subscribe(() => this.router.navigate(['plataforms']));
    }
  }

}
