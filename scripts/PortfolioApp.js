var PortfolioApp = angular.module('portfolioApp', []);

PortfolioApp.directive('navTemplate', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '../templates/nav.html'
  }
});

PortfolioApp.directive('footerTemplate', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '../templates/footer.html'
  }
})
