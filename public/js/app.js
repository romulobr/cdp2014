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
	        templateUrl: partials.skills,
	        controller: 'SkillController'
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


	var createSkillImprovement = function(category, technology, classification, before, after) {
		var values = {
			low : 25,
			'very low': 10,
			high: 80,
			'very high': 90,
			medium: 50
		};
		
		return {
			category: category,
			technology: technology,
			classification: classification,
			before: values[before],
			after: values[after]
		};
	};

	var skills = [
		createSkillImprovement('coding','Android','P2', 'low', 'medium'),
		createSkillImprovement('coding','Java','P2', 'high', 'very high'),
		createSkillImprovement('coding','Ruby','P2', 'medium', 'high'),
		createSkillImprovement('coding','C#','P2', 'low', 'medium'),
		createSkillImprovement('coding','HTML5','P2', 'low', 'medium'),
		createSkillImprovement('coding','Javascript','P2', 'medium', 'high'),
		createSkillImprovement('coding','Mobile Web','P2', 'low', 'high'),
		createSkillImprovement('coding','NoSQL','P2', 'medium', 'high'),
		createSkillImprovement('coding','Android','P2', 'low', 'medium'),
		createSkillImprovement('coding','Jenkins','P2', 'low', 'medium'),

		createSkillImprovement('testing','Capybara','P2', 'none', 'low'),
		createSkillImprovement('testing','Web Driver','P2', 'low', 'medium'),
		createSkillImprovement('testing','Testing strategies','P2', 'medium', 'high'),
		
		createSkillImprovement('soft','Communication','P2', 'low', 'medium'),
		createSkillImprovement('soft','Facilitation','P2', 'low', 'medium'),
		createSkillImprovement('soft','Influence','P2', 'low', 'medium'),
		createSkillImprovement('soft','Negotiation','P2', 'low', 'medium'),
		createSkillImprovement('soft','Planning','P2', 'low', 'medium'),
		createSkillImprovement('soft','Presenting','P2', 'low', 'medium'),
		createSkillImprovement('soft','Problem Solving','P2', 'low', 'medium'),
		createSkillImprovement('soft','Questioning','P2', 'low', 'medium'),
		createSkillImprovement('soft','Synthesis','P2', 'low', 'medium'),
		createSkillImprovement('soft','Teaching','P2', 'low', 'medium'),
		createSkillImprovement('soft','Feedback & Coaching','P2', 'low', 'high'),

		createSkillImprovement('ux','UI Development','P2', 'very-low', 'medium'),
		createSkillImprovement('ux','Usability Research','P2', 'very-low', 'medium'),
		createSkillImprovement('ux','Usability Testing','P2', 'very-low', 'medium'),
		createSkillImprovement('ux','Visual Design','P2', 'very-low', 'low'),
		
	];

	app.controller('NavigationController', function (){
		this.menuItems = menuItems;
	});

	app.controller('SkillController', function(){
		this.skills = skills;
	});
})();
