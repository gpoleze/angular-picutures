import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';

const ROUTES: Routes = [
    {path: 'user/:userName', component: PhotoListComponent},
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
export class AppRoutingModule { }
