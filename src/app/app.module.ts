import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PokemonsComponent} from './components/pokemons/pokemons.component';
import {DetailPokemonComponent} from './components/detail-pokemon/detail-pokemon.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {PokemonsService} from './services/pokemon/pokemons.service';
import {ImgPokemonPipe} from './pipes/img-pokemon/img-pokemon.pipe';
import {NgHttpLoaderModule} from 'ng-http-loader/ng-http-loader.module';
import {PokemonDetailService} from './services/pokemon-detail/pokemon-detail.service';
import {CapitalizePipe} from './pipes/capitalize/capitalize.pipe';
import {ImgHoverDirective} from './directives/img-hover/img-hover.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPokemonPipe} from './pipes/filter-pokemon/filter-pokemon.pipe';
import {RedirectPokemonDirective} from './directives/redirect-pokemon/redirect-pokemon.directive';


@NgModule({
    declarations: [
        AppComponent,
        PokemonsComponent,
        DetailPokemonComponent,
        ImgPokemonPipe,
        CapitalizePipe,
        ImgHoverDirective,
        FilterPokemonPipe,
        RedirectPokemonDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NgHttpLoaderModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        PokemonsService,
        PokemonDetailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
