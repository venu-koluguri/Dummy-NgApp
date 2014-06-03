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