var app = angular.module('quest', []);
app.controller('questionlistctrl', function ($scope) {
    $scope.paneltitle = "My Questions";
    $scope.questionheader = "Question";
    $scope.questiontypeheader = "Question Type";
    $scope.answertypeheader = "Answer Type";
    $scope.answerheader = "Answer";
    $scope.addeddateheader = "Added On";
});