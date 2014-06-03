/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin.controller('adminEmployeeList_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {

        $scope.allUsers = [];

        Init();

        function Init() {
            DataContext.allUsers().then(function (data) {
                $scope.allUsers = data;
            });
        };

        $scope.goBack = function () {
            DataContext.redirectTo('/admin/');
        };

        $scope.ReloadTable = function () {
            Init();
        };

        $scope.addNew = function () {
            DataContext.redirectTo('/admin/emp/new');
        };

        $scope.editOperation = function (user) {
            DataContext.redirectTo('/admin/empDetailsUpdate?ID=' + user.EmployeeGUID);
        };

    }]);


})();

