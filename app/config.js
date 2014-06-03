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
