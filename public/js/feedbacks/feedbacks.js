(function () {
    var app = angular.module('feedbacks', []);

    app.service("allFeedbacks", function () {
        this.get = function () {
            return [
                {
                    author: 'Thais Hamilton',
                    url: 'https://jigsaw.thoughtworks.com/consultants/15871',
                    description: 'Cloud Control Panel Developer',
                    picture: 'thais',
                    content: ["You really helped me feel Welcome In the Project and if you are not sponsoring someone already, I Think you really should."]
                },
                {
                    author: 'Gozalo Matteu',
                    url: 'https://jigsaw.thoughtworks.com/consultants/15220',
                    description: 'Cloud Control Panel Developer- 2nd place in the 2014 FIFA World Cup',
                    picture: 'gonzalo',
                    content: ["You Know a lot about many things, even though you say or maybe think that you don't. you are technically very good, you can work with any technology you want to, I think that's very good."]
                },
                {
                    author: 'Ícaro Motta',
                    url: 'https://jigsaw.thoughtworks.com/consultants/15516',
                    description: 'Cloud Control Panel Developer',
                    picture: 'icaro',
                    content: ["Working with you was a very pleasant experience, I look bacK on how I was when I joined the project and compare to how I am doing now and I can see a big difference I Think most of that is because of you, I do n t really know how to explain but the way you treat me and how you thought me many things just helped me to get so much better"]
                },
                {
                    author: 'Bryan Hall',
                    url:'http://rackspace.com',
                    description: 'Cloud Control Panel Project Manager at Rackspace',
                    picture: 'rackspace',
                    content: ["You have been a valuable member of this team and made very important contributions again and again, this team will miss you"]
                },
                {
                    author: 'Pamela Mori',
                    url: 'https://jigsaw.thoughtworks.com/consultants/15195',
                    description: 'Developer',
                    picture: 'pamela',
                    content: [
                        "Your impact on the rails girls event was really noticeable, there was a moment were all the girls applauded you, I think that shows it.",
                        "You make people feel really comfortable around you, you are very good at explaining complicated things in a way that's easy to understand.",
                        "You should speak more in public, you are very good at that, since you are also very good at coaching people, maybe you could think about being a TWU coach.",
                        "The way you help new people feel comfortable in our environment is really helpful, I see you helping many people and I think it's really helpful."
                    ]
                },
                {
                    author: 'Leonardo Iglesias',
                    url:'http://www.linkedin.com/profile/view?id=315289851',
                    description: 'Aceleradora de Software',
                    picture: 'leonardo',
                    content: [
                        "E aí, Rômulo! Cara, quero te parabenizar pela apresentação na aceleradora, foi muito legal mesmo. Além de tudo, o Froes e tu mostraram um comprometimento com a profissão que, pra mim, foi super motivacional, me deu muita vontade de aprender e ser um ótimo dev. Parabéns mesmo!"
                    ]
                },
                {
                    author: 'Desiree Santos',
                    url: 'https://jigsaw.thoughtworks.com/consultants/15199',
                    description: 'Developer',
                    picture: 'desiree',
                    content: [
                        "You are very good at explaining things, you should show more this side of yours, maybe make more presentations in the office or in events, you are very good at that."
                    ]
                },


                {
                    author: 'Raquel Liedke',
                    url: 'https://jigsaw.thoughtworks.com/consultants/15379',
                    description: 'Quality Analist - Premier AMP',
                    picture: 'raquel',
                    content: [
                        "You are really helping the team and I think you make questions that should be made at the appropriate times",
                        "You can give feedback on a way that's helpful and doesn't sound like you are complaining about the person, but you make it clear that you just want to help them to get better."
                    ]
                },
                {
                    author: 'Rafael Portela',
                    url: 'https://jigsaw.thoughtworks.com/consultants/14591',
                    description: 'Developer - Premier AMP',
                    picture: 'portela',
                    content: [
                        "I was impressed by the way you spoke about those issues, those are very delicate situations and you are able to communicate very well on them. Congratulations on how you dealt with it."
                    ]
                },
                {
                    author: 'Fernanda Martins',
                    url: 'https://jigsaw.thoughtworks.com/consultants/14378',
                    description: 'Tech Ops - POA',
                    picture: 'fernanda',
                    content: [
                        "I don't know how to explain it, but you are very good at explaining things objectively, you don't beat around the bush, you are very good at coaching us."
                    ]
                },
                {
                    author: 'Rodrigo Toledo',
                    url: 'https://jigsaw.thoughtworks.com/consultants/14161',
                    description: 'Quality Analysis - Premier AMP',
                    picture: 'rodrigo',
                    content: [
                        "One thing I think is very hard is to commit to something like you did, you persisted since the beginning and were always there ready to help, to sit with us and show a lot of patience and dedication."
                    ]
                },
                {
                    author: 'Gilmar Leitão',
                    url: 'https://jigsaw.thoughtworks.com/consultants/15083',
                    description: 'Developer - Premier AMP',
                    picture: 'gilmar',
                    content: [
                        "You are in this project for a short time and you already knows a lot of stuff, you learn quickly, that's very cool"
                    ]
                },
                {
                    author: 'Vinicius Mello',
                    url: 'https://jigsaw.thoughtworks.com/consultants/14822',
                    description: 'People Support - POA',
                    picture: 'vinicius',
                    content: [
                        "O Romulo com seu jeito descontraido fazendo a galera ficar mais solta, mas sempre apurado nos seus conhecimentos no que tange a parte técnica do negócio."
                    ]
                },
                {
                    author: 'Lourenço Soares',
                    url: 'https://jigsaw.thoughtworks.com/consultants/12903',
                    description: 'Business Analyst / Idea Generator',
                    picture: 'lourenco',
                    content: [
                        "Ajudou, junto com o Portela, a evitar que o programa de Aprendizes morresse depois que a Lizi e a Luisa tiveram que abandonar a iniciativa. Assumiu a bronca em um momento dificílimo, com muito pouco contexto e substituindo gente que tinha feito um bom trabalho. Rapidamente estabeleceu um relacionamento de confiança com os aprendizes e utilizou a experiência anterior de educação para gerar conteúdo relevante para eles. O maior feedback vem dos próprios aprendizes, que te citaram pelo nome em 2 ocasiões seguidas. Uma das partes mais legais foi a importância que tu deu ao projeto, tu SEMPRE estava lá e pronto na hora que precisava."
                    ]
                }


            ];
        }
    });

    app.controller('FeedbackController', ['allFeedbacks', function (allFeedbacks) {
        this.feedbacks = allFeedbacks.get();
    }]);
})();
