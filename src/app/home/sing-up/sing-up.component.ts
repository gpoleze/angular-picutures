import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';
import {NewUser} from './new-user';
import {SignUpService} from './sign-up.service';
import {Router} from '@angular/router';
import {PlatformDetectorService} from '../../core/platform/plataform.service';
import {SetFocusService} from '../set-focus.service';

@Component({
    templateUrl: './sing-up.component.html'
})
export class SingUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
    private FULL_NAME_MIN_LENGTH = 2;
    private FULL_NAME_MAX_LENGTH = 40;
    private USER_NAME_MIN_LENGTH = 2;
    private USER_NAME_MAX_LENGTH = 30;
    private PASSWORD_MIN_LENGTH = 8;
    private PASSWORD_MAX_LENGTH = 30;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private service: SignUpService,
        private router: Router,
        private focusService: SetFocusService
    ) {
    }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            fullName: ['', [
                Validators.required,
                Validators.minLength(this.FULL_NAME_MIN_LENGTH),
                Validators.maxLength(this.FULL_NAME_MAX_LENGTH)
            ]],
            userName: ['',
                [
                    Validators.required,
                    // Validators.pattern(/^[a-z0-9_\-]+$/),
                    lowerCaseValidator,
                    Validators.minLength(this.USER_NAME_MIN_LENGTH),
                    Validators.maxLength(this.USER_NAME_MAX_LENGTH)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', [
                Validators.required,
                Validators.minLength(this.PASSWORD_MIN_LENGTH),
                Validators.maxLength(this.PASSWORD_MAX_LENGTH)
            ]]
        });

        this.focusService.setFocusOnInoutElement(this.emailInput);
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.service
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            );
    }
}
