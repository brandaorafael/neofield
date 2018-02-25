module.exports = function (path){

  return {
    get: function (req, res) {

    	return res.render(path.resolve('views/landingPage.html'));

    }
  }
}