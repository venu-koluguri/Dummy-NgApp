/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('govtVehicleRequest_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.timeModels = Intranet.Util.Global.timeDropDown;
            $scope.govtVehicleRequest = {};
            Init();

            function Init() {

                DataContext.currentUserInfo()
                    .then(function (dataUserInfo) {
                        $scope.currentUser = dataUserInfo;
                    })
                    .then(function () {
                        $scope.govtVehicleRequest = angular.copy($scope.currentUser);
                    });
               

            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $scope.submitted = true;
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'GovtVehicleRequest',
                        data: angular.toJson($scope.govtVehicleRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('HGovet Vehicle form request have submitted.');
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