/**
 * Created by guosen on 2018/4/23.
 */

import './css/commStyle.css'

import 'angular';
import 'angular-ui-router';
import './init';
import './controller/mainPageController';
angular.element(document).ready(function () {
    angular.element(document).find('body').append('<main ui-view class="main-body" id="mainBody"></main>');
    angular.bootstrap(document, ["app"]);
});
