import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {UserService} from '../user/user.service';
import {User} from '../user/user';

@Component({
    selector: 'ap-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    private user$: Observable<User>;
    user: User;

    constructor(private service: UserService) {
        this.user$ = service.getUser();
        this.user$.subscribe(user => this.user = user);
    }
}
