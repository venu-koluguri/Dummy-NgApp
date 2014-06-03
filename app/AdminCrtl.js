/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    angular.module('myApp.adminControllers', [])
        .controller('main_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            Init();
            function Init() {
                DataContext.spProperties().then(function (data) {
                    $scope.userData = data.d;
                });
            };
        }])
        .controller('homeIndex_Crtl', ['$scope', function ($scope) {
            $scope.imgUrls = { 'Travel': 'travel.png', 'Facilities': 'facilities.png', 'Admin': 'admin.png', 'Communications': 'communications.png', 'IT': 'it.png', 'Grants': 'grants.png', 'Acquisition': 'acquisition.png' };
        }])
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

        }])
        .controller('employeeInformationUpdate_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {

            Init();

            function Init() {

                DataContext.currentUserInfo().then(function (dataUserInfo) {
                    $scope.currentUser = dataUserInfo;
                });

                DataContext.empPicker()
                    .then(function (dataEmpPicker) { $scope.EmergencyContactRelationship = dataEmpPicker.EmergencyContactRelationship; })
                    .then(function () {
                        var index;
                        if ($scope.currentUser != null && $scope.EmergencyContactRelationship != null) {
                            for (var i = 0; i < $scope.EmergencyContactRelationship.length; i++) {
                                if ($scope.EmergencyContactRelationship[i].RelationshipId === $scope.currentUser.EmergencyContactRelationshipId) {
                                    index = i;
                                }
                            }
                            if (index > 0) {
                                $scope.currentUser.EmergencyContactRelationshipId = $scope.EmergencyContactRelationship[index].RelationshipId;
                            }
                        }
                    });
            };

            $scope.States = Intranet.Util.Global.USStatesJSON;

            $scope.parseMSJSONDate = function (strDate) {
                if (strDate != null) {
                    var newDate = new Date(parseInt(strDate.slice(6, -2)))
                    //var newDate = new Date(parseInt(strDate.replace(/\/Date\((.*?)\)\//gi, "$1")));
                    return newDate.getMonth() + "/" + newDate.getDate() + "/" + newDate.getFullYear();
                }
            };

            $scope.submitEmergenyContact = function (isValid) {
                if (isValid) {
                    callService('Emergency Contact Info updated successfully');
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.submitHomeContact = function (isValid) {
                if (isValid) {
                    callService('Home Contact Info updated successfully');
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            function callService(toast_message) {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'EmployeeUpdateInfo',
                    data: angular.toJson($scope.currentUser),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData).then(function (data) {
                    DataContext.successTimeOut(toast_message);
                });
            }
        }])
        .controller('employeeChangeOfName_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.empNameChangeDetails = {};

            Init();

            function Init() {

                DataContext.currentUserInfo()
                    .then(function (dataUserInfo) {
                        $scope.currentUser = dataUserInfo;
                    })
                    .then(function () {
                        $scope.empNameChangeDetails.CurrentInfo = angular.copy($scope.currentUser);
                    });

            };

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'EmployeeNameChange',
                        data: angular.toJson($scope.empNameChangeDetails),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('Name Change form request have submitted.');
                        });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };
        }])
        .controller('employeeRelocation_Crtl', ['$scope', 'DataContext', '_', function ($scope, DataContext, _) {

            $scope.isValidSubmitted = false;
            $scope.formSubmitted = false;
            $scope.employeeRelocationRequest = {};
            $scope.employeeRelocationRequest.DateOfRequest = Intranet.Util.Global.currentDate;

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
                                $scope.employeeRelocationRequest.RequestorInfo = $scope.allUsers[index];
                            }
                        }
                    });

                DataContext.empPicker().then(function (dataEmpPicker) {
                    $scope.Affiliations = dataEmpPicker.Affiliations;

                });

                DataContext.officePicker().then(function (dataOfficePicker) {
                    $scope.empLocation = dataOfficePicker.OfficeBuildings;

                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.submitEmployeeRelocation = function (isValid) {

                $scope.formSubmitted = true;

                if (isValid) {

                    $scope.isValidSubmitted = true;

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'EmpRelocation',
                        data: angular.toJson($scope.employeeRelocationRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }

                    };

                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('Employee relocation request has successfully submitted.');
                        $scope.isValidSubmitted = false;
                    });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

        }])
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

        }])
        .controller('employeeNew_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            //-------------------------New Employee Setup-------------------------------------------------------------


            $scope.newEmployeeRequest = {};
            $scope.newEmployeeRequest.DateOfRequest = Intranet.Util.Global.currentDate;
            $scope.newEmployeeRequest.reqTypeOfRequest = 'Initial Request';
            $scope.isValidSubmitted = false;
            $scope.formSubmitted = false;
            $scope.newEmployeeRequest.EmailList = Intranet.Util.Global.emailListJson;
            $scope.USStates = Intranet.Util.Global.USStatesJSON;
            $scope.lbl_ContractCompanyShow = false;

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
                                $scope.newEmployeeRequest.RequestorInfo = $scope.allUsers[index];
                            }
                        }
                    });

                DataContext.empPicker().then(function (dataEmpPicker) {
                    $scope.Affiliations = dataEmpPicker.Affiliations;
                    $scope.LineOffices = dataEmpPicker.LineOffices;
                    $scope.Programs = dataEmpPicker.Programs;
                    $scope.Regions = dataEmpPicker.Regions;
                });

                DataContext.officePicker().then(function (dataOfficePicker) {
                    $scope.empLocation = dataOfficePicker.OfficeBuildings;
                    $scope.SoftwareList = dataOfficePicker.SoftwareList;
                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.submitNewEmployee = function (isValid) {

                $scope.formSubmitted = true;

                if (isValid) {

                    $scope.isValidSubmitted = true;
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'AddNewEmployee',
                        data: angular.toJson($scope.newEmployeeRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }

                    };
                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('New Employee request has successfully submitted.');
                        $scope.isValidSubmitted = false;
                    });

                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            //-------------------------New Employee Setup-------------------------------------------------------------
        }])
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

        }])
        .controller('employeeSuggestionResults_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.tableData = {};
            Init();
            function Init() {
                DataContext.allAnonymousFeedback.then(function (data) {
                    $scope.tableData = data.d.results;
                });
            };
        }])
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
        }])
        .controller("foreignVisitorPass_Ctrl", ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.submitted = false;

            Init();
            function Init() {
                DataContext.allUsers().then(function (dataUsers) {
                    $scope.allUsers = dataUsers;
                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.submitForeignVisitorPass = function (isValid) {

                $scope.submitted = true;

                if (isValid) {

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'AddForeignVisitorRequest',
                        data: JSON.stringify($scope.foreignVisitorPassFrom),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };

                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut('Foreign Visitor Pass request form is successfully submitted.');
                    });

                }
                else {
                    toastr.error("Invalid data, Please verify!!", "Error");
                }

            };

        }])
        .controller('TBGAwards_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.TBGAwardsNomination = {};

            Init();
            function Init() {
                DataContext.currentUserInfo()
                    .then(function (dataUserInfo) {
                        $scope.currentUser = dataUserInfo;
                    })
                    .then(function () {
                        $scope.TBGAwardsNomination.currentUser = angular.copy($scope.currentUser);
                    });;

                DataContext.allUsers().then(function (dataUsers) {
                    $scope.allUsers = dataUsers;
                });
            };

            $scope.submitted = false;

            $scope.submitFrom = function (isValid) {
                $scope.submitted = true;
                if (isValid) {
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'TBGAwards',
                        data: angular.toJson($scope.TBGAwardsNomination),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'TBG award nomination form succesffuly submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('TBG award nomination form succesffuly submitted.');
                        });

                }
                else {
                    toastr.error("Invalid data, Please verify!!", "Error");
                }
            }

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

        }])
        .controller('adminEmployeeDetailsUpdate_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.vModel = {};
            $scope.AffiliationModels = [];
            $scope.LineOfficeModels = [];
            $scope.ProgramModels = [];
            $scope.RegionModels = [];
            $scope.PositionsModels = [];
            $scope.allUsers = [];

            Init();

            function Init() {

                var empGuid = DataContext.queryStringData('ID');

                DataContext.EmpByGuid(empGuid).then(function (data) {
                    $scope.vModel = data;
                });

                DataContext.empPicker().then(function (dataEmpPicker) {
                    $scope.AffiliationModels = dataEmpPicker.Affiliations;
                    $scope.LineOfficeModels = dataEmpPicker.LineOffices;
                    $scope.ProgramModels = dataEmpPicker.Programs;
                    $scope.RegionModels = dataEmpPicker.Regions;
                    $scope.PositionsModels = dataEmpPicker.Positions;
                });

                DataContext.allUsers().then(function (dataUsers) {
                    $scope.allUsers = dataUsers;
                });

            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/empList');
            };

            $scope.submitForm = function (isValid) {
                if (isValid) {

                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'EmpAdminUpdates',
                        data: angular.toJson($scope.vModel),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };

                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut("Updated employee details");
                    });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

        }])
        .controller('adminEmployeeList_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.allUsers = [];

            Init();

            function Init() {
                DataContext.allUsers().then(function (data) {
                    $scope.allUsers = data;
                });
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/admin/');
            };

            $scope.ReloadTable = function () {
                Init();
            };

            $scope.addNew = function () {
                DataContext.redirectTo('/admin/emp/new');
            };

            $scope.editOperation = function (user) {
                DataContext.redirectTo('/admin/empDetailsUpdate?ID=' + user.EmployeeGUID);
            };

        }])
        .controller('adminEmployeeDetails_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.vModel = {};

            Init();

            function Init() {
                var empGuid = DataContext.queryStringData('ID');
                DataContext.EmpByGuid(empGuid).then(function (data) { $scope.vModel = data; });
            };

            $scope.goBack = function () { DataContext.redirectTo('/admin/emp/locator'); };

        }]);

})();