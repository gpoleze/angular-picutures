import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private service: UserService,
        private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.service.isLoggedIn()) {
            this.router.navigate(['user', this.service.getLoggedInUserName()]);
            return false;
        }
        return true;
    }


}
