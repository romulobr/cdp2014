(function () {
    var app = angular.module('achievements', []);

    app.service("allAchievements", function () {
        this.get = function () {
            return [
                {
                    title: 'Bilar',
                    description: '40+ horas por semana',
                    picture: 'img/achievements/billing.png'
                },
                {
                    title: 'Suporte ao time',
                    description: 'Tanto em POA quanto em BH',
                    picture: 'img/achievements/team.png'
                },
                {
                    title: 'Tempo no Cliente',
                    description: '3 meses de dedicação exlusiva ao cliente',
                    picture: 'img/achievements/cliente.png'
                },
                {
                    title: 'Vídeos do Ducktales',
                    description: 'Muito elogiado pelo cliente',
                    picture: 'img/achievements/ducktales.png'
                },
                {
                    title: 'Romulogs',
                    description: 'Melhora no workflow do projeto',
                    picture: 'img/achievements/logs.png'
                },
                {
                    title: 'Comida App',
                    description: 'Open source, usado em POA e BH',
                    picture: 'img/achievements/comida.png'
                },
                {
                    title: 'Ebola Hackaton',
                    description: 'Uma contribuição pequena pra uma causa grande',
                    picture: 'img/achievements/ebola.png'
                },
                {
                    title: 'Jovem Aprendiz',
                    description: 'Participação e Organização desde o início',
                    picture: 'img/achievements/kids.png'
                },
                {
                    title: 'Rails Girls',
                    description: 'Participação e Organização (2014 e 2015)',
                    picture: 'img/achievements/rails-girls.png'
                },                
                {
                    title: 'Angular Showcase',
                    description: 'Apresentação da ferramenta para o cliente',
                    picture: 'img/achievements/corporate.png'
                },                
                {
                    title: 'Node-js Meet Up',
                    description: 'Integração com a comunidade local',
                    picture: 'img/achievements/node.png'
                },                                
                {
                    title: 'Angular Meet Up',
                    description: 'Ferramentas de Build no front-end',
                    picture: 'img/achievements/angular.png'
                },
                {
                    title: 'Mobile meet up',
                    description: 'Coordenei a equipe de Web-mobile',
                    picture: 'img/achievements/mobile.png'
                },                                
                {
                    title: 'Dev in Company',
                    description: 'Apresentação da ferramenta para o cliente',
                    picture: 'img/achievements/dev-in-company.png'
                },
                {
                    title: 'Coding Dojos',
                    description: 'Suporte à organização (sponsee coordena)',
                    picture: 'img/achievements/dojo.png'
                },
                {
                    title: 'Suporte a praia',
                    description: 'Facilitando Onboarding e Ramping-up de novos contratados',
                    picture: 'img/achievements/praia.png'
                },
                {
                    title: 'Suporte ao recrutamento',
                    description: 'Code reviews e MUITAS entrevistas',
                    picture: 'img/achievements/entrevista.png'
                },
                {
                    title: 'Suporte ao escritório',
                    description: 'Várias atividade e ajuda na conscientização das pessoas',
                    picture: 'img/achievements/bh.png'
                },
                {
                    title: 'Representante do P3',
                    description: 'Resolver dúvidas e suportar as pessoas na jornada de P3',
                    picture: 'img/achievements/p3.png'
                },
                {
                    title: 'Ec. Injustice Awareness',
                    description: 'Campanha Global - (sono perdido)',
                    picture: 'img/achievements/injustice.png'
                },
                {
                    title: 'Feedback NHO',
                    description: 'Feedback',
                    picture: 'img/achievements/feedback.png'
                },                
                {
                    title: 'Lego Game NHO',
                    description: 'Feedback',
                    picture: 'img/achievements/lego-game.png'
                },
                {
                    title: 'Workshop de Inception',
                    description: 'Feedback',
                    picture: 'img/achievements/inception.png'
                },
                {
                    title: 'Mês LGBT',
                    description: 'Ajuda na organização pré-evento',
                    picture: 'img/achievements/checklist.png'
                },                
            ];
        }
    });

    app.controller('AchievementsController', ['allAchievements', function (allAchievements) {
        this.achievements = allAchievements.get();
    }]);
})();