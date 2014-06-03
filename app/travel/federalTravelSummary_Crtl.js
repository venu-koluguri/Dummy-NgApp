/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('federalTravelSummary_Crtl', ['$scope', '$modal', '_', 'DataContext', function ($scope, $modal, _, DataContext) {
            $scope.initialData = [];
            $scope.completeData = [];
            $scope.countPending = 0;
            $scope.countPMApproval = 0;
            $scope.countTANotComplete = 0;
            $scope.countTACompleted = 0;
            $scope.countTADenied = 0;
            $scope.VoucherInProcess = 0;

            Init();
            function Init() {
                DataContext.allFedRequest().then(function (data) {
                    populate(data);
                });
            }

            $scope.btnProcessTA = function (_item) {

                var modalInstance = $modal.open({
                    templateUrl: 'detailsTA.html',
                    controller: 'fedTAModalInstance_Ctrl',
                    resolve: {
                        item: function () {
                            return _item;
                        }
                    }
                });
            };

            function populate(data) {
                _.each(data, function (item) {
                    if (item != null && item.ElementData.Status == 'Pending') {
                        $scope.countPending += 1;
                    }
                    if (item != null && item.ElementData.Status == 'Manager Approved') {
                        $scope.countPMApproval += 1;
                    }

                    if (item != null && item.ElementData.Status == 'Cancelled/Denied') {
                        $scope.countTADenied += 1;
                    }
                    if (item != null && item.ElementData.Status == 'TA In Process') {
                        $scope.VoucherInProcess += 1;
                    }
                    $scope.initialData.push(item);
                });
            }

        }]);


})();

