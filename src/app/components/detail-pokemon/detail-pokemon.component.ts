import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonDetailService} from '../../services/pokemon-detail/pokemon-detail.service';


// import {PokemonDetailService} from '../../services/pokemon-detail/pokemon-detail.service';

@Component({
    selector: 'app-detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
    pokemonType: Array<any> = [];

    constructor(private route: ActivatedRoute, private detailPokemonService: PokemonDetailService) {
    }

    ngOnInit() {

        const id = +this.route.snapshot.paramMap.get('id');


        this.detailPokemonService.getPokemon(id).subscribe(pokemon => {
                this.pokemonType.push({
                    type: pokemon.types[0].type.name,
                    name: pokemon.name,
                    hp: pokemon.base_experience,
                    weight: pokemon.weight,
                    height: pokemon.height,
                    id: pokemon.id
                });

            }
        );

    }

}
