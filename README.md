# Pokédex - Angular 5

![pokemon_logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png)

Le site est disponible à l'url suivante : 

http://lpcm2016.univ-lr.fr/ffremin/freminAngularPokemon

## Pokédex

Le **Pokédex** est un objet technologique fictif de l'univers des pokémons : il s'agit d'une encyclopédie recensant les créatures fictives connues. Son but est d'informer les dresseurs su les caractéristiques de chaque créature.



## Use Case

Le site récupère les informations grâce à l'API  [Pokéapi](https://pokeapi.co/) et affiche la totalité des pokemons sur la page d'accueil. L'utilisateur à la possibilité d'effectuer une recherche de son pokemon préféré. Une fois la rechercher effectué, on clique pour accéder au détail du pokemon avec les informations relatives à son type, poids ou taille.



## Composants

### SpinnerComponent

Ce composant permet d'afficher un loader tant que le service PokemonsService et PokemonDetailService  n'ont pas récupéré la totalité des informations à travers l'api.

### PokemonsComponent

Ce composant est celui utilisé pour la page d'accueil. C'est ici qu'on va afficher la totalité des pokemons avec une image ainsi que son numéro dans le pokedex et son nom. L'utilisateur a à disposition un formulaire pour effectuer une recherche sur un pokémon précis. En cliquant sur un des pokemons, on change de composant.

### DetailPokemonComponent

Ce composant affiche les caractéristiques précisent d'un pokemon. Son image, son nom, son poids, sa taille, sa vie ainsi que son type. On clique sur le formulaire pour effectuer une autre recherche.



## Directives

### ImgHoverDirective

Cette directive s'applique au hover d'une image sur la page d'accueil. Elle permet de modifier le background de chaque image en fonction de son id (pair ou impair) et de la faire pivoter.

### RedirectPokemonDirective

Cette directive est utilisée dans le composant DetailPokemonComponent au niveau du formulaire. Si on clique pour effectuer une nouvelle recherche, l'utilisateur est redirigé vers le composant PokemonsComponent.



## Pipes

### CapitalizePipe

Ce pipe est utilisé pour transformer la première lettre d'un mot en majuscule 

- hello devient Hello

### ImgPokemonPipe

Ce pipe permet de changer la valeur de l'id d'un pokemon pour pouvoir afficher son image. 

- 1 devient 001
- 10 devient 010

### FilterPokemonPipe

Ce pipe est utilisé pour filtrer les pokemons à travers le formulaire de recherche. Il retoune un tableau des valeurs qui match avec les mots dans le fomulaire.