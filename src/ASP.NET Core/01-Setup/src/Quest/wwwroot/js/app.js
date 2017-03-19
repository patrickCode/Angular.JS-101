var app = angular.module('quest', []);

var questionData = function ($q, $http) {
    getPublicQuestions = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://questhunt.azurewebsites.net/api/questions',
        }).then(function (response) {
            deferred.resolve(response.data);
        }, function (error) {
            deferred.reject(error)
        });

        return deferred.promise;
    }
    return { getPublicQuestions: getPublicQuestions }
}
app.factory('questiondata', questionData);
app.controller('questionlistctrl', function ($scope, questiondata) {
    $scope.paneltitle = "My Questions";
    $scope.questions = [];
    $scope.questionheader = "Question";
    $scope.questiontypeheader = "Question Type";
    $scope.answertypeheader = "Answer Type";
    $scope.answerheader = "Answer";
    $scope.addeddateheader = "Added On";

    questiondata.getPublicQuestions().then(function (response) {
        $scope.totalCount = response.length;
        $scope.questions = response;
    });

});