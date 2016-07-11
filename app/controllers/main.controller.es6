app.controller('mainController', ['$scope', 'cardInfo', '$location', '$firebaseArray', '$routeParams', function ($scope, cardInfo, $location, $firebaseArray, routeParams) {

  /* DB operations */

  let data = $firebaseArray(cardInfo);
  $scope.items = data

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
  
  $scope.expand = function(event) {
    event.currentTarget.parentElement.parentElement.classList.toggle('card-expanded')    
  }
  

  
  
  
  
  
  
  
  
  
  
  
  
}]);