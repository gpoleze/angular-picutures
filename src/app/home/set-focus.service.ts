import {ElementRef, Injectable} from '@angular/core';
import {PlatformDetectorService} from '../core/platform/plataform.service';

@Injectable()
export class SetFocusService {
    constructor(private service: PlatformDetectorService) { }

    setFocusOnInoutElement(el: ElementRef<HTMLInputElement>) {
        if (this.service.isPlatformBrowser()) {
            el.nativeElement.focus();
        }
    }
}


