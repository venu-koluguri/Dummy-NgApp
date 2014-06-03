
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