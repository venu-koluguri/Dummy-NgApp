/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('adminProjects_Crtl', ['$scope', '$modal', 'DataContext', '$filter', function ($scope, $modal, DataContext, $filter) {
            $scope.tableData = [];
            $scope.UserList = [];
            $scope.filterData = { 'ProjectName': '', 'ProjectNumber': '', 'ProjectCoordinatorName': '' };

            Init();

            function Init() {

                DataContext.ProjectList().then(function (data) {
                    $scope.tableData = data;
                    console.log($scope.tableData);
                    toastr.info('Project Table loaded', "");
                });

                DataContext.allUsersMinified().then(function (data) {
                    $scope.UserList = data.Users;
                });
            };

            function CallWS(jsonData, toastrMsg) {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'NewProject',
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
                var newItem = { 'ProjectNumber': '', 'ProjectName': '', 'ProjectCoordinatorGUID': '', 'ProjectCoordinatorName': '' };

                var modalInstance = $modal.open({
                    templateUrl: 'adminProjectsAddNew.html',
                    controller: 'adminProjectsAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return newItem; },
                        UserList: function () { return $scope.UserList; }
                    }
                });

                modalInstance.result.then(function (itemFromPopUp) { CallWS(itemFromPopUp, 'New Project added'); }, function () { });

            };

            $scope.ReloadTable = function () {
                Init();
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.Update = function (itemData) {

                var modalInstance = $modal.open({
                    templateUrl: 'adminProjectsAddNew.html',
                    controller: 'adminProjectsAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return itemData; },
                        UserList: function () { return $scope.UserList; }
                    }
                });

                modalInstance.result.then(function (itemFromPopUp) {
                    CallWS(itemFromPopUp, 'Project details updated');
                }, function () { });

            };

            $scope.Delete = function (deleteItemData) {
                if (typeof deleteItemData !== "undefined") {
                    var modalInstance = $modal.open({ templateUrl: 'adminProjectDeleteConfirmation.html', controller: 'adminProjectDeleteConfirmation_Ctrl' });
                    modalInstance.result.then(function (newItem) {

                        if (newItem === 'yes') {
                            var configData = {
                                method: 'POST',
                                url: Intranet.Util.Global.serviceURL() + 'DeleteProject',
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

            $scope.clearFilters = function () { $scope.filterData = { 'ProjectName': '', 'ProjectNumber': '', 'ProjectCoordinatorName': '' }; };

        }])
        .controller('adminProjectsAddNew_Crtl', ['$scope', '$modalInstance', 'popupItem', 'UserList', function ($scope, $modalInstance, popupItem, UserList) {
            $scope.item = popupItem;
            $scope.popUpUserList = UserList;
            $scope.form = {};
            Init();

            function Init() {
                if ((typeof $scope.item.ProjectCoordinatorGUID !== "undefined" && $scope.item.ProjectCoordinatorGUID.length > 3)
                    || (typeof $scope.item.ProjectCoordinatorName !== "undefined" && $scope.item.ProjectCoordinatorName.length > 3)) {
                    var listIndex = function () {
                        for (var i = 0; i < $scope.popUpUserList.length; i++) {
                            if ($scope.popUpUserList[i].EmployeeGUID === $scope.item.ProjectCoordinatorGUID) {
                                return i;
                            }
                        }
                    };
                    $scope.form.selectedUser = $scope.popUpUserList[listIndex()];
                }
            }

            $scope.Save = function (isValid) {
                if (isValid && typeof $scope.item.ProjectName !== "undefined" && $scope.item.ProjectName.length > 3) {
                    $scope.item.ProjectCoordinatorGUID = $scope.form.selectedUser.EmployeeGUID;
                    $scope.item.ProjectCoordinatorName = $scope.form.selectedUser.EmployeeName;
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
        .controller('adminProjectDeleteConfirmation_Ctrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            $scope.Yes = function () {
                $modalInstance.close('yes');
            };
            $scope.nope = function () {
                $modalInstance.dismiss('cancel');
            };

        }]);
})();

