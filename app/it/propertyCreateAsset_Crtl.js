(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('propertyCreateAsset_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.createAssetRequest = {};
           
            Init();

            function Init() {
                DataContext.allUsers()
                    .then(function (dataUsers) { $scope.allUsers = dataUsers; })
                // add service request for cust area here
                $scope.custArea = [];
                //add service request for location
                $scope.Locations = [];

            };

            $scope.submitForm = function (isValid) {
                 $scope.submitted = true;
                if (isValid) {                   
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'PropertyCreateAsset',
                        data: angular.toJson($scope.createAssetRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('Asset Create form request have submitted.');
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

