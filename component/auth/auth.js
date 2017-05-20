/**
 * Created by Evan on 2017-05-19.
 */
angular.module('yixue.auth', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded auth');
        $stateProvider
            .state('yixue.auth', {
                url: '/auth/:type',
                views: {
                    "content@yixue":{
                        templateUrl: function (params){
                            if(params.type == 'signup'){
                                return 'component/auth/views/signup.html'
                            } else if(params.type == login){
                                return 'component/auth/views/login.html'
                            }
                        },
                        controller : 'authController'
                    }
                }
            });
    });