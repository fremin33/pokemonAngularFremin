import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'imgPokemon'
})
export class ImgPokemonPipe implements PipeTransform {

    transform(value: number): string {
        let newValue: string;
        value++;
        if (value.toString().length === 1) {
            newValue = `00${value}`;
        }
        if (value.toString().length === 2) {
            newValue = `0${value}`;
        }
        if (value.toString().length === 3) {
            newValue = `${value}`;
        }

        return String(newValue);
    }
}
