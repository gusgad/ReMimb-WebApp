describe('Controller tests', function() {
    var mockScope = {},
        controller,
        mockInterval;
    
    beforeEach(angular.mock.module('ReMimb'));
    
    beforeEach(angular.mock.inject(function($controller, $rootScope, $interval) {
        mockScope = $rootScope.$new;
        mockInterval = $interval;
                                   
        controller = $controller('mainController', {
            $scope: mockScope
        });
        
        controller = $controller('favoritesController', {
            $scope: mockScope,
            $interval: mockInterval
        })
    }));
    
    it('should receive data from factory in mainController', function() {
        expect(mockScope.items).toBeDefined();
    })
    
    it('should clear input fields after successfully uploading a file in mainController', function() {
        expect(mockScope.item).toMatch('');
        expect(mockScope.description).toMatch('');
        expect(mockScope.place).toMatch('');
    })
    
    it('should remove an icon from favorites route in favoritesController', function() {
        mockInterval.flush(800);
        expect(mockScope.location).not.toBeNull();
    })
});

/*describe('Factory tests', function() {
    var mockScope = {},
        controller,
        backend;
    
    
    beforeEach(angular.mock.module('ReMimb'));
    
    beforeEach(angular.mock.inject(function($httpBackend) {
        backend = $httpBackend;
        
        backend.expect('GET', 'https://remimb-webapp-855cc.firebaseio.com/').respond([
            {
                title: 'Phone',
                description: 'My iPhone 6',
                place: 'Kitchen',
                image: 'image.jpg',
                fav: false
            }
        ])
    }));
    
    beforeEach(angular.mock.inject(function($controller, $rootScope, $http) {
        mockScope = $rootScope.$new;
                                   
        controller = $controller('mainController', {
            $scope: mockScope
        })
    }));
    
    
});*/