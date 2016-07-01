app.controller('loginController',['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    
    var config = {
    apiKey: "AIzaSyAeW9GuyiSshnemiciVoMy6g_hSxrSRecA",
    authDomain: "remimb-webapp-855cc.firebaseapp.com",
    databaseURL: "https://remimb-webapp-855cc.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
    
  var provider = new firebase.auth.GoogleAuthProvider();
    
    
     $scope.login = function() {
        firebase.auth().signInWithRedirect(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user)
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
            
          console.log(errorCode + errorMessage)
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
     }
     
     var ref = firebase.database().ref();
     
     $scope.items = $firebaseArray(ref)
     
     $scope.addItem = function() {
        ref.push({
            title: $scope.item.title,
            description: $scope.item.description
        })
        
       $scope.item.title = ''
       $scope.item.description = ''
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
}]);