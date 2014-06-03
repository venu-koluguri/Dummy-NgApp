/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';
    Intranet.Util.Global.Admin.controller('adminEmployeeDetails_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {
        $scope.vModel = {};

        Init();

        function Init() {
            var empGuid = DataContext.queryStringData('ID');
            DataContext.EmpByGuid(empGuid).then(function (data) { $scope.vModel = data; });
        };

        $scope.goBack = function () {
            DataContext.redirectTo('/admin/emp/locator');
        };

    }]);
})();

