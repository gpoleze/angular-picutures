import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private service: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.service
            .authenticate(username, password)
            .subscribe(
                () => this.router.navigate(['user', username]),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.usernameInput.nativeElement.focus();
                }
            );
    }
}
