angular.module('Neofield', [])

.controller("appController", ["$rootScope", "$http",  function($rootScope, $http){
	var appCtrl = this;

	$rootScope.api = "http://localhost:3000/"

    appCtrl.message = {};

    appCtrl.sendMail = function (){
        $http.post('/v1/contato/send', appCtrl.message)
          .success(function(data){
            window.alert("Sua mensagem foi enviada com sucesso!");
          });
    }
}])
;