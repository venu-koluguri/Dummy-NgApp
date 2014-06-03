/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('federalProgManagerApproval_Crtl', ['$scope', '_', 'DataContext', function ($scope, _, DataContext) {

            var _toastrMsg = '';
            $scope.FedTravelFrom = {};
            $scope.submitted = false;
            $scope.travelersName = '';
            $scope.travelersEmail = '';
            $scope.Program = '';
            $scope.showForm = true;
            var _ID = DataContext.queryStringData('ID');
            $scope.Status = '';
            $scope.StatusID = '';

            init();

            $scope.funcReject = function (isValid) {
                $scope.submitted = true;
                if (isValid) {
                    //Program Manager Denied
                    _toastrMsg = 'Travel request Denied';
                    $scope.Status = 'Program Manager Denied';
                    $scope.StatusID = '3';
                    httpCall();
                }
            }
            $scope.funcApprove = function (isValid) {
                $scope.submitted = true;
                if (isValid) {
                    //Program Manager Approved
                    _toastrMsg = 'Travel request Approved';
                    $scope.Status = 'Program Manager Approved';
                    $scope.StatusID = '7';
                    httpCall();
                }
            }

            function httpCall() {
                var jsonData = { "FormID": $scope.FedTravelFrom.FormData.FederalTravelRequestID, "Comments": $scope.TravelRemarks, "Status": $scope.Status, "StatusID": $scope.StatusID };
                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelFederalRequestApproval',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut(_toastrMsg);
                });
            }

            function init() {
                DataContext.FederalRequestByID(_ID).then(function (data) {
                    populate(data);
                });
            }

            function populate(data) {
                console.log(data);
                $scope.FedTravelFrom = data;
                if (data !== null && $scope.FedTravelFrom.FormData.TravelStatusID == '1') {
                    $scope.showForm = true;
                }
                else {
                    $scope.showForm = false;
                }
            }

        }]);


})();

