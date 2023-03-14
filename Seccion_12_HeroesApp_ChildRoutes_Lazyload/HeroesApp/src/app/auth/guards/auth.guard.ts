import { Injectable } from '@angular/core';
import {  Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

//https://stackoverflow.com/questions/75564717/angular-canactivate-is-deprecated-how-to-replace-it

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private authService:AuthService) {}
  
  //Note: This guard has been deprecated in Angular v.15.1 and has been replaced by CanMatch
  // canMatch = canLoad + canActivate
  canMatch(route: Route, segments: UrlSegment[])
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          
      /* console.log(route);
      console.log(segments); */

    if (this.authService.auth.id) {
      return true;
    }
      
    console.log('bloqueado por el AuthGuard');
    
    return false;
  }
  
}
