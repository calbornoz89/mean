angular.module('pokeApp.userCtrl',[])

.controller('userCtrl', function(User){
  var vm = this;
  vm.message = 'Este es el Admin de usuario';


  User.all().then(function(response){
          vm.users = response;

        })

  // User.create().then(function(response){
  //         vm.users = response;
  // })


  // User.create().then(function() {
  //                $http.post('/api/users')
  //                        .success(function(data) {
  //                          vm.name = data.name;
  //                          vm.username = data.username;
  //                          vm.password = data.password;
  //                               //  $scope.formData = {}; // clear the form so our user is ready to enter another
  //                               //  $scope.todos = data;
  //                        })
  //                        .error(function(data) {
  //                                console.log('Error: ' + data);
  //                        });
  //        })

// DELETE
  // User.delete(function(req, res){
  //       User.remove({
  //         _id: req.params.user_id
  //
  //       },function(err, _user){
  //         if(err) return res.send(err);
  //         res.json({message: 'El usuario se ha eliminado'})
  //       })
  //     })

// UPDATE
      // User.update(function(req, res){
      //   User.findById(req.params.user_id, function(err, _user){
      //     if(err) return res.send(err);
      //       if(req.body.name) _user.name = req.body.name;
      //       if(req.body.username) _user.username = req.body.username;
      //       if(req.body.password) _user.password = req.body.password;
      //
      //       _user.save(function(err){
      //         if(err) return res.send(err);
      //         res.json({message: 'Usuario actualizado'})
      //       })
      //     })
      //   })

// GET
        // User.get(function(req, res){
        //   User.find (function(err, users){
        //     if(err) return res.send(err);
        //     res.json(users);
        //   })
        // })


})
