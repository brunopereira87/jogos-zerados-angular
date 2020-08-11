import { Component, OnInit, Input } from '@angular/core';
import { Plataform } from './../plataform.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PlataformsService } from 'src/app/services/plataforms.service';
import { IMAGE_URL } from '../../app.api';
@Component({
  selector: 'bdg-plataform',
  templateUrl: './plataform.component.html',
  styleUrls: ['./plataform.component.scss']
})
export class PlataformComponent implements OnInit {

  plataform = {} as Plataform;
  image_url = IMAGE_URL;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private plataformsService: PlataformsService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug']

    this.plataformsService.getPlataform(slug).subscribe(
      response => {
        this.plataform = response.plataforma
      }
    )


  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

}
