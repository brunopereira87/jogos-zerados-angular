import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameFormComponent } from './games/game-form/game-form.component';

export const ROUTES = [
  { path: '', component: HomeComponent },
  //{path:'about',component:AboutComponent},
  { path: 'new-game', component: GameFormComponent }
]
