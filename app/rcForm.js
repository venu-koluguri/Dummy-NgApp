
var rcFormModule = angular.module('rcForm', []);

var rcSubmitDirective = rcSubmitDirective || null;
var rcVerifySetDirective = rcVerifySetDirective || null;

if (rcSubmitDirective) rcFormModule.directive(rcSubmitDirective);
if (rcVerifySetDirective) rcFormModule.directive(rcVerifySetDirective);