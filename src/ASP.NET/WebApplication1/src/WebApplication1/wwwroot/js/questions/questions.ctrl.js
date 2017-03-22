(function (module) {
    var questionsController = function ($scope, $location, questionsData) {
        $scope.getQuestions = function () {
            questionsData.getQuestions()
                .then(function (data) {
                    $scope.questions = data;
                })
                .catch(function (error) {
                    alert(error);
                });
        }

        $scope.addQuestion = function () {
            $location.path("/root/addQuestion");
        }

    }
    module.controller("questionController", questionsController);
}(angular.module("question")))