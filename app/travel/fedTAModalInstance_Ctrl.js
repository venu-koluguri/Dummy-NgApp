/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('fedTAModalInstance_Ctrl', ['$scope', '$modalInstance', 'item', function ($scope, $modalInstance, item) {

            $scope.selectedItem = item;
            $scope.additionalInfo = {};
            $scope.toastrMsg = '';

            if (!$scope.selectedItem.FormData.AuthorizationInProcessDate) {
                $scope.selectedItem.FormData.AuthorizationInProcessDate = Intranet.Util.Global.currentDate;
            }

            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.completeTA = function () {
                $scope.EventType = 'complete';
                $scope.toastrMsg = 'Travel Authorization completed';
                CallWS();
                $modalInstance.dismiss('cancel');
            };

            $scope.cancelTA = function () {
                $scope.EventType = 'cancel';
                $scope.toastrMsg = 'Travel Authorization canceled';
                CallWS();
                $modalInstance.dismiss('cancel');
            };

            $scope.saveTA = function () {
                $scope.EventType = 'save';
                $scope.toastrMsg = 'Travel Authorization saved';
                CallWS();
                $modalInstance.dismiss('cancel');

            };

            function CallWS() {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelFederalUpdate',
                    data: JSON.stringify($scope.selectedItem),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData).then(function (data) {
                    toastr.success($scope.toastrMsg, "Success");
                });

            }

           

        }]);


})();

