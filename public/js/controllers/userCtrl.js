angular.module('pokeApp.userCtrl',[])

.controller('userCtrl', function(User){
  var vm = this;
  vm.message = 'Este es el Admin de usuario';


  User.all().then(function(response){
          vm.users = response;

        })

})
