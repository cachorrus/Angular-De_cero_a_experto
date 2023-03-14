import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(
    private route:Router,
    private authService: AuthService
  ){}

  login() {

    this.authService.login()
      .subscribe({
        next: (resp) => {          
          this.route.navigate(['./heroes']);
        },
        error: (resp) => {
          console.log('No se encontro el usuario');          
        }
      });
      

    //this.route.navigate(['./heroes']);
  }

  ingresarSinLogin() {
    this.authService.logout();
    this.route.navigate(['/heroes']);
  }
}
