import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SignInComponent} from './sign-in/sign-in.component';
import {VMessageModule} from '../shared/components/vmessage/v-message.module';
import { SingUpComponent } from './sing-up/sing-up.component';

@NgModule({
    declarations: [
        SignInComponent,
        SingUpComponent
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
