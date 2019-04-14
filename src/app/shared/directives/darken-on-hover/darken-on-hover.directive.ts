import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightnessLevel = 70;

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) { }

    @HostListener('mouseover')
    darkerOn() {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightnessLevel}%)`);
    }

    @HostListener('mouseleave')
    darkerOff() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }

}
