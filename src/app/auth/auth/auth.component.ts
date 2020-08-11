import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bdg-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoading = false;
  isSignUpMode = false;
  errorMessage: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.isLoading = true;
    if (this.isSignUpMode) {
      const { name, email, password, passwordConfirm } = form.value;

      this.authService.signUp(name, email, password, passwordConfirm).subscribe(
        response => this.authSucces(),
        error => {
          console.log(error.error.error)
          this.errorMessage = error.error.error.code === 11000 ?
            'Email já cadastrado anteriormente' : 'Erro desconhecido';
          this.dismissError();
        }
      )
    }
    else {
      const { email, password } = form.value;
      this.authService.login(email, password).subscribe(
        response => this.authSucces(),
        error => {
          this.errorMessage = error.error.message
          this.dismissError();
        }
      )
    }
  }

  private authSucces() {
    this.isLoading = false;
    this.router.navigate(['/']);
  }
  private dismissError() {
    setTimeout(() => {
      this.errorMessage = undefined;
      this.isLoading = false;
    }, 3000)
  }
}
