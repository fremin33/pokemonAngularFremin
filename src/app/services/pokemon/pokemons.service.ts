import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PokemonsService {
    url = 'https://pokeapi.co/api/v2/pokemon/';
    limit = 0;
    offset = 0;

    constructor(private http: HttpClient) {
    }


    getDonnees(): Observable<any> {
        return this.http.get(`${this.url}?limit=806&offset=${this.offset}`);
    }
}