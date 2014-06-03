/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('employeeSuggestionBox_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.submitted = false;

            $scope.submitForm = function (isValid) {

                $scope.submitted = true;

                if (isValid) {
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'AddAnonymousFeedback',
                        data: JSON.stringify($scope.feedback_comments)
                    };
                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('Anonymous Feedback is successfully submitted.');
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