/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('main_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            Init();
            function Init() {
                DataContext.spProperties().then(function (data) {
                    $scope.userData = data.d;
                });
            };
        }]);
})();