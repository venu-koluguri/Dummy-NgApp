/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';
    angular.module('myApp.travelControllers', [])
         //-----------------------------------------------Federal Travel controllers starts------------------------------------------
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

        }])
        .controller('federalProgManagerApproval_Crtl', ['$scope', '_', 'DataContext', function ($scope, _, DataContext) {
            var _toastrMsg = '';
            $scope.FedTravelFrom = {};
            $scope.submitted = false;
            $scope.travelersName = '';
            $scope.travelersEmail = '';
            $scope.Program = '';
            $scope.showForm = true;
            var _ID = DataContext.queryStringData('ID');
            $scope.Status = '';
            $scope.StatusID = '';

            init();

            $scope.funcReject = function (isValid) {
                $scope.submitted = true;
                if (isValid) {
                    //Program Manager Denied
                    _toastrMsg = 'Travel request Denied';
                    $scope.Status = 'Program Manager Denied';
                    $scope.StatusID = '3';
                    httpCall();
                }
            }
            $scope.funcApprove = function (isValid) {
                $scope.submitted = true;
                if (isValid) {
                    //Program Manager Approved
                    _toastrMsg = 'Travel request Approved';
                    $scope.Status = 'Program Manager Approved';
                    $scope.StatusID = '7';
                    httpCall();
                }
            }

            function httpCall() {
                var jsonData = { "FormID": $scope.FedTravelFrom.FormData.FederalTravelRequestID, "Comments": $scope.TravelRemarks, "Status": $scope.Status, "StatusID": $scope.StatusID };
                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelFederalRequestApproval',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut(_toastrMsg);
                });
            }

            function init() {
                DataContext.FederalRequestByID(_ID).then(function (data) {
                    populate(data);
                });
            }

            function populate(data) {
                console.log(data);
                $scope.FedTravelFrom = data;
                if (data !== null && $scope.FedTravelFrom.FormData.TravelStatusID == '1') {
                    $scope.showForm = true;
                }
                else {
                    $scope.showForm = false;
                }
            }

        }])
        .controller('federalTravelSummary_Crtl', ['$scope', '$modal', '_', 'DataContext', function ($scope, $modal, _, DataContext) {
            $scope.initialData = [];
            $scope.completeData = [];
            $scope.countPending = 0;
            $scope.countPMApproval = 0;
            $scope.countTANotComplete = 0;
            $scope.countTACompleted = 0;
            $scope.countTADenied = 0;
            $scope.VoucherInProcess = 0;
            init();
            function init() {
                DataContext.allFedRequest().then(function (data) {
                    populate(data);
                });
            }
            $scope.startTA = function (_item) {
                var modalInstance = $modal.open({
                    templateUrl: 'detailsTA.html',
                    controller: 'fedTAModalInstance_Ctrl',
                    resolve: {
                        item: function () {
                            return _item;
                        }
                    }
                });
            };
            function populate(data) {
                _.each(data, function (item) {
                    if (item != null && item.ElementData.Status == 'Pending') {
                        $scope.countPending += 1;
                    }
                    if (item != null && item.ElementData.Status == 'Manager Approved') {
                        $scope.countPMApproval += 1;
                    }

                    if (item != null && item.ElementData.Status == 'Cancelled/Denied') {
                        $scope.countTADenied += 1;
                    }
                    if (item != null && item.ElementData.Status == 'Voucher In Process') {
                        $scope.VoucherInProcess += 1;
                    }
                    $scope.initialData.push(item);
                });
            }

        }])
        .controller('fedTAModalInstance_Ctrl', ['$scope', '$modalInstance', 'item', function ($scope, $modalInstance, item) {
            $scope.selectedItem = item;
            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };
        }])
        .controller('federalExpense_Crtl', ['$scope', 'DataContext', '$upload', function ($scope, DataContext, $upload) {

            $scope.travelExpenseFrom = {};
            $scope.travelExpenseFrom.FederalTravelRequest = {};
            $scope.travelExpenseFrom.Submitted = 'false';
            $scope.toastrMsg = '';
            $scope.allVouchers = [];

            //Init();

            function Init() {
                DataContext.GetAllVouchersOfPendingExpense().then(function (data) {
                    $scope.allVouchers = data;
                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $scope.travelExpenseFrom.Submitted = 'true';
                    $scope.toastrMsg = 'Travel expense form succesffuly submitted';
                }
            };

            $scope.saveForm = function () {
                $scope.travelExpenseFrom.Submitted = 'false';
                $scope.toastrMsg = 'Travel expense form succesffuly saved';
                //CallWebService();
            };

            function CallWebService() {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelExpense',
                    data: JSON.stringify($scope.travelExpenseFrom),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut($scope.toastrMsg);
                });
            }

            $scope.onFileSelect = function ($files) {
                for (var i = 0; i < $files.length; i++) {
                    var file = $files[i];
                    $scope.upload = $upload.upload({
                        url: 'server/upload/url',
                        data: { myObj: $scope.myModelObj },
                        file: file,
                    }).progress(function (evt) {
                        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                    }).success(function (data, status, headers, config) {

                        console.log(data);
                    });
                }
            };

        }])
        .controller('federalExpenseSummary_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {

        }])
        //-----------------------------------------------Federal Travel controllers Ends----------------------------------------------

        //-----------------------------------------------Contractor Travel controllers starts-----------------------------------------
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

        }])
        .controller('contractorApproval_Crtl', ['$scope', '_', 'DataContext', function ($scope, _, DataContext) {
            var _toastrMsg = '';
            $scope.item = {};
            $scope.item.FormData = {};
            $scope.item.FormData.ContractManagerAcceptWho = "";
            $scope.item.FormData.ContractManagerAcceptDate = "";
            $scope.submitted = false;
            $scope.ApprovalComments = '';
            $scope.showForm = true;
            var _ID = DataContext.queryStringData('ID');
            init();

            $scope.funcReject = function (isValid) {

                if (isValid) {
                    $scope.submitted = true;
                    //Program Manager Denied
                    $scope.item.FormData.TravelStatus = 'Cancelled/Denied Request';
                    $scope.item.FormData.TravelStatusID = 3;
                    _toastrMsg = 'Travel Request Denied.';
                    httpCall();
                }
            }
            $scope.funcApprove = function (isValid) {

                if (isValid) {
                    $scope.submitted = true;
                    //Program Manager Approved
                    $scope.item.FormData.TravelStatus = 'Contract Manager Approved';
                    $scope.item.FormData.TravelStatusID = 2;
                    _toastrMsg = 'Travel Request approved.';
                    httpCall();
                }
            }

            function httpCall() {
                var jsonData = {
                    "FormID": $scope.item.FormData.ContractorTravelRequestID,
                    "Comments": $scope.ApprovalComments,
                    "Status": $scope.item.FormData.TravelStatus,
                    "StatusID": $scope.item.FormData.TravelStatusID
                };

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelConRequestApproval',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut(_toastrMsg);
                });

            }

            function init() {


                DataContext.ContractorRequest(_ID).then(function (data) {

                    $scope.item = data;
                    if ($scope.item !== null && $scope.item.ElementData.Status.length > 0 && $scope.item.ElementData.Status.toLowerCase() != 'pending') {
                        $scope.showForm = false;
                    }
                    else if ($scope.item == null) {
                        DataContext.timeOut();
                    }
                });
            }
        }])
        .controller('contractorTravelSummary_Crtl', ['$scope', '_', 'DataContext', function ($scope, _, DataContext) {

            $scope.initialData = [];
            $scope.completeData = [];

            init();

            function init() {
                DataContext.allContractorRequest().then(function (data) {
                    populate(data);
                });
            }

            function populate(data) {
                _.each(data, function (item) {
                    if (item != null && _.isEqual(item.ElementData.Status, 'Ticketed')) {
                        $scope.completeData.push(item);
                    }
                    else {
                        $scope.initialData.push(item);
                    }
                });
                $scope.$emit("UPDATE_Count", "Updated");
            }

            $scope.$on("UPDATE_Count", function (event, message) {
                $scope.countPending = 0;
                $scope.countCPMApproval = 0;
                $scope.countDenied = 0;
                $scope.countTicketed = 0;

                if (_.size($scope.initialData) > 0) {
                    _.each($scope.initialData, function (itemIterator) {
                        if (itemIterator.ElementData.Status == 'Pending') {
                            $scope.countPending += 1;
                        }
                        if (itemIterator.ElementData.Status == 'Manager Approved') {
                            $scope.countCPMApproval += 1;
                        }
                        if (itemIterator.ElementData.Status == 'Cancelled/Denied') {
                            $scope.countDenied += 1;
                        }
                    });
                }
                $scope.countTicketed = _.size($scope.completeData);
            });

            $scope.btnTicket = function (item) {
                $scope.initialData.splice($scope.initialData.indexOf(item), 1);
                item.ElementData.Status = 'Ticketed';
                item.ElementData.BtnNGModel = '';
                item.FormData.Ticketed = true;
                $scope.completeData.push(item);

                $scope.$emit("UPDATE_Count", "Updated");

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelConRequestTicketed',
                    data: JSON.stringify(item.FormData.ContractorTravelRequestID),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    toastr.success('Ticketed Completed', "Success");
                });
            }

        }])
        //-----------------------------------------------Contractor Travel Ends-------------------------------------------------------
        .controller('popupModalInstanceCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };
        }])

        //-----------------------------------------------Admin Conference table updates-------------------------------------------------------
        .controller('adminConference_Crtl', ['$scope', '$modal', 'DataContext', '$filter', '$location', function ($scope, $modal, DataContext, $filter, $location) {

            $scope.tableData = [];

            Init();

            function Init() {
                DataContext.ConferenceList().then(function (data) {
                    $scope.tableData = data;
                    toastr.info('Conference Table loaded', "");
                });
            };

            function CallWS(jsonData, toastrMsg) {
                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'NewConference',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData)
                    .then(function (data) {
                        toastr.success(toastrMsg, "Success");
                    })
                    .then(function () {
                        Init();
                    });
            };

            $scope.addNewConference = function () {
                var newItem = { 'ConferenceID': '0', 'ConferenceName': '' };
                var modalInstance = $modal.open({
                    templateUrl: 'adminConferenceAddNew.html',
                    controller: 'adminConferenceAddNew_Ctrl',
                    resolve: {
                        popupItem: function () {
                            return newItem;
                        }
                    }
                });
                modalInstance.result.then(function (newItem) {
                    CallWS(newItem, 'New Conference added');
                }, function () { });
            };

            $scope.UpdateConference = function (item) {

                var modalInstance = $modal.open({
                    templateUrl: 'adminConferenceAddNew.html',
                    controller: 'adminConferenceAddNew_Ctrl',
                    resolve: {
                        popupItem: function () {
                            return item;
                        }
                    }
                });

                modalInstance.result.then(function (newItem) {
                    CallWS(newItem, 'Conference Updated');
                }, function () { });
            };

            $scope.ReloadTable = function () {
                Init();
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.DeleteConference = function (item) {

                if (typeof item.ConferenceName !== "undefined") {
                    var modalInstance = $modal.open({ templateUrl: 'adminConferenceDeleteConfirmation.html', controller: 'adminConferenceDeleteConfirmation_Ctrl' });
                    modalInstance.result.then(function (newItem) {
                        if (newItem === 'yes') {
                            var configData = {
                                method: 'POST',
                                url: Intranet.Util.Global.serviceURL() + 'DeleteConference',
                                data: JSON.stringify(item),
                                headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                            };
                            DataContext.post(configData).then(function (data) {
                                toastr.warning('Conference Deleted', "");
                                $scope.tableData.splice($scope.tableData.indexOf(item), 1);
                            });
                        }
                    }, function () { });

                }
            };

        }])
        .controller('adminConferenceDeleteConfirmation_Ctrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            //yes
            $scope.Yes = function () {
                $modalInstance.close('yes');
            };
            $scope.nope = function () {
                $modalInstance.dismiss('cancel');
            };
        }])
        .controller('adminConferenceAddNew_Ctrl', ['$scope', '$modalInstance', 'popupItem', function ($scope, $modalInstance, popupItem) {

            $scope.item = popupItem;

            $scope.Save = function () {
                if (typeof $scope.item.ConferenceName !== "undefined" && $scope.item.ConferenceName.length > 3) {
                    $modalInstance.close($scope.item);
                }
                else {
                    toastr.error('Conference name is invalid!!', 'Error');
                }
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }])
        //-----------------------------------------------Admin Projects table updates-------------------------------------------------------
        .controller('adminProjects_Crtl', ['$scope', '$modal', 'DataContext', '$filter', function ($scope, $modal, DataContext, $filter) {
            $scope.tableData = [];
            $scope.UserList = [];
            $scope.filterData = { 'ProjectName': '', 'ProjectNumber': '', 'ProjectCoordinatorName': '' };

            Init();

            function Init() {

                DataContext.ProjectList().then(function (data) {
                    $scope.tableData = data;
                    console.log($scope.tableData);
                    toastr.info('Project Table loaded', "");
                });

                DataContext.allUsersMinified().then(function (data) {
                    $scope.UserList = data.Users;
                });
            };

            function CallWS(jsonData, toastrMsg) {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'NewProject',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData).then(function (data) {
                    toastr.success(toastrMsg, "Success");
                }).then(function () {
                    Init();
                });
            }

            $scope.addNew = function () {
                var newItem = { 'ProjectNumber': '', 'ProjectName': '', 'ProjectCoordinatorGUID': '', 'ProjectCoordinatorName': '' };

                var modalInstance = $modal.open({
                    templateUrl: 'adminProjectsAddNew.html',
                    controller: 'adminProjectsAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return newItem; },
                        UserList: function () { return $scope.UserList; }
                    }
                });

                modalInstance.result.then(function (itemFromPopUp) { CallWS(itemFromPopUp, 'New Project added'); }, function () { });

            };

            $scope.ReloadTable = function () {
                Init();
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.Update = function (itemData) {

                var modalInstance = $modal.open({
                    templateUrl: 'adminProjectsAddNew.html',
                    controller: 'adminProjectsAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return itemData; },
                        UserList: function () { return $scope.UserList; }
                    }
                });

                modalInstance.result.then(function (itemFromPopUp) {
                    CallWS(itemFromPopUp, 'Project details updated');
                }, function () { });

            };

            $scope.Delete = function (deleteItemData) {
                if (typeof deleteItemData !== "undefined") {
                    var modalInstance = $modal.open({ templateUrl: 'adminProjectDeleteConfirmation.html', controller: 'adminProjectDeleteConfirmation_Ctrl' });
                    modalInstance.result.then(function (newItem) {

                        if (newItem === 'yes') {
                            var configData = {
                                method: 'POST',
                                url: Intranet.Util.Global.serviceURL() + 'DeleteProject',
                                data: JSON.stringify(deleteItemData),
                                headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                            };
                            DataContext.post(configData).then(function (data) {

                                $scope.tableData.splice($scope.tableData.indexOf(deleteItemData), 1);
                                toastr.warning('Conference Deleted', "");

                            });

                        }
                    }, function () { });

                }
            };

            $scope.clearFilters = function () { $scope.filterData = { 'ProjectName': '', 'ProjectNumber': '', 'ProjectCoordinatorName': '' }; };

        }])
        .controller('adminProjectsAddNew_Crtl', ['$scope', '$modalInstance', 'popupItem', 'UserList', function ($scope, $modalInstance, popupItem, UserList) {
            $scope.item = popupItem;
            $scope.popUpUserList = UserList;
            $scope.form = {};
            Init();

            function Init() {
                if ((typeof $scope.item.ProjectCoordinatorGUID !== "undefined" && $scope.item.ProjectCoordinatorGUID.length > 3)
                    || (typeof $scope.item.ProjectCoordinatorName !== "undefined" && $scope.item.ProjectCoordinatorName.length > 3)) {
                    var listIndex = function () {
                        for (var i = 0; i < $scope.popUpUserList.length; i++) {
                            if ($scope.popUpUserList[i].EmployeeGUID === $scope.item.ProjectCoordinatorGUID) {
                                return i;
                            }
                        }
                    };
                    $scope.form.selectedUser = $scope.popUpUserList[listIndex()];
                }
            }

            $scope.Save = function (isValid) {
                if (isValid && typeof $scope.item.ProjectName !== "undefined" && $scope.item.ProjectName.length > 3) {
                    $scope.item.ProjectCoordinatorGUID = $scope.form.selectedUser.EmployeeGUID;
                    $scope.item.ProjectCoordinatorName = $scope.form.selectedUser.EmployeeName;
                    $modalInstance.close($scope.item);
                }
                else {
                    toastr.error('Please enter all details!!', 'Error');
                }
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }])
        .controller('adminProjectDeleteConfirmation_Ctrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            $scope.Yes = function () {
                $modalInstance.close('yes');
            };
            $scope.nope = function () {
                $modalInstance.dismiss('cancel');
            };

        }])
        //-----------------------------------------------Admin TravelCodes table updates-------------------------------------------------------
        .controller('adminTravelCodes_Crtl', ['$scope', '$modal', 'DataContext', '$filter', function ($scope, $modal, DataContext, $filter) {
            $scope.filterData = { 'ProgramCode': '', 'Program': '', 'ProjectName': '', 'AccProgramCode': '', 'AccTaskCode': '', 'FY': '', 'MISNumber': '' };
            $scope.tableData = [];

            Init();

            function Init() {
                DataContext.TravelCodeList().then(function (data) {
                    $scope.tableData = data;
                    toastr.info('TravelCodes Table loaded', "");
                });
            };

            function CallWS(jsonData, toastrMsg) {
                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'NewTravelCode',
                    data: JSON.stringify(jsonData),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };
                DataContext.post(configData).then(function (data) {
                    toastr.success(toastrMsg, "Success");
                }).then(function () {
                    Init();
                });
            }

            $scope.addNew = function () {
                var newItem = { 'ProgramCode': '', 'Program': '', 'ProjectName': '', 'AccProgramCode': '', 'AccTaskCode': '', 'FY': '', 'MISNumber': '' };
                var modalInstance = $modal.open({
                    templateUrl: 'adminTravelCodesAddNew.html',
                    controller: 'adminTravelCodesAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return newItem; }
                    }
                });
                modalInstance.result.then(function (itemFromPopUp) {
                    console.log(itemFromPopUp);
                    CallWS(itemFromPopUp, 'New TravelCode added');
                }, function () { });
            };

            $scope.ReloadTable = function () {
                Init();
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/travel/');
            };

            $scope.Update = function (itemData) {

                var modalInstance = $modal.open({
                    templateUrl: 'adminTravelCodesAddNew.html',
                    controller: 'adminTravelCodesAddNew_Crtl',
                    resolve: {
                        popupItem: function () { return itemData; }
                    }
                });

                modalInstance.result.then(function (itemFromPopUp) {
                    CallWS(itemFromPopUp, 'TravelCode updated');
                }, function () { });

            };

            $scope.Delete = function (deleteItemData) {
                if (typeof deleteItemData !== "undefined") {
                    var modalInstance = $modal.open({ templateUrl: 'adminTravelCodesDeleteConfirmation.html', controller: 'adminTravelCodesDeleteConfirmation_Crtl' });
                    modalInstance.result.then(function (deletePopUpItem) {

                        if (deletePopUpItem === 'yes') {
                            var configData = {
                                method: 'POST',
                                url: Intranet.Util.Global.serviceURL() + 'DeleteTravelCode',
                                data: JSON.stringify(deleteItemData),
                                headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                            };
                            DataContext.post(configData).then(function (data) {
                                $scope.tableData.splice($scope.tableData.indexOf(deleteItemData), 1);
                                toastr.warning('Conference Deleted', "");
                            });
                        }
                    }, function () { });

                }
            };

            $scope.clearFilters = function () { $scope.filterData = { 'ProgramCode': '', 'Program': '', 'ProjectName': '', 'AccProgramCode': '', 'AccTaskCode': '', 'FY': '', 'MISNumber': '' }; };
        }])
        .controller('adminTravelCodesAddNew_Crtl', ['$scope', '$modalInstance', 'popupItem', function ($scope, $modalInstance, popupItem) {
            $scope.item = popupItem;

            $scope.Save = function (isValid) {
                if (isValid && typeof $scope.item.ProjectName !== "undefined" && $scope.item.ProjectName.length > 3) {
                    $modalInstance.close($scope.item);
                }
                else {
                    toastr.error('Please enter all details!!', 'Error');
                }
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }])
        .controller('adminTravelCodesDeleteConfirmation_Crtl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            $scope.Yes = function () {
                $modalInstance.close('yes');
            };
            $scope.nope = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);

})();