app.controller('mainController', ['$scope', 'cardInfo', 'Upload', '$firebaseArray', '$routeParams', '$timeout', function ($scope, cardInfo, Upload, $firebaseArray, $routeParams, $timeout) {

  /* Retreiving data from factory */

  let data = $firebaseArray(cardInfo);
    
  $scope.items = data


  /* Adding items */
  $scope.addItem = function (file) {
    console.log(file)
    
    let title = $scope.item.title;
    let description = $scope.item.description;
    let place = $scope.item.place;
    
    // Converting uploaded image to base64
    let image = Upload.base64DataUrl(file).then(function(base64Urls){
        cardInfo.push({
            title: title,
            description: description,
            place: place,
            fav: false,
            image: base64Urls
        });
    })
     
    
      
    // Clearing up inputs after submitting
    $scope.item.title = '';
    $scope.item.description = '';
    $scope.item.place = '';
};  
      


  /* Adding card to favorites */
  $scope.makeFav = function (id) {
    cardInfo.child(id).update({ fav: true });
  };
    
}]);