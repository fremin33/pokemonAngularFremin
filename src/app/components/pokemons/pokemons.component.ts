import {Component, OnInit} from '@angular/core';
import {PokemonsService} from '../../services/pokemon/pokemons.service';


@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

    pokemons$ = [];

    constructor(private pokemonService: PokemonsService) {
    }


    ngOnInit() {

        this.pokemons$.push(this.pokemonService.getDonnees());
        this.pokemons$.forEach((pokemon) => {
            pokemon.forEach((pkm) => {
                this.pokemons$.push(pkm);
            });
        });
    }
}
