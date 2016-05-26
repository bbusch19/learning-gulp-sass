angular.module('test', ['test']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('test', {

})

})
