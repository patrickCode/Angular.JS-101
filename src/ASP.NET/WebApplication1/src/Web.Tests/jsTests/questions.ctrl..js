/// <reference path="../../webapplication1/wwwroot/lib/angular/angular.min.js" />
/// <reference path="../../webapplication1/wwwroot/lib/qunit/qunit/qunit.js" />

/// <reference path="../../webapplication1/wwwroot/js/app.js" />
/// <reference path="../../webapplication1/wwwroot/js/questions/questions.ctrl.js" />

var injector;
var fakeScope;
var fakeLocationService;
var controllerService;
var questionsCtrl;
var fakeQuestionsData;
var qService;

var loggedPath;

QUnit.module("Questions Controller Tests", {
    setup: function () {
        angular.module("common")
            .factory("$location", function () {
                return {
                    path: function (url) {
                        loggedPath = url;
                    }
                }
            });
        injector = angular.injector(['ng', 'question', 'common']);
        qService = injector.get("$q");
        controllerService = injector.get('$controller');
        fakeScope = injector.get("$rootScope").$new();
        fakeLocationService = injector.get("$location");

    }, teardown: function () {
        injector = null;
        controllerService = null;
        fakeScope = null;
        fakeLocationService = null;
    }
});

QUnit.test("Load Controller", function () {
    var mockQuestions = [
        { value: "Q1" },
        { value: "Q2" }
    ];
    fakeQuestionsData = createMockQuestionService(mockQuestions);

    createController();
    fakeScope.$apply();

    fakeScope.getQuestions();
    fakeScope.$apply();

    deepEqual(mockQuestions, fakeScope.questions)
});

var createMockQuestionService = function (mockQuestions) {
    return {
        getQuestions: function () {
            var deferred = qService.defer();
            deferred.resolve(mockQuestions);
            return deferred.promise;
        }
    }
}

var createController = function () {
    controllerService("questionController", {
        $scope: fakeScope,
        $location: fakeLocationService,
        questionsData: fakeQuestionsData
    });
}