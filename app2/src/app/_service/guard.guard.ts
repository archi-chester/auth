import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isApproved(route);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isApproved(childRoute);
  }

  private isApproved(route: ActivatedRouteSnapshot) {
    return this.tryRoles(route.routeConfig.path);
  }

  private tryRoles(path: string) {
    const roles = localStorage.getItem('roles').split(',');
    let rezult = false;

    roles.forEach(role => {
      console.log(role, path)
      if (path === 'app2/child' && role === 'offline_access') {
        rezult = true;
      }

      if (path === 'app2/child2' && role === 'online_access') {
        rezult = true;
      }
      // console.log(rezult)
    })

    if (!rezult) {
      console.log('unauthorized!')
    }

    return rezult;
  }

}
