import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `
  ]
})
export class HomeComponent {

  get auth(){
    return this.authSercice.auth;
  }

  constructor(
    private router:Router,
    private authSercice:AuthService
  ){}

  logout(){
    this.authSercice.logout();
    this.router.navigate(['.auth/']);
  }

}
