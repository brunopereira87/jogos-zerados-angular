import { Component, OnInit, Input } from '@angular/core';
import { Plataform } from 'src/app/plataforms/plataform.model';
import { IMAGE_URL } from 'src/app/app.api';

@Component({
  selector: 'bdg-plataform-card',
  templateUrl: './plataform-card.component.html',
  styleUrls: ['./plataform-card.component.scss']
})
export class PlataformCardComponent implements OnInit {

  @Input() plataform: Plataform;
  image_url = IMAGE_URL;
  constructor() { }

  ngOnInit() {
  }

}
