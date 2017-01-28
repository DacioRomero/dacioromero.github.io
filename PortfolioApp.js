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
    templateUrl: function(elem) {
      restrict: 'E',
      templateUrl: 'navbar.html'
    }
  }
});

PortfolioApp.directive("cotent", function() {
  return {
    templateUrl: function() {
      restrict: 'E',
      transclude: true,
      templateUrl: 'content.html'
    }
  }
})
