/**
 * Created by Evan Shang on 2017-05-12.
 */

angular.module('yixue.home', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('yixue.home', {
               url: '/home/:type',
               views: {
                   'content@yixue':{
                       templateUrl: function(params){
                           console.log(params);
                           if(params === 'general'){
                               return 'component/home/views/home.tpl.html'
                           }
                       },
                       controller : 'homeController'
                   }
               }
            });
    });