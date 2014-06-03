/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('federalExpense_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.travelExpenseFrom = {};
            $scope.travelExpenseFrom.FederalTravelRequest = {};
            $scope.travelExpenseFrom.Submitted = 'false';
            $scope.toastrMsg = '';
            $scope.allVouchers = [];
            $scope.itemDataPropeties = {};
            $scope.spFormDigest = '';
            $scope.fileMetadata = { "__metadata": { type: "SP.Data.TravelExpenseReceiptItem" } };
            $scope.invalidFileType = false;


            Init();

            function Init() {

                DataContext.GetAllVouchersOfPendingExpense().then(function (data) {
                    $scope.allVouchers = data;
                });

            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $scope.travelExpenseFrom.Submitted = 'true';
                    $scope.toastrMsg = 'Travel expense form succesffuly submitted';
                }
            };

            $scope.saveForm = function () {
                $scope.travelExpenseFrom.Submitted = 'false';
                $scope.toastrMsg = 'Travel expense form succesffuly saved';
                //CallWebService();
            };

            $scope.filesChanged = function (elm) {
                $scope.travelExpensefiles = elm.files;

                if (elm.files.length > 0 && elm.files[0].type !== 'application/pdf') {
                    $scope.invalidFileType = true;
                }

                $scope.$apply();
            };

            function CallWebService() {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelExpense',
                    data: JSON.stringify($scope.travelExpenseFrom),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };



                if ($scope.travelExpensefiles.length > 0 && !$scope.invalidFileType) {
                    var _travelerName = '', _travelerGUID = '';
                    if ($scope.travelExpenseFrom.FederalTravelRequest.FederalTravelerName) {
                        _travelerName = $scope.travelExpenseFrom.FederalTravelRequest.FederalTravelerName;
                        _travelerGUID = $scope.travelExpenseFrom.FederalTravelRequest.EmployeeGUID;
                    }
                    if ($scope.travelExpenseFrom.FederalTravelRequest.NonFederalTravelerName) {
                        _travelerName = $scope.travelExpenseFrom.FederalTravelRequest.NonFederalTravelerName;
                        _travelerGUID = $scope.travelExpenseFrom.FederalTravelRequest.NonFederalTravelerID;
                    }
                    $scope.fileMetadata = {
                        "__metadata": { type: "SP.Data.TravelExpenseReceiptItem" }
                        , 'TravelerName': _travelerName
                        , 'TravelFormGUID': $scope.travelExpenseFrom.FederalTravelRequestGUID
                        , 'EmployeeGUID': _travelerGUID
                        , 'ExpenseFormID': $scope.travelExpenseFrom.FormID
                    };
                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut($scope.toastrMsg);
                    });

                    DataContext.SPFormDigest().then(function (response) {
                        $scope.spFormDigest = response.data.d.GetContextWebInformation.FormDigestValue;

                        DataContext.GetFileBuffer($scope.travelExpensefiles[0]).then(function (arrayBuffer) {

                            DataContext.SpUploadDocument(Intranet.Util.Global.TravelExpenseReceipt, $scope.travelExpensefiles[0].name, arrayBuffer, $scope.spFormDigest).then(function (response) {

                                DataContext.SPDocGetProperties(response.data.d).then(function (response) {

                                    $scope.itemDataPropeties = response.data.d;

                                    DataContext.SPFormDigest().then(function (response) {
                                        $scope.spFormDigest = response.data.d.GetContextWebInformation.FormDigestValue;

                                        DataContext.SPDocUpdateProperties($scope.itemDataPropeties, $scope.fileMetadata, $scope.spFormDigest)
                                            .then(function (response) {

                                            });
                                    });
                                });
                            });

                        });
                    });

                }
                else {
                    console.log('cannot upload the file, please choose valid PDF file.');
                }

            }

        }]);


})();

