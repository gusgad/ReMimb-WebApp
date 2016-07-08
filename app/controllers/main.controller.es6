app.controller('mainController', ['$scope', 'cardInfo', '$location', '$firebaseArray', function ($scope, cardInfo, $location, $firebaseArray) {

  /* DB operations */

  $scope.items = $firebaseArray(cardInfo);

  // Add items
  $scope.addItem = function () {
    cardInfo.push({
      title: $scope.item.title,
      description: $scope.item.description,
      place: $scope.item.place,
      fav: false
    });

    // Clear the inputs after submitting
    $scope.item.title = '';
    $scope.item.description = '';
    $scope.item.place = '';
  };

  // Add the card to favorites
  $scope.makeFav = function (id) {
    cardInfo.child(id).update({ fav: true });
  };
    

  /* Card expanding */
  
  //$scope.isExpanded = false
  /*$scope.expand = function(event) {
    //$scope.isExpanded = !$scope.isExpanded
    angular.element(event.currentTarget)
  }*/
  

}]);