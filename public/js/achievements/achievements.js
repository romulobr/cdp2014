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
                    description: 'Apresentação sobre TDD',
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
                    title: 'Economic Injustice Awareness',
                    description: 'Campanha Global',
                    picture: 'img/achievements/injustice.png'
                },
                {
                    title: 'Orientação a Novos Recrutados',
                    description: 'Feedback',
                    picture: 'img/achievements/feedback.png'
                },                
                {
                    title: 'Orientação a Novos Recrutados',
                    description: 'Lego Game',
                    picture: 'img/achievements/lego-game.png'
                },
                {
                    title: 'Workshop de Inception',
                    description: 'Papel do cliente',
                    picture: 'img/achievements/inception.png'
                },
                {
                    title: 'Mês LGBT',
                    description: 'Ajuda no planejamento e organização pré-evento',
                    picture: 'img/achievements/lgbt.png'
                },                
            ];
        }
    });

    app.service("allSponsees", function () {
        this.get = function () {
            return [
                {
                    name: 'Luana',                    
                    picture: 'img/achievements/luana.png'
                },
                {
                    name: 'Ramon',
                    picture: 'img/achievements/ramon.png'
                },                
                {
                    name: 'Melina',
                    picture: 'img/achievements/melina.png'
                },
                {
                    name: 'Bruno Leite',
                    picture: 'img/achievements/bruno.png'
                },                
                {
                    name: 'Francieli',
                    picture: 'img/achievements/francieli.png'
                },
                {
                    name: 'Juliana',
                    picture: 'img/achievements/juliana.png'
                },                
                {
                    name: 'Patrick',
                    picture: 'img/achievements/patrick.png'
                }                            
            ];
        }
    });

    app.service("allLearning", function () {
        this.get = function () {
            return [
                {
                    name: 'Building Microservices',                    
                    picture: 'img/achievements/microservices.png'
                },
                {
                    name: 'Clean Code & The Cleaner Code',
                    picture: 'img/achievements/clean-code.png'
                },                
                {
                    name: 'Graphic Design - The new Basics',
                    picture: 'img/achievements/design.png'
                },
                {
                    name: 'Non Violent Communication',
                    picture: 'img/achievements/non-violent-communication.png'
                },
                {
                    name: 'Javascript Patterns',
                    picture: 'img/achievements/javascript-patterns.png'
                },                
                {
                    name: 'CSS and Documents',
                    picture: 'img/achievements/css-documents.png'
                },
                {
                    name:'Daring Greatly',
                    picture: 'img/achievements/daring-greatly.png'
                }
            ];
        }
    });

    app.service("allFeedbacks", function () {
        this.get = function () {
            return [
                {
                    name: 'Simba',
                    description: "You're a really brilliant and experienced developer, always keen to listen and always up for a technical discussion.",
                    picture: 'img/achievements/simba.png'
                },
                {
                    name: 'Stacey Watro',
                    description: 'It was easy to see that his is a natural leader. Our team was not in an easy position. We had many new ThoughtWorks working on a big project that was not use to off-shore teams. Romulo worked hard to balance delivering software, teaching new team members, and making the client feel comfortable with an offshore team.',
                    picture: 'img/achievements/stacey.png'
                },                
                {
                    name: 'Fábio Pio',
                    description:"Companheirismo: Sinto em você um grande companheiro de time, não somente para mim, mas também para os demais membros. Sempre que lhe procuramos com alguma dúvida e/ou dificuldade, você sempre se mostra pronto para ajudar, isso não se limita apenas aos assuntos de projeto.",
                    picture: 'img/achievements/fabio.png'
                },                
                {
                    name: 'Flávia - PM Ducktales',
                    description: 'um pilar de segurança para o time (   22e é fofinho)',
                    picture: 'img/achievements/flavia.png'
                },                
                {
                    name: 'Denise Notini (BA - Ducktales)',
                    description: "tem uma visão sistêmica muito boa",
                    picture: 'img/achievements/denise.png'
                },
                {
                    name:'Carlos Vilela - Lenda viva',
                    description: "O Rômulo fez tanto pelo psicológico de times inteiros da TW que devia ter o título de People Partner honorário e vitalício",
                    picture: 'img/achievements/cv.png'
                }
            ];
        }
    });

    app.controller('AchievementsController', ['allAchievements','allSponsees','allLearning','allFeedbacks', function (allAchievements, allSponsees, allLearning, allFeedbacks) {
        this.achievements = allAchievements.get();
        this.sponsees = allSponsees.get();
        this.learning = allLearning.get();
        this.feedbacks = allFeedbacks.get();
    }]);
})();