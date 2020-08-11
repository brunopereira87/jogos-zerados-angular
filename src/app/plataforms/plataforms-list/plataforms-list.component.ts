import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plataform } from '../plataform.model';
import { PlataformsService } from 'src/app/services/plataforms.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bdg-plataforms-list',
  templateUrl: './plataforms-list.component.html',
  styleUrls: ['./plataforms-list.component.scss']
})
export class PlataformsListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  plataforms: Plataform[];
  constructor(private plataformsService: PlataformsService,
    private router: Router) { }

  ngOnInit() {
    // this.plataformsService.plataforms().subscribe(plataforms => {
    //   this.plataforms = plataforms
    //   console.log(plataforms)
    // })
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false
    };
    this.plataformsService.getPlataforms().subscribe(
      data => {
        this.plataforms = data.plataformas;
      }
    );
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

}
