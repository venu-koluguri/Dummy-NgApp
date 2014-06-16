/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('houseKeepingRequest_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.houseKeepingRequest = {};
            $scope.empLocation = {};
            Init();

            function Init() {

                DataContext.currentUserInfo()
                    .then(function (dataUserInfo) {
                        $scope.currentUser = dataUserInfo;
                    })
                    .then(function () {
                        $scope.houseKeepingRequest = angular.copy($scope.currentUser);
                    });
                DataContext.officePicker().then(function (dataOfficePicker) {
                    $scope.empLocation = dataOfficePicker.OfficeBuildings;

                });

            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'HouseKeepingRequest',
                        data: angular.toJson($scope.houseKeepingRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('Housekeeping Problem/Assistance form request have submitted.');
                        });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/facilities/');
            };
        }]);
})();