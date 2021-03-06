/* global angular */
angular.module('movieApp', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$locationProvider',
  '$urlRouterProvider',
  RouterFunction
])

function RouterFunction ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)
  $stateProvider
  .state('movieIndex', {
    url: '/movies',
    templateUrl: 'js/ng-views/index.html',
    controller: 'MovieIndexController',
    controllerAs: 'vm'
  })
  .state('movieNew', {
    url: '/movies/new',
    templateUrl: 'js/ng-views/new.html',
    controller: 'MovieNewController',
    controllerAs: 'vm'
  })
  .state('movieEdit', {
    url: '/movies/:id/edit',
    templateUrl: 'js/ng-views/edit.html',
    controller: 'MovieEditController',
    controllerAs: 'vm',
    resolve: MovieEditController.resolve
  })
  .state('movieShow', {
    url: '/movies/:id',
    templateUrl: 'js/ng-views/show.html',
    controller: 'MovieShowController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/movies')
}
