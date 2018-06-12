import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PokemonDetailService {

    url = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private http: HttpClient) {
    }


    getPokemon(id: number): Observable<any> {
        return this.http.get(`${this.url}${id}`);
    }
}
