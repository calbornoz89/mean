angular.module('pokeApp.services',[])

.service('pokemonServices', function($http, $q){

// var _pokemons = [];
// this.getPokemons = function(){
//
// return _pokemons;
// }
// this.setPokemons = function(pokemons){
//   _pokemons = pokemons;
// }

var _pokemons = undefined;

        this.getPokemons = function() {
            if (!_pokemons) {
                var deferred = $q.defer();

                $http.get("bd_pokemon/pokemons.json")
                    .success(function(response) {
                        deferred.resolve(response);
                    })
                    .error(function(response) {
                        deferred.reject(response);
                    });
                _pokemons = deferred.promise
            }
            return _pokemons;
        }
        this.clearPokemons = function(pokemons) {
            _pokemons = undefined;
        }

        this.searchPokemons = function(name) {
              //buscar la ciudad
              var _pokemon = $filter('filter')(pokemons, {
                  name: name
              }, true)
              return name;
          };
})
