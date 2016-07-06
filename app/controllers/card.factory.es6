app.factory('cardInfo',['$firebaseArray', function() {
    
    
    let ref = new Firebase("https://remimb-webapp-855cc.firebaseio.com/")
    
    return ref
    
}])