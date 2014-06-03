/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin.controller('TBGAwards_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
        $scope.TBGAwardsNomination = {};

        Init();

        function Init() {
            DataContext.currentUserInfo()
                .then(function (dataUserInfo) {
                    $scope.currentUser = dataUserInfo;
                })
                .then(function () {
                    $scope.TBGAwardsNomination.currentUser = angular.copy($scope.currentUser);
                });;

            DataContext.allUsers().then(function (dataUsers) {
                $scope.allUsers = dataUsers;
            });
        };

        $scope.submitted = false;

        $scope.submitFrom = function (isValid) {
            $scope.submitted = true;

            if (isValid) {
                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TBGAwards',
                    data: angular.toJson($scope.TBGAwardsNomination),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData)
                    .then(function (data) {
                        DataContext.successTimeOut('TBG award nomination form succesffuly submitted.');
                    });

            }
            else {
                toastr.error("Invalid data, Please verify!!", "Error");
            }
        }

        $scope.goBack = function () {
            DataContext.redirectTo('/admin/');
        };

    }]);


})();

