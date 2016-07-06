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

  $scope.makeFav = function (id) {
    cardInfo.child(id).update({ fav: true });
  };
    

}]);