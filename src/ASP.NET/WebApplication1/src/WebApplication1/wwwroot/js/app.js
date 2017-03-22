angular.module("common", []);

angular.module("question", ["common"])

angular.module("app", ["question", "ui.router", "ngMessages", "common"])
    .config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when("/root", "/root/questions")
                .otherwise("/root/questions");

            $stateProvider
                .state("root", {
                    url: "/root",
                    templateUrl: "templates/root.html"
                    
                })
                    .state("questions", {
                        parent: "root",
                        url: "/questions",
                        templateUrl: "templates/questions.html",
                        controller: "questionController",
                        //requireADLogin: true
                    })
                    .state("addQuestion", {
                        parent: "root",
                        url: "/addQuestion",
                        templateUrl: "templates/addQuestion.html",
                        controller: "addQuestionCtrl",
                        //requireADLogin: true
                    })

            //var endpoints = {
            //    "questhunt.azurewebsites.net": "7f3b10af-0762-45dc-8b7e-c380ad852dc9"
            //};

            //adalAuthenticationServiceProvider.init({
            //    instance: 'https://login.microsoftonline.com/',
            //    tenant: 'microsoft.onmicrosoft.com',
            //    clientId: 'f83d7a66-ff13-4360-8ede-2dfe3bc73b74',
            //    cacheLocation: 'localStorage',
            //    endpoints: endpoints
            //}, $httpProvider);
        }
    ]);