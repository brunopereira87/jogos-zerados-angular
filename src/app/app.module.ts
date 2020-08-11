import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlataformsComponent } from './plataforms/plataforms.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { PlataformComponent } from './plataforms/plataform/plataform.component';
//import { HttpClient } from 'selenium-webdriver/http';
import { PlataformsService } from './services/plataforms.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GamesModule } from './games/games.module';
import { GameFeaturedComponent } from './shared/game-featured/game-featured.component';
import { GameCardComponent } from './shared/game-card/game-card.component';
import { AppRoutingModule } from './app-routing.module';
import { PlataformCardComponent } from './shared/plataform-card/plataform-card.component';
import { PlataformFormComponent } from './plataforms/plataform-form/plataform-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlataformsListComponent } from './plataforms/plataforms-list/plataforms-list.component';
import { UploadFileModule } from './upload-file/upload-file.module';
import { TestFileComponent } from './test-file/test-file.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ConfirmEqualValidatorDirective } from './shared/directives/confirm-equal-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PlataformsComponent,
    PlataformComponent,
    GameFeaturedComponent,
    GameCardComponent,
    PlataformCardComponent,
    PlataformFormComponent,
    PlataformsListComponent,
    TestFileComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    GamesModule,
    UploadFileModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule

  ],
  providers: [PlataformsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
