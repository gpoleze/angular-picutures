import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SignInComponent} from './sign-in/sign-in.component';
import {VMessageModule} from '../shared/components/vmessage/v-message.module';
import {SingUpComponent} from './sing-up/sing-up.component';
import {HomeComponent} from './home/home.component';
import {HomeRoutingModule} from './home.routing.module';
import {SignUpService} from './sing-up/sign-up.service';
import {SetFocusService} from './set-focus.service';

@NgModule({
    declarations: [
        SignInComponent,
        SingUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService,
        SetFocusService
    ]
})
export class HomeModule {
}
