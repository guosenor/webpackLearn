/**
 * Created by guosen on 2018/4/24.
 */
angular
    .module('app')
    .controller('MainPageController',['$scope',function ($scope) {
        $scope.helloWorld='helloworld webpack angular1.x';
    }]);