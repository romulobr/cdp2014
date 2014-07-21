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
			high: 70,
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
		createSkillImprovement('Coding','Android','P2', 'low', 'medium'),
		createSkillImprovement('Coding','Java','P2', 'high', 'very high'),
		createSkillImprovement('Coding','Ruby','P2', 'medium', 'high'),
		createSkillImprovement('Coding','C#','P2', 'low', 'medium'),
		createSkillImprovement('Coding','HTML5','P2', 'low', 'medium'),
		createSkillImprovement('Coding','Javascript','P2', 'medium', 'high'),
		createSkillImprovement('Coding','Mobile Web','P2', 'low', 'high'),
		createSkillImprovement('Coding','NoSQL','P2', 'medium', 'high'),
		createSkillImprovement('Coding','Android','P2', 'low', 'medium'),
		createSkillImprovement('Coding','Jenkins','P2', 'low', 'medium'),

		createSkillImprovement('Testing','Capybara','P2', 'none', 'low'),
		createSkillImprovement('Testing','Web Driver','P2', 'low', 'medium'),
		createSkillImprovement('Testing','Testing strategies','P2', 'medium', 'high'),
		
		createSkillImprovement('Soft Skill','Communication','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Facilitation','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Influence','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Negotiation','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Planning','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Presenting','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Problem Solving','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Questioning','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Synthesis','P2', 'low', 'medium'),
		createSkillImprovement('Soft Skill','Teaching','P2', 'low', 'medium'),

		createSkillImprovement('UX','UI Development','P2', 'very-low', 'medium'),
		createSkillImprovement('UX','Usability Research','P2', 'very-low', 'medium'),
		createSkillImprovement('UX','Usability Testing','P2', 'very-low', 'medium'),
		createSkillImprovement('UX','Visual Design','P2', 'very-low', 'low'),
		createSkillImprovement('UX','Feedback & Coaching','P2', 'low', 'high')
	];

	app.controller('NavigationController', function (){
		this.menuItems = menuItems;
	});

	app.controller('SkillController', function(){
		this.skills = skills;
	});
})();
