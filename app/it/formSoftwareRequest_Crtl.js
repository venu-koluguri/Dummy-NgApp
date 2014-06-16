(function () {
    'use strict';

    Intranet.Util.Global.Admin
        .controller('formSoftwareRequest_Crtl', ['$scope', 'DataContext', function ($scope, DataContext) {
            $scope.submitted = false;
            $scope.softwareRequest = {
                'softwares':{
                    'apps':[]
                },
                'Level':"level2"
            };
            $scope.level2Apps = [];
            $scope.level2Softwares = [
                "Adobe Photoshop",
                "Adobe Dreamweaver",
                "Adobe Illustrator",
                "ArcGIS",
                "Google Earth",
                "Ultra-Edit",
                "Exceed",
                "Microsoft Visio Pro (terminal services)",
                "Microsoft Project Pro (terminal services)",
                "Adobe Products",
                "Global Mapper",
                "Password Safe",
                "ERDAS Imagine",
                "Filezilla",
                "Microsoft Visual Studio",
                "SQL Server Management Studio",
                "PuTTY",
                "SnagIt",
                "Tomcat",
                "Subversion",
                "Tortoise SVN",
                "Visual SVN"
            ];
            $scope.softwareLevels = [
                {"Name":"Level 2: Existing,approved Software","value":"level2"},
                {"Name":"Level 3: specify Products","value":"level3"},
                {"Name":"Level 4: Freeware and Shareware","value":"level4"}
            ];
            Init();

            function Init() {

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
                                $scope.softwareRequest.RequestorInfo = $scope.allUsers[index];
                            }
                        }
                    });
               
                DataContext.empPicker().then(function (dataEmpPicker) {
                    $scope.Affiliations = dataEmpPicker.Affiliations;
                    $scope.LineOffices = dataEmpPicker.LineOffices;
                    $scope.Programs = dataEmpPicker.Programs;
                    $scope.Projects = dataEmpPicker.Projects;
                });
            };

            $scope.resetSoftwares = function(){
                $scope.oftwareRequest.softwares = {'apps':[]};
            }

            $scope.submitForm = function (isValid) {
                console.log($scope.softwareRequest)
                if (isValid) {
                    $scope.submitted = true;
                    var configData = {
                        method: 'POST',
                        url: Intranet.Util.Global.serviceURL() + 'ItSoftwareRequest',
                        data: angular.toJson($scope.softwareRequest),
                        headers: { 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json' }
                    };
                    //DataContext.post(configData, 'Name Change form request have submitted.', 'Request Failed');
                    DataContext.post(configData)
                        .then(function (data) {
                            DataContext.successTimeOut('software form request have submitted.');
                        });
                }
                else {
                    toastr.error("Please enter all required fields ", "ERROR!!");
                }
            };

            $scope.goBack = function () {
                DataContext.redirectTo('/it/');
            };
        }]);
})();