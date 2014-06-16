(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('propertyListAsset_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.editAssetRequest = {};
            $scope.showForm = false;
            Init();

            function Init() {
                DataContext.allUsers()
                    .then(function (dataUsers) { $scope.allUsers = dataUsers; })

                //add service request for list assets 
                $scope.allAssets = [
                    {'Barcode':123,'Manufacture':"intra",'ModelNumber':4546546,'SerialNumber':12345,'Status':"active"},
                    {'Barcode':0989,'Manufacture':"intra",'ModelNumber':6547657,'SerialNumber':12346,'Status':"active"},
                ];
                // add service request for cust area here
                $scope.custArea = [];
                //add service request for location
                $scope.Locations = [];

            };

            $scope.editAsset = function(asset){
                $scope.editAssetRequest = asset;
                $scope.showForm = true;
            }

            $scope.hideForm= function(){
                $scope.editAssetRequest = {};
                $scope.showForm = false;
            }
            $scope.submitForm = function (isValid) {
                 $scope.submitted = true;
                if (isValid) {                   
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'PropertyEditAsset',
                        data: angular.toJson($scope.editAssetRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('Asset edit form request have submitted.');
                            $scope.hideForm();                            
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

