/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('federalTravelRequest_Crtl', ['$scope', '$modal', 'DataContext', function ($scope, $modal, DataContext) {

            $scope.submitted = false;
            $scope.fedTravelForm = {};
            $scope.fedTravelForm.InterimTravel = [];
            $scope.allUsers = [];
            $scope.timeModels = Intranet.Util.Global.timeDropDown;
            $scope.FedTravelLocations = Intranet.Util.Global.FedTravelLocations;
            $scope.util = {};
            $scope.fedTravelForm.localVoucher = 'No';
            $scope.fedTravelForm.propertyPass = 'No';
            $scope.fedTravelForm.travelFamilyNFriends = 'No';
            $scope.fedTravelForm.Traveling_Again = 'No';
            $scope.fedTravelForm.Personal_Leave_Info = 'false';
            $scope.fedTravelForm.DestinationCode = '';
            $scope.fedTravelForm.CSCOfficeSpace = 'No';

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

            $scope.addInterimTravel = function (newIntermin) {

                if (newIntermin && newIntermin.point_of_departure && newIntermin.Point_of_Arrival && newIntermin.point_of_departure_date && newIntermin.point_of_Arrival_date && newIntermin.point_of_departure_time && newIntermin.point_of_Arrival_time) {
                    $scope.fedTravelForm.InterimTravel.push(newIntermin);
                    $scope.newIntermin = {};
                    toastr.info("New intermin travel added", "Info");
                }
                else {
                    toastr.error("Please enter valid locations, dates and time", "Validation Error");
                }
            };
            $scope.removeItem = function (index) {
                $scope.fedTravelForm.InterimTravel.splice(index, 1);
            }

            $scope.saveState = function () { };

            $scope.tabSteps = { "tab1": "1", "tab2": "2", "tab3": "3", "tab4": "4" };
            $scope.tabActivity = { "tab1": false, "tab2": false, "tab3": false, "tab4": false };

            $scope.formTab1 = function () {
                $scope.tabSteps.tab1 = "<i class='fa fa-check'></i>";
                $scope.tabActivity.tab1 = true;
                if (!validateWizard()) { return; }

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
                if (!validateWizard()) { return; }
                $scope.tabSteps.tab4 = "<i class='fa fa-check'></i>";
                $scope.tabActivity.tab4 = true;

                $scope.submitted = true;
                if (isValid) {

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'TravelNewFederalRequest',
                        data: angular.toJson($scope.fedTravelForm),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    DataContext.post(configData).then(function (data) {
                        if ($scope.fedTravelForm.propertyPass === 'Yes') {
                            DataContext.windowOpenNew(Intranet.Util.Global.PropertyPassURL);
                        }
                        DataContext.successTimeOut('New Federal Travel request succesffuly submitted.');
                    });

                }
                else {
                    toastr.error("Invalid data, Please verify!!", "Error");
                }

            };

            function validateWizard() {
                var boolValidateCSCEmployee = (typeof $scope.fedTravelForm.traveler_Type !== "undefined" && $scope.fedTravelForm.traveler_Type === 'CSC Employee');
                var boolValidateTrvlInfo = (typeof $scope.fedTravelForm.TravelerInfo === "undefined");

                var boolValidateNonFederal = (typeof $scope.fedTravelForm.traveler_Type !== "undefined" && $scope.fedTravelForm.traveler_Type === 'Person Not Employed By CSC');
                var boolNonFederalInfo = (typeof $scope.fedTravelForm.NewTraveler === "undefined");

                var boolDestination = (typeof $scope.fedTravelForm.Travel_Purpose_of_Travel === "undefined" || $scope.fedTravelForm.Travel_Purpose_of_Travel === null);

                if (boolValidateCSCEmployee && boolValidateTrvlInfo) {
                    toastr.error('Please select Traveler Name!', 'Form Validation');
                    return false;
                }
                if (boolValidateNonFederal && boolNonFederalInfo) {
                    toastr.error('Please enter non federal traveler details!', 'Form Validation');
                    return false;
                }
                if (boolDestination) {
                    toastr.error('Please enter purpose of travel!', 'Form Validation');
                    return false;
                }
            }

            $scope.modalOpen = function (templateURL) {
                var modalInstance = $modal.open({ templateUrl: templateURL, controller: 'popupModalInstanceCtrl' });
            };

            $scope.updateDestination = function () {
                $scope.fedTravelForm.Destination = $scope.util.DestinationList.value;
                $scope.fedTravelForm.DestinationCode = $scope.util.DestinationList.name;
            };

            $scope.$watch('fedTravelForm.Travelers_Program_Execution_Plan', function (newVal) {
                var arrayToReturn = [];
                var travelCodeItems = $scope.TravelCodes;
                if (newVal) {

                    for (var i = 0; i < travelCodeItems.length; i++) {
                        if (travelCodeItems[i].Program == newVal.Program) {
                            arrayToReturn.push(travelCodeItems[i]);
                        }
                    }
                }

                $scope.Line_Of_Accounting_values = arrayToReturn;
            });

        }]);
})();

