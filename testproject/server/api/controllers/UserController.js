/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

create: function(req, res){
  var params = req.params.all()

  User.create({firstname: params.firstname, lastname: params.lastname}).exec(function createCB(err,created){
    return res.json({
      notice: 'Created user with name ' + created.firstname
    });
  });
}
	
};

