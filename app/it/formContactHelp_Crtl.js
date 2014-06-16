/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('formContactHelp_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.contactHelpRequest = {};
            Init();

            function Init() {

                DataContext.currentUserInfo()
                    .then(function (dataUserInfo) {
                        $scope.currentUser = dataUserInfo;
                    })
                    .then(function () {
                        $scope.contactHelpRequest = angular.copy($scope.currentUser);
                    });
               

            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $scope.submitted = true;
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'ItContactHelpRequest',
                        data: angular.toJson($scope.contactHelpRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('Contact help form request have submitted.');
                        });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/it/');
            };
        }]);
})();