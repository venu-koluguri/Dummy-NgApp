/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('contractorTravelRequest_Crtl', ['$scope', '$modal', 'DataContext', function ($scope, $modal, DataContext) {

            $scope.submitted = false;
            $scope.timeModels = Intranet.Util.Global.timeDropDown;
            $scope.TravelLocations = Intranet.Util.Global.FedTravelLocations;

            $scope.conTravelForm = {};


            $scope.testVariable = "app is working";
            $scope.allUsers = [];
            $scope.conTravelForm.propertyPass = 'No';
            $scope.conTravelForm.ExtendedTravel = 'No';
            $scope.conTravelForm.CSCOfficeSpace = 'No';
            $scope.conTravelForm.travelFamilyNFriends = 'No';
            $scope.conTravelForm.DestinationCode = '';

            Init();
            function Init() {
                DataContext.allUsers().then(function (dataUsers) {
                    $scope.allUsers = dataUsers;
                });

                DataContext.currentUserInfo().then(function (dataUserInfo) {
                    $scope.currentUserInfo = dataUserInfo;
                });

                DataContext.empPicker().then(function (dataEmpPicker) {
                    $scope.Affiliations = dataEmpPicker.Affiliations;
                    $scope.Branchs = dataEmpPicker.Branchs;
                    $scope.EmergencyContactRelationship = dataEmpPicker.EmergencyContactRelationship;
                    $scope.LineOffices = dataEmpPicker.LineOffices;
                    $scope.Positions = dataEmpPicker.Positions;
                    $scope.Programs = dataEmpPicker.Programs;
                    $scope.Regions = dataEmpPicker.Regions;
                    $scope.Projects = dataEmpPicker.Projects;
                });

                DataContext.officePicker().then(function (dataOfficePicker) {
                    $scope.Location = dataOfficePicker.Location;
                    $scope.OfficeSpaceEquipment = dataOfficePicker.OfficeSpaceEquipment;
                    $scope.SoftwareList = dataOfficePicker.SoftwareList;

                });

                DataContext.travelPicker().then(function (dataTravelPicker) {
                    $scope.Conferences = dataTravelPicker.Conferences;
                    $scope.TravelCodes = dataTravelPicker.TravelCodes;
                    $scope.TravelLocation = dataTravelPicker.TravelLocation;
                    $scope.TravelMethod = dataTravelPicker.TravelMethod;
                    $scope.TravelPurpose = dataTravelPicker.TravelPurpose;
                    $scope.TravelSeatPreference = dataTravelPicker.TravelSeatPreference;
                    $scope.TravelStatus = dataTravelPicker.TravelStatus;
                    $scope.TravelType = dataTravelPicker.TravelType;
                    //  $scope.NonFederalTravelers = dataTravelPicker.NonFederalTravelers;
                });
            };

            $scope.tabSteps = { "tab1": "1", "tab2": "2", "tab3": "3", "tab4": "4" };
            $scope.tabActivity = { "tab1": false, "tab2": false, "tab3": false, "tab4": false };

            $scope.formTab1 = function () {
                $scope.tabSteps.tab1 = "<i class='fa fa-check'></i>";
                $scope.tabActivity.tab1 = true;

            };
            $scope.formTab2 = function () {
                $scope.tabSteps.tab2 = "<i class='fa fa-check'></i>";
                $scope.tabActivity.tab2 = true;
            };
            $scope.formTab3 = function () {
                $scope.tabSteps.tab3 = "<i class='fa fa-check'></i>";
                $scope.tabActivity.tab3 = true;
            };
            $scope.completeWizard = function (isValid) {

                $scope.tabSteps.tab4 = "<i class='fa fa-check'></i>";
                $scope.tabActivity.tab4 = true;

                $scope.submitted = true;
                if (isValid) {
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'TravelNewConRequest',
                        data: angular.toJson($scope.conTravelForm),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('New Contractor Travel request succesffuly submitted.');
                    });

                }
                else {
                    toastr.error("Invalid data, Please verify!!", "Error");
                }

            };

            $scope.updateDestination = function () {
                $scope.conTravelForm.Destination = $scope.util.DestinationList.value;
                $scope.conTravelForm.DestinationCode = $scope.util.DestinationList.name;
            };

            $scope.modalOpen = function (templateURL) {
                var modalInstance = $modal.open({
                    templateUrl: templateURL,
                    controller: 'popupModalInstanceCtrl'
                });
            };

        }]);


})();

