/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('adminTravelCodes_Crtl', ['$scope', '$modal', 'DataContext', '$filter', function ($scope, $modal, DataContext, $filter) {
            $scope.filterData = { 'ProgramCode': '', 'Program': '', 'ProjectName': '', 'AccProgramCode': '', 'AccTaskCode': '', 'FY': '', 'MISNumber': '' };
            $scope.tableData = [];

            Init();

            function Init() {
                DataContext.TravelCodeList().then(function (data) {
                    $scope.tableData = data;
                    toastr.info('TravelCodes Table loaded', "");
                });
            };

            function CallWS(jsonData, toastrMsg) {
                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'NewTravelCode',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    toastr.success(toastrMsg, "Success");
                }).then(function () {
                    Init();
                });
            }

            $scope.addNew = function () {
                var newItem = { 'ProgramCode': '', 'Program': '', 'ProjectName': '', 'AccProgramCode': '', 'AccTaskCode': '', 'FY': '', 'MISNumber': '' };
                var modalInstance = $modal.open({
                    templateUrl: 'adminTravelCodesAddNew.html',
                    controller: 'adminTravelCodesAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return newItem; }
                    }
                });
                modalInstance.result.then(function (itemFromPopUp) {
                    console.log(itemFromPopUp);
                    CallWS(itemFromPopUp, 'New TravelCode added');
                }, function () { });
            };

            $scope.ReloadTable = function () {
                Init();
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.Update = function (itemData) {

                var modalInstance = $modal.open({
                    templateUrl: 'adminTravelCodesAddNew.html',
                    controller: 'adminTravelCodesAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return itemData; }
                    }
                });

                modalInstance.result.then(function (itemFromPopUp) {
                    CallWS(itemFromPopUp, 'TravelCode updated');
                }, function () { });

            };

            $scope.Delete = function (deleteItemData) {
                if (typeof deleteItemData !== "undefined") {
                    var modalInstance = $modal.open({ templateUrl: 'adminTravelCodesDeleteConfirmation.html', controller: 'adminTravelCodesDeleteConfirmation_Crtl' });
                    modalInstance.result.then(function (deletePopUpItem) {

                        if (deletePopUpItem === 'yes') {
                            var configData = {
                                method: 'POST',
                                url: Intranet.Util.Global.serviceURL() + 'DeleteTravelCode',
                                data: JSON.stringify(deleteItemData),
                                headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                            };
                            DataContext.post(configData).then(function (data) {
                                $scope.tableData.splice($scope.tableData.indexOf(deleteItemData), 1);
                                toastr.warning('Conference Deleted', "");
                            });
                        }
                    }, function () { });

                }
            };

            $scope.clearFilters = function () { $scope.filterData = { 'ProgramCode': '', 'Program': '', 'ProjectName': '', 'AccProgramCode': '', 'AccTaskCode': '', 'FY': '', 'MISNumber': '' }; };
        }])
        .controller('adminTravelCodesAddNew_Crtl', ['$scope', '$modalInstance', 'popupItem', function ($scope, $modalInstance, popupItem) {
            $scope.item = popupItem;

            $scope.Save = function (isValid) {
                if (isValid && typeof $scope.item.ProjectName !== "undefined" && $scope.item.ProjectName.length > 3) {
                    $modalInstance.close($scope.item);
                }
                else {
                    toastr.error('Please enter all details!!', 'Error');
                }
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }])
        .controller('adminTravelCodesDeleteConfirmation_Crtl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            $scope.Yes = function () {
                $modalInstance.close('yes');
            };
            $scope.nope = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
})();

