/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('employeeSuggestionResults_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.tableData = {};

            Init();

            function Init() {
                DataContext.allAnonymousFeedback.then(function (data) {
                    $scope.tableData = data.d.results;
                });
            };

        }]);

})();

