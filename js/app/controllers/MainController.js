function MainController($scope) {
  $scope.name = 'Jaclyn';
  $scope.last_name = 'Ciringione';
}


angular
  .module('app')
  .controller('MainController', MainController);