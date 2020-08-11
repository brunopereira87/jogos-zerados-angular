import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameFormComponent } from './games/game-form/game-form.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { PlataformComponent } from './plataforms/plataform/plataform.component';
import { PlataformsComponent } from './plataforms/plataforms.component';
import { PlataformFormComponent } from './plataforms/plataform-form/plataform-form.component';
import { PlataformsListComponent } from './plataforms/plataforms-list/plataforms-list.component';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component';
import { TestFileComponent } from './test-file/test-file.component';
import { AuthComponent } from './auth/auth/auth.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'games', component: GamesComponent, children: [
      { path: 'add', component: GameFormComponent },
      { path: ':id', component: GameComponent },
      { path: ':id/edit', component: GameFormComponent },
    ]
  },

  {
    path: 'plataforms', component: PlataformsComponent, children: [
      { path: '', component: PlataformsListComponent },
      { path: 'add', component: PlataformFormComponent },
      { path: ':slug', component: PlataformComponent },
      { path: ':slug/edit', component: PlataformFormComponent },
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: 'upload', component: UploadFileComponent },
  { path: 'test-file', component: TestFileComponent }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
