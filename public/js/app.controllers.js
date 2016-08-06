angular.module('pokeApp.controllers',[])


.controller('loginCtrl', function(){
  var vm = this;
  vm.message = 'Este es el login';
})

.controller('userCtrl', function(){
  var vm = this;
  vm.message = 'Este es el Admin de usuario';
})

.controller('pokemonCtrl', function(){
  var vm = this;
  vm.message = 'Este es el Admin de pokemon';
})
