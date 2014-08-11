(function() {
	var app = angular.module('feedbacks', []);	
		
	app.service("allFeedbacks", function (){
		this.get = function () {
			return [
				{
					author: 'Thais Hamilton',
					description: 'Consultant Developer and Huge Batman Fan',
					picture:'thais',
					content: ["You really helped me feel Welcome In the Project and if you are not sponsoring someone already, I Think you really should."]
				},
				{
					author: 'Gozalo Matteu',
					description: 'Senior Developer and 2nd place in the 2014 fifa World Cup',
					picture: 'gonzalo',
					content: ["You Know a lot about many things, even though you say or maybe think that you don't. you are technically very good, you can work with any technology you want to, I think that's very good."]
				},
				{
					author: 'Ícaro Motta',
					picture: 'icaro',
					content: ["Working with you was a very pleasant experience, I look bacK on how I was when I joined the project and compare to how I am doing now and I can see a big difference I Think most of that is because of you, I do n t really know how to explain but the way you treat me and how you thought me many things just helped me to get so much better"]
				},
				{
					author: 'Bryan Hall',
					picture: 'rackspace',
					content: ["You have been a valuable member of this team and made very important contributions again and again, this team will miss you"]
				},
				{
					author: 'Pamela Canchanya',
					picture: 'pamela',
					content: [
						"Your impact on the rails girls event was really noticeable, there was a moment were all the girls applauded you, I think that shows it.",
						"You make people feel really comfortable around you, you are very good at explaining complicated things in a way that's easy to understand.",
						"You should speak more in public, you are very good at that, since you are also very good at coaching people, maybe you could think about being a TWU coach.",
						"The way you help new people feel comfortable in our environment is really helpful, I see you helping many people and I think it's really helpful."
					]
				},

				{
					author: 'Raquel Liedke',
					picture: 'raquel',
					content: [
						"You are really helping the team and I think you make questions that should be made at the appropriate times",
						"You can give feedback on a way that's helpful and doesn't sound like you are complaining about the person, but you make it clear that you just want to help them to get better."
						]
				},
				{
					author: 'Rafael Portela',
					picture: 'portela',
					content: [
						"I was impressed by the way you spoke about those issues, those are very delicate situations and you are able to communicate very well on them. Congratulations on how you dealt with it."
						]
				},
				{
					author: 'Fernanda Martins',
					picture: 'fernanda',
					content: [
						"I don't know how to explain it, but you are very good at explaining things objectively, you don't beat around the bush, you are very good at coaching us."
						]
				},
				{
					author: 'Rodrigo Toledo',
					picture: 'rodrigo',
					content: [
						"One thing I think is very hard is to commit to something like you did, you persisted since the beginning and were always there ready to help, to sit with us and show a lot of patience and dedication."
						]
				}];
		}
	});

	app.controller('FeedbackController', ['allFeedbacks', function(allFeedbacks){		
		this.feedbacks = allFeedbacks.get();
	}]);
})();
