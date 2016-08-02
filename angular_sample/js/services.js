angular.module('myApp.services',[])

.service('cityService', function($filter){

  var cities = [
    {
      abbr : 'AL',
      name : 'Alabama'
    },{
      abbr : 'AK',
      name : 'Alaska'
    },{
      abbr : 'AZ',
      name : 'Arizona'
    },{
      abbr : 'AR',
      name : 'Arkansas'
    },{
      abbr : 'CA',
      name : 'California'
    },{
      abbr : 'CO',
      name : 'Colorado'
    },{
      abbr : 'CT',
      name : 'Connecticut'
    },{
      abbr : 'DE',
      name : 'Delaware'
    },{
      abbr : 'FL',
      name : 'Florida'
    }
  ];

  this.getCity = function(abr){
// buscar la ciudad
// var city = $filter('filter')(this.getCities(),{
//   abbr: abr
// }, true)
var city = $filter('filter')(cities,{
  abbr: abr
}, true)

return city;

  };

this.getCities = function(){

return cities;

}
})
