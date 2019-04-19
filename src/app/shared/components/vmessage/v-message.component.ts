import {Component, Input} from '@angular/core';

@Component({
    selector: 'ap-vmessage',
    templateUrl: './v-message.component.html'
})
export class VMessageComponent {
    @Input() text = '';
}
