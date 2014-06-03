/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('contractorApproval_Crtl', ['$scope', '_', 'DataContext', function ($scope, _, DataContext) {
            var _toastrMsg = '';
            $scope.item = {};
            $scope.item.FormData = {};
            $scope.item.FormData.ContractManagerAcceptWho = "";
            $scope.item.FormData.ContractManagerAcceptDate = "";
            $scope.submitted = false;
            $scope.ApprovalComments = '';
            $scope.showForm = true;
            var _ID = DataContext.queryStringData('ID');
            init();

            $scope.funcReject = function (isValid) {

                if (isValid) {
                    $scope.submitted = true;
                    //Program Manager Denied
                    $scope.item.FormData.TravelStatus = 'Cancelled/Denied Request';
                    $scope.item.FormData.TravelStatusID = 3;
                    _toastrMsg = 'Travel Request Denied.';
                    httpCall();
                }
            }
            $scope.funcApprove = function (isValid) {

                if (isValid) {
                    $scope.submitted = true;
                    //Program Manager Approved
                    $scope.item.FormData.TravelStatus = 'Contract Manager Approved';
                    $scope.item.FormData.TravelStatusID = 2;
                    _toastrMsg = 'Travel Request approved.';
                    httpCall();
                }
            }

            function httpCall() {
                var jsonData = {
                    "FormID": $scope.item.FormData.ContractorTravelRequestID,
                    "Comments": $scope.ApprovalComments,
                    "Status": $scope.item.FormData.TravelStatus,
                    "StatusID": $scope.item.FormData.TravelStatusID
                };

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelConRequestApproval',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut(_toastrMsg);
                });

            }

            function init() {


                DataContext.ContractorRequest(_ID).then(function (data) {

                    $scope.item = data;
                    if ($scope.item !== null && $scope.item.ElementData.Status.length > 0 && $scope.item.ElementData.Status.toLowerCase() != 'pending') {
                        $scope.showForm = false;
                    }
                    else if ($scope.item == null) {
                        DataContext.timeOut();
                    }
                });
            }
        }]);


})();

