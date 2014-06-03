/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';
    Intranet.Util.Global.Admin
        .controller('employeeRelocation_Crtl', ['$scope', 'DataContext', '_', function ($scope, DataContext, _) {

            $scope.isValidSubmitted = false;
            $scope.formSubmitted = false;
            $scope.employeeRelocationRequest = {};
            $scope.employeeRelocationRequest.DateOfRequest = Intranet.Util.Global.currentDate;

            Init();

            function Init() {

                DataContext.currentUserInfo().then(function (dataUserInfo) {
                    $scope.currentUser = dataUserInfo;
                });

                DataContext.allUsers()
                    .then(function (dataUsers) { $scope.allUsers = dataUsers; })
                    .then(function () {

                        var index;
                        if ($scope.allUsers != null && $scope.currentUser != null) {

                            for (var i = 0; i < $scope.allUsers.length; i++) {
                                if ($scope.allUsers[i].Email == $scope.currentUser.Email) {
                                    index = i;
                                    break;
                                }
                            }

                            if (index > 0) {
                                $scope.employeeRelocationRequest.RequestorInfo = $scope.allUsers[index];
                            }
                        }
                    });

                DataContext.empPicker().then(function (dataEmpPicker) {
                    $scope.Affiliations = dataEmpPicker.Affiliations;

                });

                DataContext.officePicker().then(function (dataOfficePicker) {
                    $scope.empLocation = dataOfficePicker.OfficeBuildings;

                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.submitEmployeeRelocation = function (isValid) {

                $scope.formSubmitted = true;

                if (isValid) {

                    $scope.isValidSubmitted = true;

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'EmpRelocation',
                        data: angular.toJson($scope.employeeRelocationRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }

                    };

                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('Employee relocation request has successfully submitted.');
                        $scope.isValidSubmitted = false;
                    });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

        }]);
})();