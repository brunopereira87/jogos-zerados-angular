import { Injectable } from '@angular/core';
import { Game } from '../games/game.model';
import { Subject, Observable } from 'rxjs';
import { API_URL } from '../app.api';
import { HttpClient } from '@angular/common/http';

interface GamesResponse {
  status: string;
  results: number;
  games: Game[]
}
interface SingleGameResponse {
  status: string;
  game: Game;
}
@Injectable({
  providedIn: 'root'
})
export class GameService {

  api_url = API_URL + '/games';
  // gamesChanged = new Subject<Game[]>();
  // games: Game[] = [
  //   new Game(1, 'Astral Chain', 'http://localhost:4200/assets/img/games/astral_chain_boxart.png',
  //     'Nintendo Switch', 'astral-chain'),
  //   new Game(2, 'The Legend of Zelda:Breath of The Wild',
  //     'http://localhost:4200/assets/img/games/zelda_box_art.jpg', 'Nintendo Switch', 'zelda-botw'),
  //   new Game(3, 'Bloodborne', 'http://localhost:4200/assets/img/games/bloodborne_boxart.png',
  //     'Playstation 4', 'bloodborne'),
  //   new Game(4, 'Red Dead Redemption 2', 'http://localhost:4200/assets/img/games/rdr2_boxart.jpg',
  //     'Playstation 4', 'rdr2'),
  // ];
  constructor(private http: HttpClient) { }

  getGames(): Observable<GamesResponse> {
    return this.http.get<GamesResponse>(this.api_url);
  }

  getGame(id: string): Observable<SingleGameResponse> {
    return this.http.get<SingleGameResponse>(`${this.api_url}/${id}`)
  }
  addGame(game: FormData) {
    return this.http.post(this.api_url, game);
  }
  // getLastId() {
  //   const lenght = this.games.length;
  //   return this.games[lenght - 1].id;
  // }
  updateGame(game: FormData, id: string) {
    return this.http.patch<SingleGameResponse>(`${this.api_url}/${id}`, game)
  }
}
