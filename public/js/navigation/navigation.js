(function () {
    var app = angular.module('pr2014', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'skills', 'feedbacks', 'achievements']);
    var partials = {
        home: '/js/navigation/home.html',
        achievements: '/js/partials/achievements.html',
        feedbacks: '/js/partials/feedbacks.html',
        skills: '/js/partials/skills.html'
    };

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: partials.home
                }).
                when('/skills', {
                    templateUrl: 'js/skills/list.html',
                    controller: 'SkillController'
                }).
                when('/achievements', {
                    templateUrl: 'js/achievements/list.html',
                    controller: 'AchievementController'
                }).
                when('/feedbacks', {
                    templateUrl: 'js/feedbacks/list.html',
                    controller: 'FeedbackController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

    var menuItems = [
        {
            title: 'Skills',
            route: '/skills'
        },
        {
            title: 'Feedbacks',
            route: '/feedbacks'
        },
        {
            title: 'Achievements',
            route: '/achievements'
        }
    ];

    app.controller('NavigationController', ['allSkills', function (allSkills) {
        this.menuItems = menuItems;
        console.log(allSkills);
    }]);

})();
