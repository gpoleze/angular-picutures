import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    authenticate(userName: string, password: string) {
        return this.http.post(API + '/user/login', {userName, password});
    }
}
