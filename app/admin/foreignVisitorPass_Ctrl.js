/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller("foreignVisitorPass_Ctrl", ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.submitted = false;

            Init();

            function Init() {
                DataContext.allUsers().then(function (dataUsers) {
                    $scope.allUsers = dataUsers;
                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.submitForeignVisitorPass = function (isValid) {

                $scope.submitted = true;

                if (isValid) {

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'AddForeignVisitorRequest',
                        data: JSON.stringify($scope.foreignVisitorPassFrom),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };

                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('Foreign Visitor Pass request form is successfully submitted.');
                    });

                }
                else {
                    toastr.error("Invalid data, Please verify!!", "Error");
                }

            };

        }]);


})();

