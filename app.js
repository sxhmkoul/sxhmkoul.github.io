(function(){
    'use strict';

    angular.module("lunchApp",[])
    .controller("lunchAppController", lunchAppController);

    lunchAppController.$inject = ['$scope'];
    
    function lunchAppController($scope){
        $scope.lunchMenu = "";
        $scope.result = "";
        $scope.val = "";
        $scope.increment = 0;
        $scope.counter = 0;
        
        function activate(){
            setTimeout(function(){
                var imagex = document.getElementsbyClassName("load-delay");
            var imgOriginal = imagex.data('original');
            imagex.setAttribute('src', imgOriginal);
            }, 3000);
 
        }
        activate();
        
        $scope.clickBtn = function(){
            $scope.lunchChecker();
            $scope.validatorFun();
           }
        
        $scope.validateKey = function(){
           var len = $scope.lunchMenu.length;
           $scope.counter = len;
           $scope.validatorFun();
        }

        $scope.validatorFun = function(){
            if($scope.counter === 0){
                $scope.val = "Please enter a valid input!";
                $scope.result = "";
            } else $scope.val = "";
        }

        $scope.lunchChecker = function(){
            var menu = ($scope.lunchMenu).split(",");
            if(menu.length>3){
                $scope.result = "You ate too much!";
            } else $scope.result = "Enjoy!";

        }
    }
})();
