module.exports = function (moduleTeste){
  
  var controllers = moduleTeste.controllers;

  return function(router){
    router.get("/teste", function(req, res){
    	controllers.teste.get(req, res);
    });
  }

}