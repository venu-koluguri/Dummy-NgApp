/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('employeeNew_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.newEmployeeRequest = {};
            $scope.newEmployeeRequest.DateOfRequest = Intranet.Util.Global.currentDate;
            $scope.newEmployeeRequest.reqTypeOfRequest = 'Initial Request';
            $scope.isValidSubmitted = false;
            $scope.formSubmitted = false;
            $scope.newEmployeeRequest.EmailList = Intranet.Util.Global.emailListJson;
            $scope.USStates = Intranet.Util.Global.USStatesJSON;
            $scope.lbl_ContractCompanyShow = false;

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
                                $scope.newEmployeeRequest.RequestorInfo = $scope.allUsers[index];
                            }
                        }
                    });

                DataContext.empPicker().then(function (dataEmpPicker) {
                    $scope.Affiliations = dataEmpPicker.Affiliations;
                    $scope.LineOffices = dataEmpPicker.LineOffices;
                    $scope.Programs = dataEmpPicker.Programs;
                    $scope.Regions = dataEmpPicker.Regions;
                });

                DataContext.officePicker().then(function (dataOfficePicker) {
                    $scope.empLocation = dataOfficePicker.OfficeBuildings;
                    $scope.SoftwareList = dataOfficePicker.SoftwareList;
                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.submitNewEmployee = function (isValid) {

                $scope.formSubmitted = true;

                if (isValid) {

                    $scope.isValidSubmitted = true;
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'AddNewEmployee',
                        data: angular.toJson($scope.newEmployeeRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }

                    };
                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('New Employee request has successfully submitted.');
                        $scope.isValidSubmitted = false;
                    });

                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

        }]);
})();