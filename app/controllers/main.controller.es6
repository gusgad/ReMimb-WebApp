app.controller('mainController', ['$scope', '$location', '$firebaseArray', function ($scope, $location, $firebaseArray) {
    
  /* DB operations */
    
  // DB reference
    let ref = new Firebase("https://remimb-webapp-855cc.firebaseio.com/")
    
    $scope.items = $firebaseArray(ref)



  // Add items
  $scope.addItem = function () {
    ref.push({
      title: $scope.item.title,
      description: $scope.item.description,
      place: $scope.item.place,
      fav: false
    });

    // Clear the inputs after submitting
    $scope.item.title = '';
    $scope.item.description = '';
    $scope.item.place = ''
  };

}]);