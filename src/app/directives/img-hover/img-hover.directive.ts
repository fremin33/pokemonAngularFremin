import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appImgHover]'
})
export class ImgHoverDirective {

    constructor(private el: ElementRef) {

    }

    @HostListener('mouseover') onHover() {
        this.el.nativeElement.style.transform = 'scaleX(-1)';
        if (this.el.nativeElement.attributes.id.value % 2 === 0) {
            this.el.nativeElement.style.background = 'linear-gradient(to right, #58BAE8, #4EDE95)';
        } else {
            this.el.nativeElement.style.background = 'linear-gradient(to left, #58BAE8, #4EDE95)';
        }
    }

    @HostListener('mouseout') onLeave() {
        this.el.nativeElement.style.transform = 'scaleX(1)';
        this.el.nativeElement.style.background = 'transparent';
    }

}
