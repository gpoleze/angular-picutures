import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {UserService} from '../user/user.service';
import {User} from '../user/user';
import {Router} from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;

    constructor(
        private service: UserService,
        private router: Router
    ) {
        this.user$ = service.getUser();
    }

    logout() {
        this.service.logout();
        this.router.navigate(['']);
    }
}
