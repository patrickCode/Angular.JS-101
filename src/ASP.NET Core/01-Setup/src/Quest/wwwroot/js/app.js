var app = angular.module('quest', []);
//service
//app.service('questionData', function () {
//    this.getPublicQuestions = function () {
//        return [
//        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
//        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() },
//        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
//        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() },
//        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
//        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() }];
//    };

//})

//factory
app.factory('questionData', function () {
    getPublicQuestions = function () {
        return [
        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() },
        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() },
        { question: "Name a few built-in providers in Angular.JS", questiontype: "text", answer: "$http", answertype: "subjective", createdOn: Date.now() },
        { question: "which of the following is not a built-in angular directive", questiontype: "text", answer: "ng-for", answertype: "Multi choice", createdOn: Date.now() }];
    };
    return { getPublicQuestions: getPublicQuestions };
})

//app.config(function (questionDataProvider) {
//    questionDataProvider.isDebugModeEnabled(true);
//})
//app.provider('questionData', function () {
//    var isDebugMode = true;
//    getPublicQuestions = function () {
//        if (isDebugMode) { alert("Fetching From Provider"); }
//        return [{
//            question: "Name a few built-in providers in Angular.JS",
//            questiontype: "text",
//            answer: "$http",
//            answertype: "subjective", createdOn: Date.now()
//        }]
//    }
//    return {
//        "isDebugModeEnabled": function (v) { isDebugMode = v; },
//        "$get": function () {
//            return {
//                getPublicQuestions: getPublicQuestions
//            }
//        }
//    }
//})
app.controller('questionlistctrl', function ($scope, questionData) {
    $scope.paneltitle = "My Questions";
    $scope.questions = questionData.getPublicQuestions();
    $scope.questionheader = "Question";
    $scope.questiontypeheader = "Question Type";
    $scope.answertypeheader = "Answer Type";
    $scope.answerheader = "Answer";
    $scope.addeddateheader = "Added On";
});