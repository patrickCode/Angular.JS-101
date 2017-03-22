(function (module) {

    var levelShowDir = function () {
        return {
            restrict: "E/A",
            template: "<span>{{levelName}}</span>",
            scope: {
                levelNum: "@"
            },
            link: function (scope, element, attrs) {
                scope.levelName = "";
                if (scope.levelNum === "100") {
                    scope.levelName = "Basic";
                }
                if (scope.levelNum === "200") {
                    scope.levelName = "Amateur";
                }
                if (scope.levelNum === "300") {
                    scope.levelName = "Professional";
                }
                if (scope.levelNum === "400") {
                    scope.levelName = "Expert";
                }
            }
        };
    }

    module.directive("levelShow", levelShowDir);

}(angular.module("common")))