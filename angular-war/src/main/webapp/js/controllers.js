var controllers = angular.module('controllers', []);

controllers.controller('NavCtrl', ['$scope', '$location',
    function($scope, $location){
   		$scope.navLabels = ['Home', 'Examples', 'About', 'Contact'];
   		
   		$scope.setSelectedNav = function(nav){
   			$scope.selected = nav
   		};
   		
   		$scope.setActive = function(nav){
   			return $scope.selected.toLowerCase() === nav.toLowerCase();
   		};
   		
   		var path = $location.path();
   		
   		$scope.selected = path.substring(1, path.length);
   		
   	}                                   
]);

controllers.controller('MainCtrl', ['$scope', '$interval',
	function($scope, $interval){
		$scope.hello = 'hello';
		
		$scope.testInterval= function(){
			$interval(function(){
			
			if($scope.hello == 'hello')
				$scope.hello = 'olleh';
			else
				$scope.hello = 'hello';	
		}, 4000)};
		
	}
]);

controllers.controller('ExamplesCtrl', ['$scope',
	function($scope){
	
	}
]);

controllers.controller('AboutCtrl', ['$scope',
	function($scope){
		
	}
]);

controllers.controller('ContactCtrl', ['$scope',
	function($scope){
		
	}
]);

