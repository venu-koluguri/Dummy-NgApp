(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('propertyPassRequest_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.propertyPassRequest = {};
            $scope.equipmentFields = [
                "Keypad Polling System",
                "Mapping Grade GPS Receiver",
                "Survey Grade GPS Receiver",
                "Ruggedized PC",
                "Handheld Video Camera",
                "Underwater Video System",
                "Digital Camera",
                "Binoculars",
                "Acoustic Sensor"
            ];
            Init();

            function Init() {

                DataContext.currentUserInfo()
                    .then(function (dataUserInfo) {
                        $scope.currentUser = dataUserInfo;
                    })
                    .then(function () {
                        $scope.propertyPassRequest = angular.copy($scope.currentUser);
                        $scope.propertyPassRequest.properties = {}
                        $scope.propertyPassRequest.properties.equipments = [];
                    });
               

            };

            $scope.submitForm = function (isValid) {
                console.log($scope.propertyPassRequest)
                if (isValid) {
                    $scope.submitted = true;
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'PropertyPassRequest',
                        data: angular.toJson($scope.propertyPassRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('Property pass form request have submitted.');
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

