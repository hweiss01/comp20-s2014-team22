
/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.render('index', { 'title': 'Express', 'purchases': [
  // 							{'website': 'Amazon', 'date': '4/1/14', 'price': '50'},
  // 							{'website': 'Amazon', 'date': '5/20/14', 'price': '25'}
  // 						]});
	res.render('index');
};