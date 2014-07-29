(function() {
	var app = angular.module('pr2014', ['ngRoute','ngAnimate','skills']);
	var partials = {
		home: '/js/navigation/home.html',
		achievements: '/js/partials/achievements.html',
		feedbacks: '/js/partials/feedbacks.html',
		skills: '/js/partials/skills.html'
	};

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/', {
	        templateUrl: partials.home
	      }).
	      when('/skills', {
	        templateUrl: 'js/skills/list.html',
	        controller: 'SkillController'
	      }).
	      when('/achievements', {
	        templateUrl: 'js/achievements/list.html'
	      }).	      
	      when('/feedbacks', {
	        templateUrl: 'js/feedbacks/list.html'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
	  }]);

	var menuItems = [{
		title: 'Skills',
		route: '/skills'
	},
	{
		title: 'Achievements',
		route: '/achievements'
	},
	{
		title: 'Feedbacks',
		route: '/feedbacks'
	}];
	
	app.controller('NavigationController', ['allSkills', function (allSkills){
		this.menuItems = menuItems;
		console.log(allSkills);
	}]);

})();
