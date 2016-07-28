angular.module('myApp.directives',[])
.directive('attribute', function(){
  return {
    restrict: 'A',
    template: '<h1>Directiva attribute</h1>'
    // templateUrl: 'miarchivo.html'
  }
})
.directive('element', function(){
  return {
    restrict: 'E',
    template: '<h1>Directiva element</h1>'
    // templateUrl: 'miarchivo.html'
  }
})
.directive('clock', function(){
  return {
    restrict: 'AE',
    // template: '<h1>Directiva element</h1>'
    templateUrl: "../angular_sample/js/reloj.html"
  }
})
