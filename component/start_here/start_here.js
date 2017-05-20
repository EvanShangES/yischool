/**
 * Created by Evan on 2017-05-19.
 */
angular.module('yixue.start_here', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('yixue.start_here', {
                url: '/start',
                views: {
                    "content@yixue":{
                        templateUrl: 'component/start_here/views/start_here_home.html',
                        controller : 'start_hereController'
                    }
                }
            });
    });