(function () {
    var app = angular.module('achievements', []);

    app.service("allAchievements", function () {
        this.get = function () {
            return [
                {
                    title: 'Free as in freedom of speach.',
                    url: 'http://softwarelivre.org/fisl15',
                    description: 'Spoke on FISL 15',
                    icon: 'fisl.jpg',
                    picture: 'fisl.jpg'
                },
                {
                    title: 'Video Killed the radio star.',
                    url: 'https://www.youtube.com/watch?v=ELXMfg8kFx0',
                    description: 'Created an educational youtube video.',
                    icon: 'youtube.png',
                    picture: 'youtube.jpg'
                },
                {
                    title: 'Like tears in the rain.',
                    url: 'https://github.com/romulobr/doctor-who-guide-android/',
                    description: 'Created an automated tested open source android application.',
                    icon: 'android.png',
                    picture: 'youtube.jpg'
                },
                {
                    title: 'Houston we have a problem.',
                    url: 'https://2014.spaceappschallenge.org/',
                    description: 'Participated on NASA space apps challenge',
                    icon: 'nasa.png',
                    picture: 'youtube.jpg'
                },
                {
                    title: 'Girls just wanna have fun.',
                    url: 'https://my.thoughtworks.com/groups/rails-girls-twbr/blog/2014/01/06/rails-girls-porto-alegre--follow-up',
                    description: 'Helped organize and coached on Rails Girls POA 2014.',
                    icon: 'railsgirls.png',
                    picture: 'youtube.jpg'
                },
                {
                    title: 'Let the children play.',
                    url: '/#/feedbacks',
                    description: 'Participated as a coach/teacher on Menor Aprendiz.',
                    icon: 'marista.jpg',
                    picture: 'youtube.jpg'
                },
                {
                    title: '(The Desktop) is ALIVE!',
                    url: 'http://www.romulo.co',
                    description: 'Created an open source desktop application using web technologies.',
                    icon: 'node-webkit.png',
                    picture: 'youtube.jpg'
                },
                {
                    title: 'Level Up!',
                    url: 'https://my.thoughtworks.com/groups/lbdpoalevelup',
                    description: 'Helped develop the program and Coached JCs on Level Up.',
                    icon: 'levelup.jpg',
                    picture: 'youtube.jpg'
                }


            ];
        }
    });

    app.controller('AchievementController', ['allAchievements', function (allAchievements) {
        this.achievements = allAchievements.get();
    }]);
})();
