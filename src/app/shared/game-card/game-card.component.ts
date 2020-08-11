import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/games/game.model';
import { IMAGE_URL } from 'src/app/app.api';

@Component({
  selector: 'bdg-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  image_url = IMAGE_URL;
  @Input() game: Game;
  constructor() { }

  ngOnInit() {
  }

}
