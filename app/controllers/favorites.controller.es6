app.controller('favoritesController', ['$scope', 'cardInfo', '$location', '$firebaseArray', function ($scope, cardInfo, $location, $firebaseArray) {
    
  /* DB operations */
    

   $scope.items = $firebaseArray(cardInfo)


}]);