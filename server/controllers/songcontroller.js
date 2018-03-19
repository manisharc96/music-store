var restful = require('node-restful');
module.exports=function(app, route){

  //setup the controller for REST.
  var rest = restful.model(
    'song',app.models.song
  ).methods(['get', 'put', 'post', 'delete']);
   //Register this endpoint with the application.
  rest.register(app, route);
  //return Middleware
  return function(req, res, next){
   next();
  };
};
/*var Resource = require('resourcejs');
module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '', route, app.models.movie).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};*/
