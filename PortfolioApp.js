var PortfolioApp = angular.module('portfolioApp', []);
PortfolioApp.controller('NavBar', ['$scope', function($scope) {
  $scope.pages = [
    {name: 'Home', url:'index.html'},
    {name:'Works', url:'works.html'},
    {name: 'About', url:'about.html'}
  ];
}]);

PortfolioApp.directive('navBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'navbar.html'
  }
});

PortfolioApp.directive("cotent", function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'content.html'
  }
})
