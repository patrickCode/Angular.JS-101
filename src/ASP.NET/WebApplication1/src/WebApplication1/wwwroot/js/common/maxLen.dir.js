(function (module) {

    var maxLenDir = function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attr, ngModel) {
                ngModel.$validators.maxLength = function (value) {
                    return value.length < 5;
                }
            }
        }
    }

    module.directive("maxLen", maxLenDir)

}(angular.module("common")))