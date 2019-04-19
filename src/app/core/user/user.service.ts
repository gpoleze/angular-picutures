import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {BehaviorSubject} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import {User} from './user';


@Injectable({providedIn: 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor(private service: TokenService) {

        service.hasToken() && this.decodeAndNotify();

    }

    setToken(token: string) {
        this.service.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.service.getToken();
        const user = jwt_decode(token) as User;
        return this.userSubject.next(user);
    }
}
