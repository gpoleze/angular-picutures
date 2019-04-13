import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Photo} from '../../photo/photo';

@Component({
    selector: 'ap-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

    @Input() photos: Photo[] = [];
    rows: Photo[][] = [];

    constructor() {
    }

    private groupColumns(photos: Photo[]): Photo[][] {
        const newRows: Photo[][] = [];

        for (let i = 0; i < photos.length; i += 3) {
            newRows.push(photos.slice(i, i + 3));
        }

        return newRows;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.photos) {
            this.rows = this.groupColumns(this.photos);
        }
    }
}
