import {Directive, HostListener, ElementRef} from '@angular/core';
import {Location} from '@angular/common';

@Directive({
    selector: '[appRedirectPokemon]'
})
export class RedirectPokemonDirective {

    constructor(private location: Location, private elementRef: ElementRef) {

    }

    @HostListener('click') scrolling() {
        if (this.location.path() !== '/pokemon') {
            this.location.back();
        }
    }

}
