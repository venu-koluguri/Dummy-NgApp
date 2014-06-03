/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('adminConference_Crtl', ['$scope', '$modal', 'DataContext', '$filter', '$location', function ($scope, $modal, DataContext, $filter, $location) {

            $scope.tableData = [];

            Init();

            function Init() {
                DataContext.ConferenceList().then(function (data) {
                    $scope.tableData = data;
                    toastr.info('Conference Table loaded', "");
                });
            };

            function CallWS(jsonData, toastrMsg) {
                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'NewConference',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData)
                    .then(function (data) {
                        toastr.success(toastrMsg, "Success");
                    })
                    .then(function () {
                        Init();
                    });
            };

            $scope.addNewConference = function () {
                var newItem = { 'ConferenceID': '0', 'ConferenceName': '' };
                var modalInstance = $modal.open({
                    templateUrl: 'adminConferenceAddNew.html',
                    controller: 'adminConferenceAddNew_Ctrl',
                    resolve: {
                        popupItem: function () {
                            return newItem;
                        }
                    }
                });
                modalInstance.result.then(function (newItem) {
                    CallWS(newItem, 'New Conference added');
                }, function () { });
            };

            $scope.UpdateConference = function (item) {

                var modalInstance = $modal.open({
                    templateUrl: 'adminConferenceAddNew.html',
                    controller: 'adminConferenceAddNew_Ctrl',
                    resolve: {
                        popupItem: function () {
                            return item;
                        }
                    }
                });

                modalInstance.result.then(function (newItem) {
                    CallWS(newItem, 'Conference Updated');
                }, function () { });
            };

            $scope.ReloadTable = function () {
                Init();
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.DeleteConference = function (item) {

                if (typeof item.ConferenceName !== "undefined") {
                    var modalInstance = $modal.open({ templateUrl: 'adminConferenceDeleteConfirmation.html', controller: 'adminConferenceDeleteConfirmation_Ctrl' });
                    modalInstance.result.then(function (newItem) {
                        if (newItem === 'yes') {
                            var configData = {
                                method: 'POST',
                                url: Intranet.Util.Global.serviceURL() + 'DeleteConference',
                                data: JSON.stringify(item),
                                headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                            };
                            DataContext.post(configData).then(function (data) {
                                toastr.warning('Conference Deleted', "");
                                $scope.tableData.splice($scope.tableData.indexOf(item), 1);
                            });
                        }
                    }, function () { });

                }
            };

        }])
        .controller('adminConferenceDeleteConfirmation_Ctrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            //yes
            $scope.Yes = function () {
                $modalInstance.close('yes');
            };
            $scope.nope = function () {
                $modalInstance.dismiss('cancel');
            };
        }])
        .controller('adminConferenceAddNew_Ctrl', ['$scope', '$modalInstance', 'popupItem', function ($scope, $modalInstance, popupItem) {

            $scope.item = popupItem;

            $scope.Save = function () {
                if (typeof $scope.item.ConferenceName !== "undefined" && $scope.item.ConferenceName.length > 3) {
                    $modalInstance.close($scope.item);
                }
                else {
                    toastr.error('Conference name is invalid!!', 'Error');
                }
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
})();

