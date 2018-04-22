import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailPokemonComponent} from './components/detail-pokemon/detail-pokemon.component';
import {PokemonsComponent} from './components/pokemons/pokemons.component';


const routes: Routes = [
    {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
    {path: 'pokemon', component: PokemonsComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
