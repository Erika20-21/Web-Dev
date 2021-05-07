 var mainApp = angular.module("mainApp", []);
         
         mainApp.controller('SController', function($scope) {
            $scope.art = "";
            $scope.psy="";
            $scope.phi = "";
            $scope.soc="";
            $scope.com = "";
            $scope.grade = "";
    
            $scope.student = {
               firstName: "",
               midName: "",  
               lastName: "", 

               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " +  studentObject.midName + " " + studentObject.lastName; 
              }             
            };
         });


