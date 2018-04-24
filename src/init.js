/**
 * Created by guosen on 2018/4/24.
 */
angular
    .module('app', [
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main-page', {
                url: '/main-page',
                templateUrl: 'views/main-page.html',
                controller: 'MainPageController'
            })
        $urlRouterProvider.otherwise('main-page');
    }])
    .run(['$rootScope', '$state', function ($rootScope, $state) {

    }]);