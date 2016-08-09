angular.module('pokeApp.pokemonCtrl',[])

.controller('pokemonCtrl', function(pokemonServices){
  var vm = this;
  vm.message = 'Este es el Admin de pokemon';


  pokemonServices.getPokemons().then(function(response){
          vm.pokemons = response;

        })

        
})
