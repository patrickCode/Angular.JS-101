
var app = angular.module('quest', []);


app.controller('questionlistctrl', function ($scope) {
    $scope.paneltitle = "My Questions";
    $scope.questions = [
        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective" ,createdOn:Date.now() },
        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() },
        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() },
        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() } ];
    $scope.questionheader = "Question";
    $scope.questiontypeheader = "Question Type";
    $scope.answertypeheader = "Answer Type";
    $scope.answerheader = "Answer";
    $scope.addeddateheader = "Added On";
    


});



