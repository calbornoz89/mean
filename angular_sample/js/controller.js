angular.module('myApp.controllers',[])
// .run(function($rootScope,$timeout){
//   $timeout(function(){
//
//     $rootScope.myLink
//   })
//
//
// })


.controller('mainCtrl', function($scope,$filter, cityService){

  $scope.message = "La aplicacion ha sido creada"


  $scope.name = 'Carlos Albornoz';
  $scope.toLowerCase = $filter('lowercase')($scope.name)

  $scope.isCapitalized = function(str){
    return str[0] == str[0].toUpperCase();

  }
console.log(cityService.getCity('SFO'))
console.log($scope.message);

})

.controller('citiesCtrl', function($scope, cityService){

  $scope.cities = cityService.getCities();


  $scope.myLink = "http://google.com.pe"

  $scope.fields = [
    {placeholder: 'abbr', isRequired:true},
    {placeholder: 'name', isRequired:true}

  ]

  $scope.searchCity = function(cityAbbr){

    $scope.city = cityService.getCity(cityAbbr)[0];
    console.log(cityService.getCity(cityAbbr)[0]);
    }

    $scope.calculate = function(){
      $scope.result = Number($scope.myNumber) * 5;
    }

    $scope.generateNumber = function(){
      return Math.floor((Math.random()*10)+1)
    }






})


.controller('clockCtrl', function($scope){

  $scope.clock = {

    now: new Date()
  }
var updateClock = function(){
  $scope.clock.now = new Date();

}
$scope.changeClock = function(){

  updateClock();

}
setInterval(function(){
  $scope.$apply(updateClock);

},1000);
})
