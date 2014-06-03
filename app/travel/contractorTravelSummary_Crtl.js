/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('contractorTravelSummary_Crtl', ['$scope', '_', 'DataContext', function ($scope, _, DataContext) {

            $scope.initialData = [];
            $scope.completeData = [];

            init();

            function init() {
                DataContext.allContractorRequest().then(function (data) {
                    populate(data);
                });
            }

            function populate(data) {
                _.each(data, function (item) {
                    if (item != null && _.isEqual(item.ElementData.Status, 'Ticketed')) {
                        $scope.completeData.push(item);
                    }
                    else {
                        $scope.initialData.push(item);
                    }
                });
                $scope.$emit("UPDATE_Count", "Updated");
            }

            $scope.$on("UPDATE_Count", function (event, message) {
                $scope.countPending = 0;
                $scope.countCPMApproval = 0;
                $scope.countDenied = 0;
                $scope.countTicketed = 0;

                if (_.size($scope.initialData) > 0) {
                    _.each($scope.initialData, function (itemIterator) {
                        if (itemIterator.ElementData.Status == 'Pending') {
                            $scope.countPending += 1;
                        }
                        if (itemIterator.ElementData.Status == 'Manager Approved') {
                            $scope.countCPMApproval += 1;
                        }
                        if (itemIterator.ElementData.Status == 'Cancelled/Denied') {
                            $scope.countDenied += 1;
                        }
                    });
                }
                $scope.countTicketed = _.size($scope.completeData);
            });

            $scope.btnTicket = function (item) {
                $scope.initialData.splice($scope.initialData.indexOf(item), 1);
                item.ElementData.Status = 'Ticketed';
                item.ElementData.BtnNGModel = '';
                item.FormData.Ticketed = true;
                $scope.completeData.push(item);

                $scope.$emit("UPDATE_Count", "Updated");

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelConRequestTicketed',
                    data: JSON.stringify(item.FormData.ContractorTravelRequestID),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    toastr.success('Ticketed Completed', "Success");
                });
            }

        }]);
})();

