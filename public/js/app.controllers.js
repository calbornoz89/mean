angular.module('pokeApp.controllers',[])

.controller('mainCtrl', function($location) {
     var vm = this;
     vm.goTo = function(route){
       $location.path(route)
     }
   })



.controller('loginCtrl', function($http,pokemonServices){
  var vm = this;
  vm.message = 'Este es el login';

// vm => viewModel
//   vm.getPokemons = function(){
//     $http
//     // obtener la DB
//     .get("bd_pokemon/pokemons.json")
//
//
//     .then(function(response){
//
// pokemonServices.setPokemons(response.data)
//
//       // console.log(response.data[0])
//
//     })
//   }
//
// vm.getPokemons();


})

.controller('userCtrl', function(){
  var vm = this;
  vm.message = 'Este es el Admin de usuario';
})

.controller('pokemonCtrl', function(pokemonServices){
  var vm = this;
  vm.message = 'Este es el Admin de pokemon';
  pokemonServices.getPokemons().then(function(response){
          vm.pokemons = response;

        })
})
