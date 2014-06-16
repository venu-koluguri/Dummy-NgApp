/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('formStoryIdea_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.storyIdeaRequest = {};

            Init();

            function Init() {

               

            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'CommunicationStorySubmit',
                        data: angular.toJson($scope.storyIdeaRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('communication story idea request have submitted.');
                        });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/communications/');
            };
        }]);
})();