/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('employeeLocator_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.allUsers = [];

            $scope.regionFilters = [];
            $scope.linfOfOfficeFilters = [];
            $scope.programFilters = [];
            $scope.regionTags = [];
            $scope.linfOfOfficeTags = [];
            $scope.programTags = [];

            $scope.orderby = 'FirstName';
            $scope.reverse = false;

            $scope.ViewEnum = {
                Card: 0,
                List: 1
            }

            $scope.changeView = function (view) {
                switch (view) {
                    case $scope.ViewEnum.Card:
                        $scope.listViewEnabled = false;
                        break;
                    case $scope.ViewEnum.List:
                        $scope.listViewEnabled = true;
                        break;
                }
            }

            Init();

            function Init() {

                DataContext.allUsers().then(function (dataUsers) {
                    $scope.allUsers = dataUsers;
                });

                DataContext.EmpFilters().then(function (data) {
                    $scope.regionFilters = data.Regions;
                    $scope.linfOfOfficeFilters = data.LineOffices;
                    $scope.programFilters = data.Programs;
                });

            };
            function sortTags() {
                if ($scope.linfOfOfficeTags.length !== 0) {
                    $scope.linfOfOfficeTags.sort();
                }
                if ($scope.linfOfOfficeFilters.length !== 0) {
                    $scope.linfOfOfficeFilters.sort();
                }
                if ($scope.regionTags.length !== 0) {
                    $scope.regionTags.sort();
                }
                if ($scope.regionFilters.length !== 0) {
                    $scope.regionFilters.sort();
                }
                if ($scope.programFilters.length !== 0) {
                    $scope.programFilters.sort();
                }
                if ($scope.programTags.length !== 0) {
                    $scope.programTags.sort();
                }
            }

            $scope.lineOfOfficeEvent = function (item) {
                $scope.linfOfOfficeTags.push(item);
                $scope.linfOfOfficeFilters.splice($scope.linfOfOfficeFilters.indexOf(item), 1);
                sortTags();
            };
            $scope.regionEvent = function (item) {
                $scope.regionTags.push(item);
                $scope.regionFilters.splice($scope.regionFilters.indexOf(item), 1);
                sortTags();
            };
            $scope.ProgramEvent = function (item) {
                $scope.programTags.push(item);
                $scope.programFilters.splice($scope.programFilters.indexOf(item), 1);
                sortTags();
            };

            $scope.lineOfOfficeRemoveEvent = function (item) {
                $scope.linfOfOfficeFilters.push(item);
                $scope.linfOfOfficeTags.splice($scope.linfOfOfficeTags.indexOf(item), 1);
                sortTags();
            };
            $scope.regionRemoveEvent = function (item) {
                $scope.regionFilters.push(item);
                $scope.regionTags.splice($scope.regionTags.indexOf(item), 1);
                sortTags();
            };
            $scope.ProgramRemoveEvent = function (item) {
                $scope.programFilters.push(item);
                $scope.programTags.splice($scope.programTags.indexOf(item), 1);
                sortTags();
            };
            $scope.lineOfOfficeFilter = function (item) {
                var match;
                if ($scope.linfOfOfficeTags.length === 0) {
                    return item
                };
                for (var i = 0; i < $scope.linfOfOfficeTags.length; i++) {
                    if ($scope.linfOfOfficeTags[i].LineOffice === item.LineOffice) {
                        match = true;
                        break;
                    }
                }
                if (match) {
                    return item;
                }
            };

            $scope.programFilter = function (item) {
                var match;
                if ($scope.programTags.length === 0) {
                    return item
                };
                for (var i = 0; i < $scope.programTags.length; i++) {
                    if ($scope.programTags[i].ProgramId === item.ProgramId) {
                        match = true;
                        break;
                    }
                }
                if (match) {
                    return item;
                }
            };

            $scope.regionFilter = function (item) {
                var match;
                if ($scope.regionTags.length === 0) {
                    return item
                };
                for (var i = 0; i < $scope.regionTags.length; i++) {
                    if ($scope.regionTags[i].RegionName === item.RegionName) {
                        match = true;
                        break;
                    }
                }
                if (match) {
                    return item;
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

        }]);
})();