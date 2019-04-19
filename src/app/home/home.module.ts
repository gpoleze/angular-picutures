import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SignInComponent} from './sign-in/sign-in.component';
import {VMessageModule} from '../shared/components/vmessage/v-message.module';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {
}
