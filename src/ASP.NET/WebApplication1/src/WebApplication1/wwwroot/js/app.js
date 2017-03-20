var app = angular.module("app", []);

app.controller("appCtrl", function ($scope) {
    $scope.pageTitle = "My Angular Application1";
});

app.controller("appCtrl2", function ($scope) {
    $scope.pageTitle = "My Angular Application2";
})