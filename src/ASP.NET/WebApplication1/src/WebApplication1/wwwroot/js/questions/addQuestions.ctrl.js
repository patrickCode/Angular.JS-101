(function (module) {

    var addQuestionCtrl = function ($scope) {
        $scope.question = {
            value: "",
            answer: "",
            url: ""
        }

        $scope.submitQuestion = function () {
            console.log($scope.question);
        }
    }

    module.controller("addQuestionCtrl", addQuestionCtrl);

}(angular.module("question")))