///#source 1 1 C:\Intranet\Layouts\Intranet\app\app.js
(function () {
    angular.module('intranetApp',
        [
            'ui.router'
            , 'ui.bootstrap'
            , 'ngAnimate'
            , 'ui.select2'
            , 'ngAutocomplete'
            , 'ui.utils'
            , 'rcWizard'
            , 'rcForm'
            , 'rcDisabledBootstrap'
            , 'ngSanitize'
            , 'myApp.services'
            , 'myApp.travelControllers'
            , 'myApp.adminControllers'
            , 'myApp.directives'
            , 'myApp.filters'
            , 'LocalStorageModule'
        ])

        .config(['$stateProvider', '$urlRouterProvider', '$provide', '$httpProvider', function ($stateProvider, $urlRouterProvider, $provide, $httpProvider) {

            $urlRouterProvider.otherwise("/home/");

            $stateProvider
                 .state('home', {
                     url: '/home/',
                     templateUrl: '/_layouts/15/Intranet/views/index.min.html',
                     controller: 'homeIndex_Crtl',
                     title: 'OCM Intranet | Home Page',
                     breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i>Intranet</li>'
                 })
                 //-----------------travel Section----------------------------------------------
                .state('travelIndex', {
                    url: '/travel/',
                    templateUrl: '/_layouts/15/Intranet/views/travel/index.min.html',
                    title: 'OCM Intranet | Travel Home Page',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li>Travel Home</li>'
                })
                .state('travel-fed-request-form', {
                    url: '/travel/fed/request',
                    templateUrl: '/_layouts/15/Intranet/views/travel/federalTravelRequest.min.html',
                    controller: 'federalTravelRequest_Crtl',
                    title: 'OCM Intranet | Federal Travel request form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Federal Travel request form</li>'
                })
                .state('travel-contractor-request-form', {
                    url: '/travel/contractor/request',
                    templateUrl: '/_layouts/15/Intranet/views/travel/contractorTravelRequest.min.html',
                    controller: 'contractorTravelRequest_Crtl',
                    title: 'OCM Intranet | Contractor Travel request form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Contractor Travel request form</li>'
                })
                .state('travel-expense-form', {
                    url: '/travel/expense-form',
                    templateUrl: '/_layouts/15/Intranet/views/travel/federalExpense.min.html',
                    controller: 'federalExpense_Crtl',
                    title: 'OCM Intranet | Travel Expense form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Travel Expense form</li>'
                })
                .state('fed-PM-approval', {
                    url: '/travel/fed/approval',
                    templateUrl: '/_layouts/15/Intranet/views/travel/federalProgManagerApproval.min.html',
                    controller: 'federalProgManagerApproval_Crtl',
                    title: 'OCM Intranet | Federal PM Approval',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Federal Approval</li>'
                })
                .state('fed-summary', {
                    url: '/travel/fed/summary',
                    templateUrl: '/_layouts/15/Intranet/views/travel/federalTravelSummary.min.html',
                    controller: 'federalTravelSummary_Crtl',
                    title: 'OCM Intranet | Federal Travel Summary',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Federal Travel Summary</li>'
                })
                .state('federalExpenseSummary', {
                    url: '/travel/fed/expenseSummary',
                    templateUrl: '/_layouts/15/Intranet/views/travel/federalExpenseSummary.min.html',
                    controller: 'federalExpenseSummary_Crtl',
                    title: 'OCM Intranet | Federal Travel Expense Summary',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Federal Travel Expense Summary</li>'
                })
                .state('contractor-approval', {
                    url: '/travel/contractor/approval',
                    templateUrl: '/_layouts/15/Intranet/views/travel/contractorApproval.min.html',
                    controller: 'contractorApproval_Crtl',
                    title: 'OCM Intranet | Contractor PM Approval',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Contractor Approval</li>'
                })
                .state('contractor-summary', {
                    url: '/travel/contractor/summary',
                    templateUrl: '/_layouts/15/Intranet/views/travel/contractorTravelSummary.min.html',
                    controller: 'contractorTravelSummary_Crtl',
                    title: 'OCM Intranet | Contractor Travel Summary',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Contractor Travel Summary</li>'
                })
                .state('admin-conference', {
                    url: '/travel/admin/conference',
                    templateUrl: '/_layouts/15/Intranet/views/travel/adminConference.min.html',
                    controller: 'adminConference_Crtl',
                    title: 'OCM Intranet | Add Edit Delete Conference',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Add Edit Delete Conference</li>'
                })
                 .state('admin-project', {
                     url: '/travel/admin/projects',
                     templateUrl: '/_layouts/15/Intranet/views/travel/adminProjects.min.html',
                     controller: 'adminProjects_Crtl',
                     title: 'OCM Intranet | Add Edit Delete Project',
                     breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Add Edit Delete Project</li>'
                 })
                .state('admin-TravelCodes', {
                    url: '/travel/admin/travelCodes',
                    templateUrl: '/_layouts/15/Intranet/views/travel/adminTravelCodes.min.html',
                    controller: 'adminTravelCodes_Crtl',
                    title: 'OCM Intranet | Add Edit Delete TravelCodes',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/travel/">Travel Home</a></li><li>Add Edit Delete TravelCodes</li>'
                })
                 //-----------------facilities Section----------------------------------------------
                .state('facilitiesIndex', {
                    url: '/facilities/',
                    templateUrl: '/_layouts/15/Intranet/views/facilities/index.min.html',
                    title: 'OCM Intranet | Facilities Home',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li>Facilities</li>'
                })
                //-----------------Admin Section----------------------------------------------
                .state('adminIndex', {
                    url: '/admin/',
                    templateUrl: '/_layouts/15/Intranet/views/admin/index.min.html',
                    title: 'OCM Intranet | Admin Home',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li>Admin Home</li>'
                })
                .state('emp-locator', {
                    url: '/admin/emp/locator',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeLocator.min.html',
                    controller: 'employeeLocator_Crtl',
                    title: 'OCM Intranet | Employee Locator',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee Locator</li>'
                })
                .state('emp-info-update', {
                    url: '/admin/emp/infoUpdate',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeInformationUpdate.min.html',
                    controller: 'employeeInformationUpdate_Ctrl',
                    title: 'OCM Intranet | Employee Info Update',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee Information Update</li>'
                })
                .state('admin-emp-list', {
                    url: '/admin/empList',
                    templateUrl: '/_layouts/15/Intranet/views/admin/adminEmployeeList.min.html',
                    controller: 'adminEmployeeList_Ctrl',
                    title: 'OCM Intranet | Employee List',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee List</li>'
                })
                .state('admin-emp-details', {
                    url: '/admin/empDetails',
                    templateUrl: '/_layouts/15/Intranet/views/admin/adminEmployeeDetails.min.html',
                    controller: 'adminEmployeeDetails_Ctrl',
                    title: 'OCM Intranet | Employee Details',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee details</li>'

                })
                .state('admin-emp-info-update', {
                    url: '/admin/empDetailsUpdate',
                    templateUrl: '/_layouts/15/Intranet/views/admin/adminEmployeeDetailsUpdate.min.html',
                    controller: 'adminEmployeeDetailsUpdate_Ctrl',
                    title: 'OCM Intranet | Employee Info Update',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee Information Update</li>'
                })
                .state('emp-name-change', {
                    url: '/admin/emp/nameChange',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeChangeOfName.min.html',
                    controller: 'employeeChangeOfName_Crtl',
                    title: 'OCM Intranet | Employee Name Change Form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee Change of Name Notification </li>'
                })
                .state('emp-relocation', {
                    url: '/admin/emp/relocation',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeRelocation.min.html',
                    controller: 'employeeRelocation_Crtl',
                    title: 'OCM Intranet | Employee Relocation Form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Request Employee Relocation</li>'
                })
                .state('emp-separation', {
                    url: '/admin/emp/separation',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeSeparation.min.html',
                    controller: 'employeeSeparation_Crtl',
                    title: 'OCM Intranet | Employee Seperation Form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Request Employee Separation</li>'
                })
                .state('emp-new', {
                    url: '/admin/emp/new',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeNew.min.html',
                    controller: 'employeeNew_Crtl',
                    title: 'OCM Intranet | New Employee Form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Request New Employee Setup</li>'
                })
                .state('emp-suggestion-box', {
                    url: '/admin/emp/suggestionBox',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeSuggestionBox.min.html',
                    controller: 'employeeSuggestionBox_Crtl',
                    title: 'OCM Intranet | Employee Anonymous Feedback form',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee Suggestion Box</li>'
                })
                .state('emp-suggestion-feedback', {
                    url: '/admin/emp/suggestions/feedback',
                    templateUrl: '/_layouts/15/Intranet/views/admin/employeeSuggestionResults.min.html',
                    controller: 'employeeSuggestionResults_Crtl',
                    title: 'OCM Intranet | Employee Anonymous Feedback response',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Employee Suggestion Box feedback</li>'
                })
                .state('emp-FLECT-pass', {
                    url: '/admin/emp/FLECT',
                    templateUrl: '/_layouts/15/Intranet/views/admin/FLETCVisitorPass.min.html',
                    controller: 'FLETCVisitorPass_Ctrl',
                    title: 'OCM Intranet | Employee FLECT Visitor request',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>FLETC visitor pass form</li>'
                })
                .state('emp-foreign-pass', {
                    url: '/admin/emp/foreign',
                    templateUrl: '/_layouts/15/Intranet/views/admin/foreignVisitorPass.min.html',
                    controller: 'foreignVisitorPass_Ctrl',
                    title: 'OCM Intranet | Employee Foreign Visitor request',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>Foreign visitor pass form </li>'
                })
                .state('emp-awards', {
                    url: '/admin/emp/awards',
                    templateUrl: '/_layouts/15/Intranet/views/admin/TBGAwards.min.html',
                    controller: 'TBGAwards_Crtl',
                    title: 'OCM Intranet | Employee Award Nomination form request',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li><a href="#/admin/">Admin Home</a></li><li>TBG awards submission form </li>'
                })
                //-----------------Comunications Section----------------------------------------------
                .state('commIndex', {
                    url: '/communications/',
                    templateUrl: '/_layouts/15/Intranet/views/communications/index.min.html',
                    title: 'OCM Intranet | Communications Home',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li>Communications Home</li>'
                })
                 //-----------------IT Section----------------------------------------------
                .state('itIndex', {
                    url: '/it/',
                    templateUrl: '/_layouts/15/Intranet/views/it/index.min.html',
                    title: 'OCM Intranet | I.T. and Property',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li>I.T. and Property Home</li>'
                })
                 //-----------------grants Section----------------------------------------------
                .state('grantsIndex', {
                    url: '/grants/',
                    templateUrl: '/_layouts/15/Intranet/views/grants/index.min.html',
                    title: 'OCM Intranet | Grants and Agreements',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li>Grants and Agreements</li>'
                })
                 //-----------------acquisition Section----------------------------------------------
                .state('acquisitionIndex', {
                    url: '/acquisitions/',
                    templateUrl: '/_layouts/15/Intranet/views/acquisitions/index.min.html',
                    title: 'OCM Intranet | Acquisitions',
                    breadcrumb: '<li><i class="fa fa-home fa-lg">&nbsp;</i><a href="#/home/">Intranet</a></li><li>Acquisitions</li>'
                });

            $provide.decorator('$exceptionHandler', ['$delegate', 'logger', extendExceptionHandler]);

            function extendExceptionHandler($delegate, logger) {
                var appErrorPrefix = '[Application Error]';
                var logError = logger.getLogFn('app', 'error');

                return function (exception, cause) {

                    $delegate(exception, cause);

                    if (appErrorPrefix && exception.message.indexOf(appErrorPrefix) === 0) { return; }

                    var errorData = { exception: exception, cause: cause };
                    var msg = appErrorPrefix + exception.message;
                    logError(msg, errorData, true);

                };

            }

            $provide.factory('cacheBuster', ['$templateCache', function ($templateCache) {
                function getBuster() {
                    return (new Date()).getTime();
                }
                return {
                    'request': function (config) {
                        //templateCache safe cache busting (doesnt stomp on angularui's bootstrap)
                        if ($templateCache.get(config.url)) {
                            return config;
                        }
                        var prefix = '?';

                        if (config.url.search('\\?') !== -1) {
                            prefix = '&';
                        }

                        config.url += prefix += 'v=' + getBuster();

                        return config;
                    }
                }
            }]);
            $httpProvider.interceptors.push('cacheBuster');

        }])

        .run(['$rootScope', '$state', '$stateParams', '$templateCache', function ($rootScope, $state, $stateParams, $templateCache) {

            $rootScope.$on('$stateChangeSuccess', function (currentRoute, previousRoute) {
                $rootScope.pageTitle = $state.current.title;
                $rootScope.pageBreadcrumb = $state.current.breadcrumb;
            });

            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                if (typeof (current) !== 'undefined') {
                    $templateCache.remove(current.templateUrl);
                }
            });

        }]);

})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\config.js
'use strict';

var Intranet = window.Intranet || {};
Intranet.Util = Intranet.Util || {};
Intranet.Util.Global = (function () {

    angular.module('rcForm', []).directive(rcSubmitDirective);

    toastr.options = {
        "closeButton": true,
        "debug": false,
        // "positionClass": "toast-bottom-full-width",
        "onclick": null,
        "showDuration": "700",
        "hideDuration": "1000",
        "timeOut": "7000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    var _domain = document.domain;

    var _serviceURL = function () {
        switch (_domain) {
            case 'csc-s-spdev2013':
                return 'http://csc-s-spdev2013/_vti_bin/IntranetService.svc/';
                break;
            case 'sp2013':
                return 'http://sp2013/_vti_bin/IntranetService.svc/';
                break;
            case 'csc-s-spdev2013.csc.noaa.gov':
                return 'http://csc-s-spdev2013.csc.noaa.gov/_vti_bin/IntranetService.svc/';
                break;
            default:
                return '';
        }
    };

    var _rootSiteURL = function () {
        switch (_domain) {
            case 'csc-s-spdev2013':
                return 'http://csc-s-spdev2013/';
                break;
            case 'sp2013':
                return 'http://sp2013/';
                break;
            case 'csc-s-spdev2013.csc.noaa.gov':
                return 'http://csc-s-spdev2013.csc.noaa.gov/';
                break;
            default:
                return '';
                break;
        }
    };

    var _currentDate = function () {
        var d = new Date();
        return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
    };

    var _setDatepickerOptionsForStartEnd = function (startId, endID, monthsDuration) {
        $("#" + startId).datepicker({

            changeMonth: true,
            numberOfMonths: monthsDuration,
            minDate: 0,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onClose: function (selectedDate) {
                $("#" + endID).datepicker("option", "minDate", selectedDate);
            }

        });
        $("#" + endID).datepicker({

            changeMonth: true,
            numberOfMonths: monthsDuration,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onClose: function (selectedDate) {
                $("#" + startId).datepicker("option", "maxDate", selectedDate);
            }
        });
    };

    var _setDatepickerOptionsForElement = function (elementId, monthsDuration) {
        $("#" + elementId).datepicker({
            setDate: 0,
            changeMonth: true,
            numberOfMonths: monthsDuration,
            minDate: 0,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
        });
    };

    var _setTimePickerOptions = function (elementID) {
        $('#' + elementID).timepicker('setTime', '12:45 PM');
    }

    var _S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    var _newGuid = function () {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    var _emailListJson = [{ "id": "1", "col": "1", "isChecked": "false", "groupname": "coastalconnections@noaa.gov" }, { "id": "2", "col": "1", "isChecked": "false", "groupname": "coastalocean@noaa.gov" }, { "id": "3", "col": "1", "isChecked": "false", "groupname": "csc.bbteam@noaa.gov" }, { "id": "4", "col": "1", "isChecked": "false", "groupname": "csc.budget.analysts@noaa.gov" }, { "id": "5", "col": "1", "isChecked": "false", "groupname": "csc.budget.contacts@noaa.gov" }, { "id": "6", "col": "1", "isChecked": "false", "groupname": "csc.climate.team@noaa.gov" }, { "id": "7", "col": "1", "isChecked": "false", "groupname": "csc.climate@noaa.gov" }, { "id": "8", "col": "1", "isChecked": "false", "groupname": "csc.dbadmin@noaa.gov" }, { "id": "9", "col": "1", "isChecked": "false", "groupname": "csc.dds@noaa.gov" }, { "id": "10", "col": "1", "isChecked": "false", "groupname": "csc.fellowships@noaa.gov" }, { "id": "11", "col": "2", "isChecked": "false", "groupname": "csc.gis@noaa.gov" }, { "id": "12", "col": "2", "isChecked": "false", "groupname": "csc.hat@noaa.gov" }, { "id": "14", "col": "2", "isChecked": "false", "groupname": "csc.iis@noaa.gov" }, { "id": "15", "col": "2", "isChecked": "false", "groupname": "csc.magazine@noaa.gov" }, { "id": "16", "col": "2", "isChecked": "false", "groupname": "csc.paybanding@noaa.gov" }, { "id": "17", "col": "2", "isChecked": "false", "groupname": "csc.ses.hazards@noaa.gov" }, { "id": "18", "col": "2", "isChecked": "false", "groupname": "csc.trainers@noaa.gov" }, { "id": "", "col": "2", "isChecked": "false", "groupname": "nos.csc.ads@noaa.gov" }, { "id": "19", "col": "2", "isChecked": "false", "groupname": "nos.csc.celcsummit@noaa.gov" }, { "id": "20", "col": "2", "isChecked": "false", "groupname": "nos.csc.cgs@noaa.gov" }, { "id": "21", "col": "3", "isChecked": "false", "groupname": "nos.csc.cias@noaa.gov" }, { "id": "22", "col": "3", "isChecked": "false", "groupname": "nos.csc.cis@noaa.gov" }, { "id": "23", "col": "3", "isChecked": "false", "groupname": "nos.csc.clearinghouse@noaa.gov" }, { "id": "24", "col": "3", "isChecked": "false", "groupname": "nos.csc.cls@noaa.gov" }, { "id": "25", "col": "3", "isChecked": "false", "groupname": "nos.csc.cms@noaa.gov" }, { "id": "26", "col": "3", "isChecked": "false", "groupname": "nos.csc.consandrest@noaa.gov" }, { "id": "27", "col": "3", "isChecked": "false", "groupname": "nos.csc.core@noaa.gov" }, { "id": "28", "col": "3", "isChecked": "false", "groupname": "nos.csc.cots@noaa.gov" }, { "id": "29", "col": "3", "isChecked": "false", "groupname": "nos.csc.crs@noaa.gov" }, { "id": "30", "col": "3", "isChecked": "false", "groupname": "nos.csc.csp.projectpocs@noaa.gov" }, { "id": "31", "col": "4", "isChecked": "false", "groupname": "nos.csc.cspteam@noaa.gov" }, { "id": "32", "col": "4", "isChecked": "false", "groupname": "nos.csc.directors.office@noaa.gov" }, { "id": "33", "col": "4", "isChecked": "false", "groupname": "nos.csc.ew@noaa.gov" }, { "id": "34", "col": "4", "isChecked": "false", "groupname": "nos.csc.facility@noaa.gov" }, { "id": "35", "col": "4", "isChecked": "false", "groupname": "nos.csc.feds@noaa.gov" }, { "id": "36", "col": "4", "isChecked": "false", "groupname": "nos.csc.financial.services@noaa.gov" }, { "id": "37", "col": "4", "isChecked": "false", "groupname": "nos.csc.geospatial@noaa.gov" }, { "id": "38", "col": "4", "isChecked": "false", "groupname": "nos.csc.gomex@noaa.gov" }, { "id": "39", "col": "4", "isChecked": "false", "groupname": "nos.csc.greatlakes@noaa.gov" }, { "id": "40", "col": "4", "isChecked": "false", "groupname": "nos.csc.gulfcoast@noaa.gov" }];
    var _USStatesJSON = [{ "name": "Alabama", "abbreviation": "AL" }, { "name": "Alaska", "abbreviation": "AK" }, { "name": "American Samoa", "abbreviation": "AS" }, { "name": "Arizona", "abbreviation": "AZ" }, { "name": "Arkansas", "abbreviation": "AR" }, { "name": "California", "abbreviation": "CA" }, { "name": "Colorado", "abbreviation": "CO" }, { "name": "Connecticut", "abbreviation": "CT" }, { "name": "Delaware", "abbreviation": "DE" }, { "name": "District Of Columbia", "abbreviation": "DC" }, { "name": "Federated States Of Micronesia", "abbreviation": "FM" }, { "name": "Florida", "abbreviation": "FL" }, { "name": "Georgia", "abbreviation": "GA" }, { "name": "Guam", "abbreviation": "GU" }, { "name": "Hawaii", "abbreviation": "HI" }, { "name": "Idaho", "abbreviation": "ID" }, { "name": "Illinois", "abbreviation": "IL" }, { "name": "Indiana", "abbreviation": "IN" }, { "name": "Iowa", "abbreviation": "IA" }, { "name": "Kansas", "abbreviation": "KS" }, { "name": "Kentucky", "abbreviation": "KY" }, { "name": "Louisiana", "abbreviation": "LA" }, { "name": "Maine", "abbreviation": "ME" }, { "name": "Marshall Islands", "abbreviation": "MH" }, { "name": "Maryland", "abbreviation": "MD" }, { "name": "Massachusetts", "abbreviation": "MA" }, { "name": "Michigan", "abbreviation": "MI" }, { "name": "Minnesota", "abbreviation": "MN" }, { "name": "Mississippi", "abbreviation": "MS" }, { "name": "Missouri", "abbreviation": "MO" }, { "name": "Montana", "abbreviation": "MT" }, { "name": "Nebraska", "abbreviation": "NE" }, { "name": "Nevada", "abbreviation": "NV" }, { "name": "New Hampshire", "abbreviation": "NH" }, { "name": "New Jersey", "abbreviation": "NJ" }, { "name": "New Mexico", "abbreviation": "NM" }, { "name": "New York", "abbreviation": "NY" }, { "name": "North Carolina", "abbreviation": "NC" }, { "name": "North Dakota", "abbreviation": "ND" }, { "name": "Northern Mariana Islands", "abbreviation": "MP" }, { "name": "Ohio", "abbreviation": "OH" }, { "name": "Oklahoma", "abbreviation": "OK" }, { "name": "Oregon", "abbreviation": "OR" }, { "name": "Palau", "abbreviation": "PW" }, { "name": "Pennsylvania", "abbreviation": "PA" }, { "name": "Puerto Rico", "abbreviation": "PR" }, { "name": "Rhode Island", "abbreviation": "RI" }, { "name": "South Carolina", "abbreviation": "SC" }, { "name": "South Dakota", "abbreviation": "SD" }, { "name": "Tennessee", "abbreviation": "TN" }, { "name": "Texas", "abbreviation": "TX" }, { "name": "Utah", "abbreviation": "UT" }, { "name": "Vermont", "abbreviation": "VT" }, { "name": "Virgin Islands", "abbreviation": "VI" }, { "name": "Virginia", "abbreviation": "VA" }, { "name": "Washington", "abbreviation": "WA" }, { "name": "West Virginia", "abbreviation": "WV" }, { "name": "Wisconsin", "abbreviation": "WI" }, { "name": "Wyoming", "abbreviation": "WY" }]

    var _timeDropDown = ['12:00 AM', '12:10 AM', '12:20 AM', '12:30 AM', '12:40 AM', '12:50 AM', '1:00 AM', '1:10 AM', '1:20 AM', '1:30 AM', '1:40 AM', '1:50 AM', '2:00 AM', '2:10 AM', '2:20 AM', '2:30 AM', '2:40 AM', '2:50 AM', '3:00 AM', '3:10 AM', '3:20 AM', '3:30 AM', '3:40 AM', '3:50 AM', '4:00 AM', '4:10 AM', '4:20 AM', '4:30 AM', '4:40 AM', '4:50 AM', '5:00 AM', '5:10 AM', '5:20 AM', '5:30 AM', '5:40 AM', '5:50 AM', '6:00 AM', '6:10 AM', '6:20 AM', '6:30 AM', '6:40 AM', '6:50 AM', '7:00 AM', '7:10 AM', '7:20 AM', '7:30 AM', '7:40 AM', '7:50 AM', '8:00 AM', '8:10 AM', '8:20 AM', '8:30 AM', '8:40 AM', '8:50 AM', '9:00 AM', '9:10 AM', '9:20 AM', '9:30 AM', '9:40 AM', '9:50 AM', '10:00 AM', '10:10 AM', '10:20 AM', '10:30 AM', '10:40 AM', '10:50 AM', '11:00 AM', '11:10 AM', '11:20 AM', '11:30 AM', '11:40 AM', '11:50 AM', '12:00 PM', '12:10 PM', '12:20 PM', '12:30 PM', '12:40 PM', '12:50 PM', '1:00 PM', '1:10 PM', '1:20 PM', '1:30 PM', '1:40 PM', '1:50 PM', '2:00 PM', '2:10 PM', '2:20 PM', '2:30 PM', '2:40 PM', '2:50 PM', '3:00 PM', '3:10 PM', '3:20 PM', '3:30 PM', '3:40 PM', '3:50 PM', '4:00 PM', '4:10 PM', '4:20 PM', '4:30 PM', '4:40 PM', '4:50 PM', '5:00 PM', '5:10 PM', '5:20 PM', '5:30 PM', '5:40 PM', '5:50 PM', '6:00 PM', '6:10 PM', '6:20 PM', '6:30 PM', '6:40 PM', '6:50 PM', '7:00 PM', '7:10 PM', '7:20 PM', '7:30 PM', '7:40 PM', '7:50 PM', '8:00 PM', '8:10 PM', '8:20 PM', '8:30 PM', '8:40 PM', '8:50 PM', '9:00 PM', '9:10 PM', '9:20 PM', '9:30 PM', '9:40 PM', '9:50 PM', '10:00 PM', '10:10 PM', '10:20 PM', '10:30 PM', '10:40 PM', '10:50 PM', '11:00 PM', '11:10 PM', '11:20 PM', '11:30 PM', '11:40 PM', '11:50 PM'];

    var _fedTravelLocations = [{ 'name': 'PSC', 'value': '1845 Wasp Blvd, Honolulu, HI, United States' }
        , { 'name': 'SSMC', 'value': '1305 East-West Highway, Silver Spring, MD, United States' }
        , { 'name': 'CHS', 'value': '2234 South Hobson Avenue, North Charleston, SC, United States' }
        , { 'name': 'Other', 'value': ' ' }];

    var _propertyPassURL = 'https://shipslog2.csc.noaa.gov/content/forms/Services_and_Facilities/Property_Pass_Request_Form.jsp';

    var _intranetAdmin = angular.module('myApp.adminControllers', []);
    var _intranetTravel = angular.module('myApp.travelControllers', []);
    var _travelExpenseReceipt = '/TravelExpenseReceipt';

    function _jsonToCommaSeperatedString(jsonData) {
        if (jsonData) {
            var res = [];
            Object.keys(jsonData).forEach(function (key) {
                res.push(key + ':' + jsonData[key]);
            });
            return res.join(",");
        }
    }

    function _commaSeperatedStringTOJson(str) {
        if (str) {
            var jsonData = '';
            var toSplit = str.split(",");
            for (var i = 0; i < toSplit.length; i++) {
                var keySplit = toSplit[i].split(":");
                jsonData += "'" + keySplit[0] + "'" + ':' + "'" + keySplit[1] + "'" + ',';
            }
            jsonData = jsonData.substring(0, str.length - 1);
            jsonData = "{" + jsonData + "}";
            return JSON.stringify(jsonData);
        }
    }

    return {

        setDatepickerOptionsForStartEnd: _setDatepickerOptionsForStartEnd
        , setDatepickerOptionsForElement: _setDatepickerOptionsForElement
        , setTimePickerOptions: _setTimePickerOptions
        , S4: _S4
        , newGuid: _newGuid
        , serviceURL: _serviceURL
        , domain: _domain
        , rootSiteURL: _rootSiteURL
        , currentDate: _currentDate
        , emailListJson: _emailListJson
        , USStatesJSON: _USStatesJSON
        , timeDropDown: _timeDropDown
        , FedTravelLocations: _fedTravelLocations
        , PropertyPassURL: _propertyPassURL
        , Admin: _intranetAdmin
        , Travel: _intranetTravel
        , TravelExpenseReceipt: _travelExpenseReceipt
        , JsonToCommaSeperatedString: _jsonToCommaSeperatedString
        , CommaSeperatedStringTOJson: _commaSeperatedStringTOJson
    };

})();

///#source 1 1 C:\Intranet\Layouts\Intranet\app\directives.js

(function () {
    'use strict';
    angular.module('myApp.directives', [])
        .factory('httpInterceptor', function () {
            return {};
        })
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        }])
        .directive('validNumber', function () {
            return {
                require: '?ngModel',
                link: function (scope, element, attrs, ngModelCtrl) {
                    if (!ngModelCtrl) {
                        return;
                    }

                    ngModelCtrl.$parsers.push(function (val) {
                        var clean = val.replace(/[^0-9]+/g, '');
                        if (val !== clean) {
                            ngModelCtrl.$setViewValue(clean);
                            ngModelCtrl.$render();
                        }
                        return clean;
                    });

                    element.bind('keypress', function (event) {
                        if (event.keyCode === 32) {
                            event.preventDefault();
                        }
                    });
                }
            };
        })
        .directive('ccScrollToTop', ['$window',

            function ($window) {
                var directive = {
                    link: link,
                    template: '<a href="#"><i class="fa fa-chevron-up"></i></a>',
                    restrict: 'A'
                };
                return directive;

                function link(scope, element, attrs) {
                    var $win = $($window);
                    element.addClass('totop');
                    $win.scroll(toggleIcon);

                    element.find('a').click(function (e) {
                        e.preventDefault();

                        $('body').animate({ scrollTop: 0 }, 500);
                    });

                    function toggleIcon() {
                        $win.scrollTop() > 300 ? element.slideDown() : element.slideUp();
                    }
                }
            }
        ])
        .directive('wcOverlay', ['$q', '$timeout', '$window', 'httpInterceptor', function ($q, $timeout, $window, httpInterceptor) {
            return {
                restrict: 'EA',
                transclude: true,
                scope: {
                    wcOverlayDelay: "@"
                },
                template: '<div id="overlay-container" class="overlayContainer">' +
                                '<div id="overlay-background" class="overlayBackground"></div>' +
                                '<div id="overlay-content" class="overlayContent" data-ng-transclude>' +
                                '</div>' +
                            '</div>',
                link: function (scope, element, attrs) {
                    var overlayContainer = null,
                        timerPromise = null,
                        timerPromiseHide = null,
                        queue = [];

                    init();

                    function init() {
                        wireUpHttpInterceptor();
                        if (window.jQuery) wirejQueryInterceptor();
                        overlayContainer = element[0].firstChild; //Get to template
                    }

                    //Hook into httpInterceptor factory request/response/responseError functions                
                    function wireUpHttpInterceptor() {

                        httpInterceptor.request = function (config) {
                            processRequest();
                            return config || $q.when(config);
                        };

                        httpInterceptor.response = function (response) {
                            processResponse();
                            return response || $q.when(response);
                        };

                        httpInterceptor.responseError = function (rejection) {
                            processResponse();
                            return $q.reject(rejection);
                        };
                    }

                    //Monitor jQuery Ajax calls in case it's used in an app
                    function wirejQueryInterceptor() {
                        $(document).ajaxStart(function () {
                            processRequest();
                        });

                        $(document).ajaxComplete(function () {
                            processResponse();
                        });

                        $(document).ajaxError(function () {
                            processResponse();
                        });
                    }

                    function processRequest() {
                        queue.push({});
                        if (queue.length == 1) {
                            timerPromise = $timeout(function () {
                                if (queue.length) showOverlay();
                            }, scope.wcOverlayDelay ? scope.wcOverlayDelay : 500); //Delay showing for 500 millis to avoid flicker
                        }
                    }

                    function processResponse() {
                        queue.pop();
                        if (queue.length == 0) {
                            //Since we don't know if another XHR request will be made, pause before
                            //hiding the overlay. If another XHR request comes in then the overlay
                            //will stay visible which prevents a flicker
                            timerPromiseHide = $timeout(function () {
                                //Make sure queue is still 0 since a new XHR request may have come in
                                //while timer was running
                                if (queue.length == 0) {
                                    hideOverlay();
                                    if (timerPromiseHide) $timeout.cancel(timerPromiseHide);
                                }
                            }, scope.wcOverlayDelay ? scope.wcOverlayDelay : 500);
                        }
                    }

                    function showOverlay() {
                        var w = 0;
                        var h = 0;
                        if (!$window.innerWidth) {
                            if (!(document.documentElement.clientWidth == 0)) {
                                w = document.documentElement.clientWidth;
                                h = document.documentElement.clientHeight;
                            }
                            else {
                                w = document.body.clientWidth;
                                h = document.body.clientHeight;
                            }
                        }
                        else {
                            w = $window.innerWidth;
                            h = $window.innerHeight;
                        }
                        var content = document.getElementById('overlay-content');
                        var contentWidth = parseInt(getComputedStyle(content, 'width').replace('px', ''));
                        var contentHeight = parseInt(getComputedStyle(content, 'height').replace('px', ''));

                        content.style.top = h / 2 - contentHeight / 2 + 'px';
                        content.style.left = w / 2 - contentWidth / 2 + 'px';

                        overlayContainer.style.display = 'block';
                    }

                    function hideOverlay() {
                        if (timerPromise) $timeout.cancel(timerPromise);
                        overlayContainer.style.display = 'none';
                    }

                    var getComputedStyle = function () {
                        var func = null;
                        if (document.defaultView && document.defaultView.getComputedStyle) {
                            func = document.defaultView.getComputedStyle;
                        } else if (typeof (document.body.currentStyle) !== "undefined") {
                            func = function (element, anything) {
                                return element["currentStyle"];
                            };
                        }

                        return function (element, style) {
                            return func(element, null)[style];
                        };
                    }();
                }
            };
        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\filters.js
(function () {
    'use strict';
    angular.module('myApp.filters', [])
        .filter('managers', function () {
            return function (items) {
                if (items != null) {
                    var arrayToReturn = [];
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].PositionId === 4) {
                            arrayToReturn.push(items[i]);
                        }
                    }
                    return arrayToReturn;
                }
            };
        })
        .filter('fedUsers', function () {
            return function (items) {
                if (items != null) {
                    var arrayToReturn = [];
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].AffiliationId == '1') {
                            arrayToReturn.push(items[i]);
                        }
                    }
                    return arrayToReturn;
                }
            };
        })
        .filter('nonFedUsers', function () {
            return function (items) {
                if (items != null) {
                    var arrayToReturn = [];
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].AffiliationId != '1' && items[i].AffiliationId != '19' && items[i].AffiliationId != '20') {
                            arrayToReturn.push(items[i]);
                        }
                    }
                    return arrayToReturn;
                }
            };
        })
        .filter('unique', function () {

            return function (items, filterOn) {

                if (filterOn === false) {
                    return items;
                }

                if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
                    var hashCheck = {}, newItems = [];

                    var extractValueToCompare = function (item) {
                        if (angular.isObject(item) && angular.isString(filterOn)) {
                            return item[filterOn];
                        } else {
                            return item;
                        }
                    };

                    angular.forEach(items, function (item) {
                        var valueToCheck, isDuplicate = false;

                        for (var i = 0; i < newItems.length; i++) {
                            if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                                isDuplicate = true;
                                break;
                            }
                        }
                        if (!isDuplicate) {
                            newItems.push(item);
                        }

                    });
                    items = newItems;
                }
                return items;
            };
        })
        .filter("fromMSDate", function () {
            return function (jsonDate) {
                if (jsonDate !== null) {
                    var D, dtime, T, tz, off,
                    dobj = jsonDate.match(/(\d+)|([+-])|(\d{4})/g);
                    T = parseInt(dobj[0]);
                    tz = dobj[1];
                    off = dobj[2];
                    if (off) {
                        off = (parseInt(off.substring(0, 2), 10) * 3600000) +
                              (parseInt(off.substring(2), 10) * 60000);
                        if (tz == '-') off *= -1;
                    }
                    else off = 0;
                    return new Date(T + off).toISOString();
                }
            }
        })
        .filter('htmlToPlaintext', function () {
            return function (text) {
                return String(text).replace(/<[^>]+>/gm, '');
            }
        })
        .filter("fromMSShortDate", function () {
            return function (jsonDate) {
                if (jsonDate !== null) {
                    var D, dtime, T, tz, off,
                    dobj = jsonDate.match(/(\d+)|([+-])|(\d{4})/g);
                    T = parseInt(dobj[0]);
                    tz = dobj[1];
                    off = dobj[2];
                    if (off) {
                        off = (parseInt(off.substring(0, 2), 10) * 3600000) +
                              (parseInt(off.substring(2), 10) * 60000);
                        if (tz == '-') off *= -1;
                    }
                    else off = 0;
                    var d = new Date(T + off);
                    return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
                }
            }
        });
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\services.js

(function () {
    'use strict';
    angular.module('myApp.services', [])
        .factory('logger', ['$log', function ($log) {
            var service = {
                getLogFn: getLogFn,
                log: log,
                logError: logError,
                logSuccess: logSuccess,
                logWarning: logWarning
            };
            function getLogFn(moduleId, fnName) {
                fnName = fnName || 'log';
                switch (fnName.toLowerCase()) { // convert aliases
                    case 'success':
                        fnName = 'logSuccess'; break;
                    case 'error':
                        fnName = 'logError'; break;
                    case 'warn':
                        fnName = 'logWarning'; break;
                    case 'warning':
                        fnName = 'logWarning'; break;
                }

                var logFn = service[fnName] || service.log;
                return function (msg, data, showToast) {
                    logFn(msg, data, moduleId, (showToast === undefined) ? true : showToast);
                };
            }

            function log(message, data, source, showToast) {
                logIt(message, data, source, showToast, 'info');
            }

            function logWarning(message, data, source, showToast) {
                logIt(message, data, source, showToast, 'warning');
            }

            function logSuccess(message, data, source, showToast) {
                logIt(message, data, source, showToast, 'success');
            }

            function logError(message, data, source, showToast) {
                logIt(message, data, source, showToast, 'error');
            }

            function logIt(message, data, source, showToast, toastType) {
                var write = (toastType === 'error') ? $log.error : $log.log;
                source = source ? '[' + source + '] ' : '';
                write(source, message, data);
                if (showToast) {
                    if (toastType === 'error') {
                        toastr.error(message);
                    } else if (toastType === 'warning') {
                        toastr.warning(message);
                    } else if (toastType === 'success') {
                        toastr.success(message);
                    } else {
                        toastr.info(message);
                    }
                }
            }
            return service;

        }])
        .factory('_', function () {
            return window._;
        })
        .factory('DataContext', ['$http', '$timeout', '$location', '$q', 'localStorageService', '$window', function ($http, $timeout, $location, $q, localStorageService, $window) {
            return {
                allUsers: function () {
                    var allUsersPromise = $http.get(Intranet.Util.Global.serviceURL() + 'users')
                        .error(function (AllUsersresponse, AllUsersstatus) {

                        })
                        .success(function (AllUsersresponse, AllUsersstatus) {

                        })
                        .then(function (AllUsersresponse, AllUsersstatus) {
                            return AllUsersresponse.data;
                        });
                    return allUsersPromise;
                }
                , currentUserInfo: function () {
                    var currentUserpromise = $http.get(Intranet.Util.Global.serviceURL() + 'currentUser')
                        .error(function (currentUserresponse, currentUserstatus) { })
                        .success(function (currentUserresponse, currentUserstatus) { })
                        .then(function (currentUserresponse, currentUserstatus) {
                            return currentUserresponse.data;
                        });
                    return currentUserpromise;
                }
                , allUsersMinified: function () {
                    var allUsersMinPromise = $http.get(Intranet.Util.Global.serviceURL() + 'usersMin')
                        .error(function (AllUsersMinresponse, AllUsersMinStatus) {

                        })
                        .success(function (AllUsersMinresponse, AllUsersMinStatus) {

                        })
                        .then(function (AllUsersMinresponse, AllUsersMinStatus) {
                            return AllUsersMinresponse.data;
                        });
                    return allUsersMinPromise;
                }
                , empPicker: function () {
                    var empPickerPromise = $http.get(Intranet.Util.Global.serviceURL() + 'EmpPickerData')
                        .error(function (EmpPickerresponse, EmpPickerstatus) {

                        })
                        .success(function (EmpPickerresponse, EmpPickerstatus) {

                        })
                        .then(function (EmpPickerresponse, EmpPickerstatus) {
                            return EmpPickerresponse.data;
                        });
                    return empPickerPromise;
                }
                , officePicker: function () {
                    var officePickerpromise = $http.get(Intranet.Util.Global.serviceURL() + 'OfficePickerData')
                        .error(function (OfficePickerresponse, OfficePickerstatus) {

                        })
                        .success(function (OfficePickerresponse, OfficePickerstatus) {

                        })
                        .then(function (OfficePickerresponse, OfficePickerstatus) {
                            return OfficePickerresponse.data;
                        });
                    return officePickerpromise;
                }
                , travelPicker: function () {
                    var travelPickerpromise = $http.get(Intranet.Util.Global.serviceURL() + 'TravelPickerData')
                        .error(function (TravelPickerresponse, TravelPickerstatus) {

                        })
                        .success(function (TravelPickerresponse, TravelPickerstatus) {

                        })
                        .then(function (TravelPickerresponse, TravelPickerstatus) {
                            return TravelPickerresponse.data;
                        });
                    return travelPickerpromise;
                }
                , allAnonymousFeedback: function () {
                    var myPromise = $http.get(Intranet.Util.Global.serviceURL() + 'TravelPickerData')
                       .error(function (response, status) { })
                       .success(function (response, status) { })
                       .then(function (response, status) { return response.data; });
                    return myPromise;
                }
                , allFedRequest: function () {
                    var fedTravelReqs = $http.get(Intranet.Util.Global.serviceURL() + 'FederalItems')
                        .error(function (fedResponse, fedStatus) {

                        })
                        .success(function (fedResponse, fedStatus) {

                        })
                        .then(function (fedResponse, fedStatus) {
                            return fedResponse.data;
                        });
                    return fedTravelReqs;
                }
                , FederalRequestByID: function (FederalTravelRequestID) {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'FederalItem' + '/' + FederalTravelRequestID)
                      .error(function (response, status) { })
                      .success(function (response, status) { })
                      .then(function (response, status) {
                          return response.data
                      });
                    return promise;
                }
                , allContractorRequest: function () {
                    var conTravelReqs = $http.get(Intranet.Util.Global.serviceURL() + 'ContractorItems')
                        .error(function (conResponse, conStatus) {

                        })
                        .success(function (conResponse, conStatus) {

                        })
                        .then(function (conResponse, conStatus) {
                            return conResponse.data;
                        });
                    return conTravelReqs;
                }
                , ContractorRequest: function (ContractorTravelRequestID) {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'ContractorItem' + '/' + ContractorTravelRequestID)
                        .error(function (response, status) { })
                        .success(function (response, status) { })
                        .then(function (response, status) {
                            return response.data
                        });
                    return promise;
                }
                , ConferenceList: function () {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'Conferences')
                       .error(function (response, status) {

                       })
                       .success(function (response, status) {

                       })
                       .then(function (response, status) {
                           return response.data;
                       });
                    return promise;
                }
                , ProjectList: function () {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'ProjectModels')
                       .error(function (response, status) {

                       })
                       .success(function (response, status) {

                       })
                       .then(function (response, status) {
                           return response.data;
                       });
                    return promise;
                }
                , post: function (config) {
                    var d = $q.defer();
                    try {
                        d.promise = $http(config)
                            .success(function (data, status, headers, config) {
                                d.resolve();
                            })
                            .error(function (data, status, headers, config) {
                                var _errMsg = data.ErrorInfo;
                                d.reject();
                                toastr.error(_errMsg, "Exception!!");
                            });
                        return d.promise;
                    }
                    catch (e) {
                        console.log(e);
                        toastr.error(e.message, "Exception!!");
                    }
                }
                , postWithOutRedirect: function (config, successMsg, errorMsg) {
                    try {
                        var promisePost = $http(config)
                              .success(function (data, status, headers, config) { })
                              .error(function (data, status) {
                                  toastr.error(errorMsg, "ERROR!!");
                              })
                              .then(function () {
                                  toastr.success(successMsg, "Success");
                              });
                        return promisePost;
                    }
                    catch (e) {
                        toastr.error(e.message, "Exception!!");
                    }
                }
                , queryStringData: function (queryStringID) {
                    return $location.search()[queryStringID];
                }
                , spProperties: function () {
                    return $http({
                        method: 'GET',
                        url: Intranet.Util.Global.rootSiteURL() + "_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=PictureUrl,AccountName,displayName,email",
                        headers: { "Accept": "application/json; odata=verbose" }
                    })
                        .success(function (response, status) { })
                        .error(function (response, status) { })
                        .then(function (response, status) { return response.data; });
                }
                , timeOut: function () {
                    $timeout(function () {
                        window.history.back();
                    }, 1000);
                }
                , successTimeOut: function (successMsg) {
                    toastr.success(successMsg, "Success");
                    $timeout(function () {
                        window.history.back();
                    }, 1000);
                }
                , redirectTo: function (newUrl) {
                    // scope.$apply(function () {
                    $location.path(newUrl);
                    // });
                }
                , TravelCodeList: function () {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'TravelCodeModels')
                      .error(function (response, status) {

                      })
                      .success(function (response, status) {

                      })
                      .then(function (response, status) {
                          return response.data;
                      });
                    return promise;
                }
                , EmpByGuid: function (empGuid) {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'userByGuid' + '/' + empGuid)
                        .error(function (response, status) { })
                        .success(function (response, status) { })
                        .then(function (response, status) {
                            return response.data
                        });
                    return promise;
                }
                , EmpFilters: function () {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'EmpFilters')
                        .error(function (response, status) { })
                        .success(function (response, status) { })
                        .then(function (response, status) {
                            return response.data
                        });
                    return promise;
                }
                , GetLocalStorage: function (key) {
                    return localStorageService.get(key);
                }
                , SetLocalStorage: function (key, data) {
                    localStorageService.set(key, data);
                }
                , RemoveLocalStorage: function (key) {
                    localStorageService.remove(key);
                }
                , ClearAllLocalStorage: function () {
                    localStorageService.clearAll();
                }
                , windowOpenNew: function (newURL) {
                    $window.open(newURL);
                }
                , GetAllVouchersOfPendingExpense: function () {
                    var promise = $http.get(Intranet.Util.Global.serviceURL() + 'GetAllVouchersOfPendingExpense')
                       .error(function (response, status) { })
                       .success(function (response, status) { })
                       .then(function (response, status) {
                           return response.data
                       });
                    return promise;
                }
                , SPFormDigest: _spFormDigest
                , SpUploadDocument: _SpUploadDocument
                , GetFileBuffer: _getFileBuffer
                , SPDocUpdateProperties: _spDocUpdateProperties
                , SPDocGetProperties: _spDocGetProperties

            };

            function _spFormDigest() {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.rootSiteURL() + '_api/contextinfo',
                    headers: { "Accept": "application/json; odata=verbose" }
                };

                var d = $q.defer();

                try {
                    d.promise = $http(configData)
                        .success(function (data, status, headers, config) {
                            d.resolve();
                        })
                        .error(function (data, status, headers, config) {
                            var _errMsg = data.ErrorInfo;
                            d.reject();
                            toastr.error(_errMsg, "Exception!!");
                        });
                    return d.promise;
                }

                catch (e) {
                    console.log(e);
                    toastr.error(e.message, "Exception!!");
                }
            }

            function _SpUploadDocument(serverRelativeUrl, filename, arrayBuffer, requestDigest) {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.rootSiteURL() + "_api/web/GetFolderByServerRelativeUrl('" + serverRelativeUrl + "')/Files" +
                    "/Add(url='" + filename + "', overwrite=true)",
                    data: arrayBuffer,
                    headers: { "accept": "application/json;odata=verbose", "X-RequestDigest": requestDigest }
                };

                var d = $q.defer();

                try {

                    d.promise = $http(configData)
                        .success(function (data, status, headers, config) {
                            d.resolve();
                        })
                        .error(function (data, status, headers, config) {
                            var _errMsg = data.ErrorInfo;
                            d.reject();
                            toastr.error(_errMsg, "Exception!!");
                        });
                    return d.promise;

                }
                catch (e) {
                    console.log(e);
                    toastr.error(e.message, "Exception!!");
                }
            }

            function _getFileBuffer(file) {
                var deferred = $q.defer();
                var reader = new FileReader();
                reader.onload = function (e) {
                    deferred.resolve(e.target.result);
                }
                reader.onerror = function (e) {
                    deferred.reject(e.target.error);
                }
                reader.readAsArrayBuffer(file);
                return deferred.promise;
            }

            function _spDocUpdateProperties(item, itemData, requestDigest) {

                var configData = {
                    method: 'POST',
                    url: item.__metadata.uri,
                    headers: {
                        Accept: "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose",
                        "X-RequestDigest": requestDigest,
                        "IF-MATCH": item.__metadata.etag,
                        "X-Http-Method": "MERGE"
                    },
                    data: JSON.stringify(itemData)
                };

                var d = $q.defer();

                try {

                    d.promise = $http(configData)
                        .success(function (data, status, headers, config) {
                            d.resolve();
                        })
                        .error(function (data, status, headers, config) {
                            var _errMsg = data.ErrorInfo;
                            d.reject();
                            toastr.error(_errMsg, "Exception!!");
                        });
                    return d.promise;
                }
                catch (e) {
                    console.log(e);
                    toastr.error(e.message, "Exception!!");
                }
            }

            function _spDocGetProperties(file) {

                var configData = {
                    method: 'GET',
                    url: file.ListItemAllFields.__deferred.uri,
                    headers: { Accept: "application/json;odata=verbose" }
                };

                var d = $q.defer();

                try {
                    d.promise = $http(configData)
                        .success(function (data, status, headers, config) {
                            d.resolve();
                        })
                        .error(function (data, status, headers, config) {
                            var _errMsg = data.ErrorInfo;
                            d.reject();
                            toastr.error(_errMsg, "Exception!!");
                        });
                    return d.promise;
                }
                catch (e) {
                    console.log(e);
                    toastr.error(e.message, "Exception!!");
                }
            }

        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\main_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('main_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            Init();
            function Init() {
                DataContext.spProperties().then(function (data) {
                    $scope.userData = data.d;
                });
            };
        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\homeIndex_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('homeIndex_Crtl', ['$scope', function ($scope) {
            $scope.imgUrls = { 'Travel': 'travel.png', 'Facilities': 'facilities.png', 'Admin': 'admin.png', 'Communications': 'communications.png', 'IT': 'it.png', 'Grants': 'grants.png', 'Acquisition': 'acquisition.png' };
        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\adminEmployeeDetails_Ctrl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';
    Intranet.Util.Global.Admin.controller('adminEmployeeDetails_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {
        $scope.vModel = {};

        Init();

        function Init() {
            var empGuid = DataContext.queryStringData('ID');
            DataContext.EmpByGuid(empGuid).then(function (data) { $scope.vModel = data; });
        };

        $scope.goBack = function () {
            DataContext.redirectTo('/admin/emp/locator');
        };

    }]);
})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\adminEmployeeDetailsUpdate_Ctrl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin.controller('adminEmployeeDetailsUpdate_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {
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

    }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\adminEmployeeList_Ctrl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin.controller('adminEmployeeList_Ctrl', ['$scope', 'DataContext', function ($scope, DataContext) {

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

    }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeChangeOfName_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
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
        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeInformationUpdate_Ctrl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
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
        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeLocator_Crtl.js
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
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeNew_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('employeeNew_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {

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

        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeRelocation_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';
    Intranet.Util.Global.Admin
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

        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeSeparation_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';
    Intranet.Util.Global.Admin
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

        }]);
})();
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeSuggestionBox_Crtl.js
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
///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\employeeSuggestionResults_Crtl.js
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


///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\FLETCVisitorPass_Ctrl.js
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


///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\foreignVisitorPass_Ctrl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin
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

        }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\admin\TBGAwards_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Admin.controller('TBGAwards_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
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

    }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\adminConference_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
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
        }]);
})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\adminProjects_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
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

        }]);
})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\adminTravelCodes_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
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


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\contractorApproval_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
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
        }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\contractorTravelRequest_Crtl.js
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


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\contractorTravelSummary_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
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

        }]);
})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\federalExpense_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('federalExpense_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {

            $scope.travelExpenseFrom = {};
            $scope.travelExpenseFrom.FederalTravelRequest = {};
            $scope.travelExpenseFrom.Submitted = 'false';
            $scope.toastrMsg = '';
            $scope.allVouchers = [];
            $scope.itemDataPropeties = {};
            $scope.spFormDigest = '';
            $scope.fileMetadata = { "__metadata": { type: "SP.Data.TravelExpenseReceiptItem" } };
            $scope.invalidFileType = false;


            Init();

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

            $scope.filesChanged = function (elm) {
                $scope.travelExpensefiles = elm.files;

                if (elm.files.length > 0 && elm.files[0].type !== 'application/pdf') {
                    $scope.invalidFileType = true;
                }

                $scope.$apply();
            };

            function CallWebService() {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelExpense',
                    data: JSON.stringify($scope.travelExpenseFrom),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };



                if ($scope.travelExpensefiles.length > 0 && !$scope.invalidFileType) {
                    var _travelerName = '', _travelerGUID = '';
                    if ($scope.travelExpenseFrom.FederalTravelRequest.FederalTravelerName) {
                        _travelerName = $scope.travelExpenseFrom.FederalTravelRequest.FederalTravelerName;
                        _travelerGUID = $scope.travelExpenseFrom.FederalTravelRequest.EmployeeGUID;
                    }
                    if ($scope.travelExpenseFrom.FederalTravelRequest.NonFederalTravelerName) {
                        _travelerName = $scope.travelExpenseFrom.FederalTravelRequest.NonFederalTravelerName;
                        _travelerGUID = $scope.travelExpenseFrom.FederalTravelRequest.NonFederalTravelerID;
                    }
                    $scope.fileMetadata = {
                        "__metadata": { type: "SP.Data.TravelExpenseReceiptItem" }
                        , 'TravelerName': _travelerName
                        , 'TravelFormGUID': $scope.travelExpenseFrom.FederalTravelRequestGUID
                        , 'EmployeeGUID': _travelerGUID
                        , 'ExpenseFormID': $scope.travelExpenseFrom.FormID
                    };
                    DataContext.post(configData).then(function (data) {
                        DataContext.successTimeOut($scope.toastrMsg);
                    });

                    DataContext.SPFormDigest().then(function (response) {
                        $scope.spFormDigest = response.data.d.GetContextWebInformation.FormDigestValue;

                        DataContext.GetFileBuffer($scope.travelExpensefiles[0]).then(function (arrayBuffer) {

                            DataContext.SpUploadDocument(Intranet.Util.Global.TravelExpenseReceipt, $scope.travelExpensefiles[0].name, arrayBuffer, $scope.spFormDigest).then(function (response) {

                                DataContext.SPDocGetProperties(response.data.d).then(function (response) {

                                    $scope.itemDataPropeties = response.data.d;

                                    DataContext.SPFormDigest().then(function (response) {
                                        $scope.spFormDigest = response.data.d.GetContextWebInformation.FormDigestValue;

                                        DataContext.SPDocUpdateProperties($scope.itemDataPropeties, $scope.fileMetadata, $scope.spFormDigest)
                                            .then(function (response) {

                                            });
                                    });
                                });
                            });

                        });
                    });

                }
                else {
                    console.log('cannot upload the file, please choose valid PDF file.');
                }

            }

        }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\federalExpenseSummary_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('federalExpenseSummary_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.tableData = [];

            Init();

            function Init() {

            };

        }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\federalProgManagerApproval_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
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

        }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\federalTravelRequest_Crtl.js
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


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\federalTravelSummary_Crtl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('federalTravelSummary_Crtl', ['$scope', '$modal', '_', 'DataContext', function ($scope, $modal, _, DataContext) {
            $scope.initialData = [];
            $scope.completeData = [];
            $scope.countPending = 0;
            $scope.countPMApproval = 0;
            $scope.countTANotComplete = 0;
            $scope.countTACompleted = 0;
            $scope.countTADenied = 0;
            $scope.VoucherInProcess = 0;

            Init();
            function Init() {
                DataContext.allFedRequest().then(function (data) {
                    populate(data);
                });
            }

            $scope.btnProcessTA = function (_item) {

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
                    if (item != null && item.ElementData.Status == 'TA In Process') {
                        $scope.VoucherInProcess += 1;
                    }
                    $scope.initialData.push(item);
                });
            }

        }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\fedTAModalInstance_Ctrl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('fedTAModalInstance_Ctrl', ['$scope', '$modalInstance', 'item', function ($scope, $modalInstance, item) {

            $scope.selectedItem = item;
            $scope.additionalInfo = {};
            $scope.toastrMsg = '';

            if (!$scope.selectedItem.FormData.AuthorizationInProcessDate) {
                $scope.selectedItem.FormData.AuthorizationInProcessDate = Intranet.Util.Global.currentDate;
            }

            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.completeTA = function () {
                $scope.EventType = 'complete';
                $scope.toastrMsg = 'Travel Authorization completed';
                CallWS();
                $modalInstance.dismiss('cancel');
            };

            $scope.cancelTA = function () {
                $scope.EventType = 'cancel';
                $scope.toastrMsg = 'Travel Authorization canceled';
                CallWS();
                $modalInstance.dismiss('cancel');
            };

            $scope.saveTA = function () {
                $scope.EventType = 'save';
                $scope.toastrMsg = 'Travel Authorization saved';
                CallWS();
                $modalInstance.dismiss('cancel');

            };

            function CallWS() {

                var configData = {
                    method: 'POST',
                    url: Intranet.Util.Global.serviceURL() + 'TravelFederalUpdate',
                    data: JSON.stringify($scope.selectedItem),
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                };

                DataContext.post(configData).then(function (data) {
                    toastr.success($scope.toastrMsg, "Success");
                });

            }

           

        }]);


})();


///#source 1 1 C:\Intranet\Layouts\Intranet\app\travel\popupModalInstanceCtrl.js
/// <reference path="../js/angular.min.js" />
(function () {
    'use strict';

    Intranet.Util.Global.Travel
        .controller('popupModalInstanceCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
            $scope.close = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
})();


