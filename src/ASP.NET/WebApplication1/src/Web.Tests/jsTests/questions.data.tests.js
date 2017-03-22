/// <reference path="../../webapplication1/wwwroot/lib/angular/angular.min.js" />
/// <reference path="../../webapplication1/wwwroot/lib/qunit/qunit/qunit.js" />
/// <reference path="../../webapplication1/wwwroot/lib/angular-mocks/angular-mocks.js" />

/// <reference path="../../webapplication1/wwwroot/js/app.js" />
/// <reference path="../../webapplication1/wwwroot/js/questions/questions.data.js" />

var injector;
var httpBackend;
var qService;
var questionsData;

QUnit.module("Questions Data Tests", {
    setup: function () {
        injector = angular.injector(['ng', 'ngMockE2E', 'question']);
        httpBackend = injector.get("$httpBackend");
        questionsData = injector.get("questionsData");
    }, teardown: function () {
        injector = null;
        httpBackend = null;
        questionsData = null;
    }
});

QUnit.test("Get Question Details", function () {

    questionsData.getQuestionDetails(1)
        .then(function (data) {
            ok(data != null);
            start();
        }, function (error) {
            ok(false, "Error was not expected!");
            start();
        });
    stop();
});

QUnit.test("Get Question Details", function () {
    var url = "http://questhunt.azurewebsites.net/api/questions";
    var expectedResponse = [
        { value: "Q1" },
        { value: "Q2" },
        { value: "Q3" }
    ];
    httpBackend.whenGET(url).respond(expectedResponse);

    questionsData.getQuestions()
        .then(function (data) {
            deepEqual(expectedResponse, data);
            start();
        }, function (error) {
            ok(false, "Test case wasn't supposed to fail");
            start();
        });
    stop();
});