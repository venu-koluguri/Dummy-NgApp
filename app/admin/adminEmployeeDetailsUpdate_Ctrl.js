/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin.controller('adminEmployeeDetailsUpdate_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {
        $scope.vModel = {};
        $scope.AffiliationModels = [];
        $scope.LineOfficeModels = [];
        $scope.ProgramModels = [];
        $scope.RegionModels = [];
        $scope.PositionsModels = [];
        $scope.allUsers = [];

        Init();

        function Init() {

            var empGuid = DataContext.queryStringData('ID');

            DataContext.EmpByGuid(empGuid).then(function (data) {
                $scope.vModel = data;
            });

            DataContext.empPicker().then(function (dataEmpPicker) {
                $scope.AffiliationModels = dataEmpPicker.Affiliations;
                $scope.LineOfficeModels = dataEmpPicker.LineOffices;
                $scope.ProgramModels = dataEmpPicker.Programs;
                $scope.RegionModels = dataEmpPicker.Regions;
                $scope.PositionsModels = dataEmpPicker.Positions;
            });

            DataContext.allUsers().then(function (dataUsers) {
                $scope.allUsers = dataUsers;
            });

        };

        $scope.goBack = function () {
            DataContext.redirectTo('/admin/empList');
        };

        $scope.submitForm = function (isValid) {
            if (isValid) {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'EmpAdminUpdates',
                    data: angular.toJson($scope.vModel),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut("Updated employee details");
                });
            }
            else {
                toastr.error("Please enter all required fields ", "ERROR!!");
            }
        };

    }]);


})();

