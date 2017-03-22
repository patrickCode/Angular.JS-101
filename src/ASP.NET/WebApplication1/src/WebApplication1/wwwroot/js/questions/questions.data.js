(function (module) {

    var questionsData = function ($q, $http) {
        var getQuestions = function () {
            var url = "http://questhunt.azurewebsites.net/api/questions";
            var deferred = $q.defer();

            $http.get(url)
                .then(function (response) {
                    deferred.resolve(response.data);
                });
            return deferred.promise;
        }

        var getQuestionDetails = function (id) {
            var deferred = $q.defer();
            deferred.resolve({ value: "test question" });
            return deferred.promise;
        }

        return {
            getQuestions: getQuestions,
            getQuestionDetails: getQuestionDetails
        }
    }

    module.factory("questionsData", questionsData);

}(angular.module("question")))