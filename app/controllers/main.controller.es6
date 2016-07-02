app.controller('mainController', ['$scope', '$firebaseArray', '$location', function ($scope, $firebaseArray, $location) {

  // Init config
  let config = {
    apiKey: "AIzaSyAeW9GuyiSshnemiciVoMy6g_hSxrSRecA",
    authDomain: "remimb-webapp-855cc.firebaseapp.com",
    databaseURL: "https://remimb-webapp-855cc.firebaseio.com",
    storageBucket: ""
  };

  firebase.initializeApp(config);

    

    
  /* DB operations */
    
  // DB reference
    let ref = firebase.database().ref();
  

  // Get items
  $scope.items = $firebaseArray(ref);

  // Add items
  $scope.addItem = function () {
    ref.push({
      title: $scope.item.title,
      description: $scope.item.description
    });

    // Clear the inputs after submitting
    $scope.item.title = '';
    $scope.item.description = '';
  };

}]);