/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('employeeInformationUpdate_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {

            Init();

            function Init() {

                DataContext.currentUserInfo().then(function (dataUserInfo) {
                    $scope.currentUser = dataUserInfo;
                });

                DataContext.empPicker()
                    .then(function (dataEmpPicker) { $scope.EmergencyContactRelationship = dataEmpPicker.EmergencyContactRelationship; })
                    .then(function () {
                        var index;
                        if ($scope.currentUser != null && $scope.EmergencyContactRelationship != null) {
                            for (var i = 0; i < $scope.EmergencyContactRelationship.length; i++) {
                                if ($scope.EmergencyContactRelationship[i].RelationshipId === $scope.currentUser.EmergencyContactRelationshipId) {
                                    index = i;
                                }
                            }
                            if (index > 0) {
                                $scope.currentUser.EmergencyContactRelationshipId = $scope.EmergencyContactRelationship[index].RelationshipId;
                            }
                        }
                    });
            };

            $scope.States = Intranet.Util.Global.USStatesJSON;

            $scope.parseMSJSONDate = function (strDate) {
                if (strDate != null) {
                    var newDate = new Date(parseInt(strDate.slice(6, -2)))
                    //var newDate = new Date(parseInt(strDate.replace(/\/Date\((.*?)\)\//gi, "$1")));
                    return newDate.getMonth() + "/" + newDate.getDate() + "/" + newDate.getFullYear();
                }
            };

            $scope.submitEmergenyContact = function (isValid) {
                if (isValid) {
                    callService('Emergency Contact Info updated successfully');
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.submitHomeContact = function (isValid) {
                if (isValid) {
                    callService('Home Contact Info updated successfully');
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            function callService(toast_message) {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'EmployeeUpdateInfo',
                    data: angular.toJson($scope.currentUser),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut(toast_message);
                });
            }
        }]);
})();