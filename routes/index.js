
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'TheTower'/*, images: ['flower_1','grass','rock','tower']TODO raus?*/ });
};