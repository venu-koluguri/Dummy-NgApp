/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';
    Intranet.Util.Global.Admin
        .controller('employeeSeparation_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {


            $scope.isValidSubmitted = false;
            $scope.employeeSeperation = {};
            $scope.formSubmitted = false;
            $scope.employeeSeperation.dateOfRequest = Intranet.Util.Global.currentDate;

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
                                $scope.employeeSeperation.RequestorInfo = $scope.allUsers[index];
                            }
                        }
                    });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.submitEmployeeSeperation = function (isValid) {

                $scope.formSubmitted = true;

                if (isValid) {

                    $scope.isValidSubmitted = true;

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'EmpSeperation',
                        data: angular.toJson($scope.employeeSeperation),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };

                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('Employee seperation request has successfully submitted.');
                        $scope.isValidSubmitted = false;
                    });

                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

        }]);
})();