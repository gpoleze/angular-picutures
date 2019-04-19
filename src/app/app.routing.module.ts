import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/auth/auth.guard';

import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {PhotoListResolver} from './photos/photo-list/photo-list.resolver';
import {SignInComponent} from './home/sign-in/sign-in.component';

const ROUTES: Routes = [
    {
        path: '',
        component: SignInComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
