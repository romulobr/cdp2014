(function() {
	var app = angular.module('skills', []);	
	
	var createSkillImprovement = function(category, technology, classification, before, after) {
		var values = {
			zero: 0,
			'very-low': 10,
			low : 25,
			medium: 50,
			high: 80,
			'very-high': 90			
		};
		
		return {
			category: category,
			technology: technology,
			classification: classification,
			before: values[before],
			after: values[after]
		};
	};	

	app.service("allSkills", function (){
		this.get = function () {
			return [
				createSkillImprovement('coding','Android','P2', 'low', 'medium'),
				createSkillImprovement('coding','Java','P2', 'high', 'very-high'),
				createSkillImprovement('coding','Ruby','P2', 'medium', 'high'),
				createSkillImprovement('coding','C#','P2', 'low', 'medium'),
				createSkillImprovement('coding','HTML5 & Mobile Web','P2', 'low', 'medium'),
				createSkillImprovement('coding','Javascript','P2', 'medium', 'high'),
				createSkillImprovement('coding','NoSQL','P2', 'medium', 'high'),
				createSkillImprovement('coding','Android','P2', 'low', 'medium'),
				createSkillImprovement('coding','Jenkins','P2', 'low', 'medium'),

				createSkillImprovement('testing','Capybara','P2', 'none', 'low'),
				createSkillImprovement('testing','Web Driver','P2', 'low', 'medium'),
				createSkillImprovement('testing','Testing strategies','P2', 'medium', 'high'),
				
				createSkillImprovement('soft','Communication','P2', 'medium', 'very-high'),
				createSkillImprovement('soft','Presenting','P2', 'low', 'high'),
				createSkillImprovement('soft','Problem Solving','P2', 'low', 'medium'),
				createSkillImprovement('soft','Synthesis','P2', 'low', 'medium'),
				createSkillImprovement('soft','Teaching','P2', 'medium', 'very-high'),
				createSkillImprovement('soft','Feedback & Coaching','P2', 'low', 'very-high'),

				createSkillImprovement('ux','UI Development','P2', 'very-low', 'medium'),
				createSkillImprovement('ux','Usability Research','P2', 'very-low', 'medium'),
				createSkillImprovement('ux','Usability Testing','P2', 'very-low', 'medium'),
				createSkillImprovement('ux','Visual Design','P2', 'very-low', 'low'),

				createSkillImprovement('language','Portuguese','P2', 'high', 'high'),
				createSkillImprovement('language','English','P2', 'high', 'very-high'),
				createSkillImprovement('language','Spanish','P2', 'very-low', 'medium'),
				createSkillImprovement('language','German (still zero!)','P2', 'zero', 'zero')
				
			];
		}
	});

	app.controller('SkillController', ['allSkills', function(allSkills){		
		this.skills = allSkills.get();
	}]);
})();
