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