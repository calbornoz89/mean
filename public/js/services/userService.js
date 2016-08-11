angular.module('pokeApp.userServices',[])

.service('User', function($http, $q){

var _users = undefined;
var _user = undefined;

  this.all = function(){
    if (!_users) {
        var deferred = $q.defer();

        $http.get("/api/users/")
            .success(function(response) {
                deferred.resolve(response);
            })
            .error(function(response) {
                deferred.reject(response);
            });
        _users = deferred.promise
    }
    return _users;
  }

  // CREATE
    // this.create = function(){
    //       $http.post('/api/users', todoData);
    //     }



        // return {
        //             get : function() {
        //                 return $http.get('/api/todos');
        //             },
        //             create : function(todoData) {
        //                 return $http.post('/api/todos', todoData);
        //             },
        //             delete : function(id) {
        //                 return $http.delete('/api/todos/' + id);
        //             }



})
