import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {PhotoComponent} from './photo/photo.component';
import {PhotosComponent} from './photo-list/photos/photos.component';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {FilterByDescriptionPipe} from './photo-list/filterByDescription.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotosComponent,
        PhotoListComponent,
        PhotosComponent,
        FilterByDescriptionPipe,
        LoadButtonComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {

}
