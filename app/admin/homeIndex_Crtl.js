/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('homeIndex_Crtl', ['$scope', function ($scope) {
            $scope.imgUrls = { 'Travel': 'travel.png', 'Facilities': 'facilities.png', 'Admin': 'admin.png', 'Communications': 'communications.png', 'IT': 'it.png', 'Grants': 'grants.png', 'Acquisition': 'acquisition.png' };
        }]);
})();