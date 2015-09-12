var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  var cat = -1;
  if(req.query.cat){
    cat = indexOfCategoryID(vd.categories,req.query.cat);
  }
  
    
  res.render('index', 
    { 
  	  title: 'Express',
  	  videodata:vd,
  	  category:cat
  	}
  );
  	
});

module.exports = router;


function indexOfCategoryID(categories,catID){
	for(var i=0;i<categories.length;i++){
		if(categories[i].categoryID==catID)
			return i;
	}
	return -1;
}