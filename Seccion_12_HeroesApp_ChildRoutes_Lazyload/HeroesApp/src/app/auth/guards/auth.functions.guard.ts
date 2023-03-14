import { inject } from "@angular/core";
import { Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";

/* Guards como funciones
https://blog.angulartraining.com/whats-new-in-angular-15-1-fbd1cb5abcab
https://itnext.io/everything-you-need-to-know-about-route-guard-in-angular-697a062d3198
https://stackoverflow.com/questions/75580544/how-to-implement-angular-authguard-that-uses-canmatchfn-and-canactivatefn-how
https://stackoverflow.com/questions/75475333/using-redirectto-and-canmatch-in-routing-config-to-redirect-users-based-on-p
*/
export function isAutenticated (
    route: Route, 
    segments: UrlSegment[]): 
    Observable<boolean | UrlTree> | 
    Promise<boolean | UrlTree> | boolean | UrlTree
    { 
      const authService = inject(AuthService);
      return authService.verificaAutenticacion();
      /* 
      if (authService.auth.id) {
        return true;
      }
        
      console.log('bloqueado por el AuthGuard functions');
           
      return of(false);
      */
}

