import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotoListComponent} from './photo-list.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {PhotosComponent} from './photos/photos.component';
import {FilterByDescriptionPipe} from './filterByDescription.pipe';
import {PhotoModule} from '../photo/photo.module';
import {CardModule} from '../../shared/components/card/card.module';
import {SearchModule} from './search/search.module';
import {DarkenOnHoverModule} from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        SearchModule,
        DarkenOnHoverModule,
    ]
})
export class PhotoListModule {
}
