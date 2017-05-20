/**
 * Created by Evan Shang on 2017-05-12.
 */

angular.module('yixue.layout').controller('layoutController', function($scope, $rootScope, $stateParams){

    $rootScope.openLoginModal = function(){

        $('#loginModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    }
});