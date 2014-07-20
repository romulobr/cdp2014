(function() {
	var app = angular.module('pr2014', ['ngRoute']);
	var partials = {
		home: '/js/partials/home.html',
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
	        templateUrl: partials.skills
	      }).
	      when('/achievements', {
	        templateUrl: partials.achievements
	      }).	      
	      when('/feedbacks', {
	        templateUrl: partials.feedbacks
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

	app.controller('NavigationController', function (){
		this.menuItems = menuItems;
	});
})();
