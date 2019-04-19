import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

import {UserService} from '../user/user.service';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private service: UserService
    ) {
    }

    authenticate(userName: string, password: string) {
        return this.http
            .post(
                API + '/user/login', {userName, password},
                {observe: 'response'}
            )
            .pipe(tap(response => {
                const authToken = response.headers.get('x-access-token');
                this.service.setToken(authToken);
                console.log(`User ${userName} authenticate with token ${authToken}`);
            }));

    }
}
