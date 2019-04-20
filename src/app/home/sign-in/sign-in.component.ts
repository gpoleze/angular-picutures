import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {PlatformDetectorService} from '../../core/platform/plataform.service';
import {setFirstTemplatePass} from '@angular/core/src/render3/state';
import {SetFocusService} from '../set-focus.service';

@Component({
    templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private service: AuthService,
        private router: Router,
        private focusService: SetFocusService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.focusService.setFocusOnInoutElement(this.usernameInput);
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
                    this.focusService.setFocusOnInoutElement(this.usernameInput);
                }
            );
    }
}
