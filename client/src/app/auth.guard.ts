import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('guarded route:',next.routeConfig.path);   
      console.log('route data:',next.data);
      console.log('user role:',this._userService.role);
      if(next.data) {        
        if(next.data.minLevelAllowed) { // request to validate route against level
          if( this._userService.role < next.data.minLevelAllowed ) {
            this.router.navigate(['/login']);
          }
        }
        else if( next.data.onlyNotLogged ) { // request to validate route against logged status
          if( this._userService.role != "Admin" ) {
            this.router.navigate(['/']);
          }
          if( this._userService.role != "Customer" ) {
            this.router.navigate(['/']);
          }
        } 
        else if( next.data.redirectAdmin && this._userService.role=="admin" ) {
          this.router.navigate([next.data.redirectAdmin]);
        }
      }

    return true;
  }
}
