/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('formDemoNotofication_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.timeModels = Intranet.Util.Global.timeDropDown;
            $scope.demoNotifyRequest = {};
            Init();

            function Init() {

                DataContext.allUsers()
                    .then(function (dataUsers) { $scope.allUsers = dataUsers; })

                //add service request for location
                $scope.Locations = [];
                    
            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $scope.submitted = true;
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'DemoNotificationRequest',
                        data: angular.toJson($scope.demoNotifyRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('Demo Notification form request have submitted.');
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