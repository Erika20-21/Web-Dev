(function() {
	'use strict';
	angular.module('MSGApp', []). controller('MSGController', MSGController);

	MSGController.$inject = ['$scope'];
	function MSGController($scope){
	$scope.name="Mina";
		$scope.progress = "SS";
	$scope.sayIt= function () {
	return "I am currenlty enrolled in Web Development";
	};
$scope.prog = function (){
$scope.progress = "S";
};
}
})();