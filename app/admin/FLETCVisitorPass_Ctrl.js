/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('FLETCVisitorPass_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.submitted = false;

            Init();

            function Init() {
                DataContext.allUsers().then(function (dataUsers) {
                    $scope.allUsers = dataUsers;

                });
            };

            $scope.submitVisitorPassReq = function (isValid) {
                $scope.submitted = true;

                if (isValid) {

                    if (typeof $scope.visitorForm.TermsOfAgreement !== "undefined" && $scope.visitorForm.TermsOfAgreement === "Decline") {
                        toastr.error("Please accept Terms of Agreement", "Error");
                        $scope.submitted = false;
                        return;
                    }

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'AddVisitorRequest',
                        data: JSON.stringify($scope.visitorForm),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };

                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('New Visitor Pass Form is successfully submitted.');
                    });

                }
                else {
                    toastr.error("Invalid data, Please verify!!", "Error");
                }

            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };
        }]);

})();

