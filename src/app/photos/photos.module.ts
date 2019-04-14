import {NgModule} from '@angular/core';

import {PhotoModule} from './photo/photo.module';
import {PhotoListModule} from './photo-list/photo-list.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoListModule
    ]
})
export class PhotosModule {

}
