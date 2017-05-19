/**
 * Created by Evan Shang on 2017-05-12.
 */
angular.module('yixue.home', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('yixue.home', {
               url: '/home',
               views: {
                   "content@yixue":{
                       templateUrl: 'component/home/views/home.html',
                       controller : 'homeController'
                   }
               }
            });
    });