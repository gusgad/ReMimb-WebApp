app.controller('mainController', ['$scope', 'cardInfo', '$location', '$firebaseArray', '$routeParams', '$http', '$timeout', function ($scope, cardInfo, $location, $firebaseArray, $routeParams, $http, $timeout) {

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
    })   
      
      
    // Clear the inputs after submitting
    $scope.item.title = '';
    $scope.item.description = '';
    $scope.item.place = '';
};  
      


  // Add the card to favorites
  $scope.makeFav = function (id) {
    cardInfo.child(id).update({ fav: true });
  };
    

  
  
  
  
  
  
  
  
  
  
}]);