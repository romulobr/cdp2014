(function () {
    var app = angular.module('pr2015', ['ngRoute','achievements']);
    var partials = {
        achievements: '/js/achievements/achievements.html'        
    };

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: partials.achievements
                }).                                
                when('/achievements', {
                    templateUrl: partials.achievements,
                    controller: 'AchievementsController'
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