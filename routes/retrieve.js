
/*
 * GET users listing.
 */

// exports.user = function(req, res){

// }

exports.list = function(req, res){
  res.render('retrieve', { 'purchases': [
						{'website': 'Amazon', 'date': '4/1/14', 'price': '50'},
						{'website': 'Amazon', 'date': '5/20/14', 'price': '25'}
					]});
};