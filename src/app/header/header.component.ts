import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bdg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userSub: Subscription;
  logged = false;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(
      user => this.logged = !!user
    )
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
