module.exports = function (moduleViews){
  
  var landingPage = moduleViews.landingPage;

  return function(router){
    router.get("/", function(req, res){
    	landingPage.index.get(req, res);
    });
  }

}