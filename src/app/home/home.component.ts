import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from '../games/game.model';
import { GameService } from '../services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bdg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  games: Game[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.subscription = this.gameService.getGames().subscribe(response => this.games = response.games)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
