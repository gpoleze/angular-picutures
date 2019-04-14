import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() whenTyping = new EventEmitter<string>();
    @Input() value = '';
    debounce: Subject<string> = new Subject<string>();

    constructor() {
    }

    ngOnInit() {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.whenTyping.emit(filter));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}
