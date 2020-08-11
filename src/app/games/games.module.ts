import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFormComponent } from './game-form/game-form.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameFormComponent, GameComponent, GamesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class GamesModule { }
