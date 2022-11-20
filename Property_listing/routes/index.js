var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

var monk = require('monk');
var db = monk('127.0.0.1:27017/Airbnb', function(err, db){
    if(err){
       console.error("Db is not connected", err.message);
    }
});

router.get('/', function(req, res, next) {
  res.redirect('/properties');
});

router.get('/properties/new', function(req, res) {
	res.render('new');

});

router.get('/reservations/newuser', function(req, res) {
	res.render('newuser');
});

router.get('/reservations', function(req, res) {
	console.log("inside this");
	var t=new URLSearchParams(req.query);
	console.log(t);
	if(t==0)
	{
		console.log("No query value");
		console.log(req.query);
		var collection = db.get('reservations');
	collection.find({}, function(err, props){
		//res.json(videos);
		if (err) throw err;
	  	res.render('indexuser',{props : props})
	});
	}
	else{
		console.log("yes");
		console.log(typeof(String(req.query.user_id)));
		var collection = db.get('reservations');
		collection.find({ user_id: String(req.query.user_id)}, function(err, result){
			//console.log(user_id);
			if (err) throw err;
			//console.log(result);
			  res.render('showuserid', { users : result});
			//res.json(result);
		});
	} 
	
});

router.post('/reservations', function(req, res) {
	//req.body is used to read form input
	console.log(req.body);
	var collection = db.get('reservations');
	collection.insert({ 
		check_in: req.body.check_in,
		check_out: req.body.check_out,
		no_of_days: req.body.no_of_days,
		amount_paid: req.body.amount_paid,
		ratings: req.body.ratings,
		property_id: req.body.property_id,
		user_id: req.body.user_id,
		payment_id: req.body.payment_id
	}, function(err, pr){
		if (err) throw err;
		// if insert is successfull, it will return newly inserted object
	  	//res.json(video);
		res.redirect('/reservations');
	});
});

router.delete('/reservations/:id', function(req, res) {
	var collection = db.get('reservations');
	collection.remove({ _id: req.params.id }, function(err, result){
		if (err) throw err;
		res.redirect('/reservations');
	  	//res.render('show', { pr : result[0] });
		//res.json(result);
	});
});

router.get('/reservations/:id', function(req, res) {
	var collection = db.get('reservations');
	collection.find({ _id: req.params.id }, function(err, result){
		if (err) throw err;
		console.log(result);
	  	res.render('showuser', { user : result[0]});
		//res.json(result);
	});
});

router.get('/properties', function(req, res) {
	console.log("inside this");
	var collection = db.get('properties');
	collection.find({}, function(err, props){
		if (err) throw err;
		//res.json(videos);
	  	res.render('index',{ props : props})
	});
});

router.post('/properties', function(req, res) {
	//req.body is used to read form input
	var collection = db.get('properties');
	collection.insert({ 
		place: req.body.title,
		host: req.body.host,
		path: req.body.image,
		amenities: req.body.amenities,
		ratings: req.body.ratings,
		night_fee: req.body.night_fee,
		service_fee: req.body.service_fee,
		cleaning_fee: req.body.cleaning_fee,
		short_description: req.body.short_description,
		description:req.body.description
	}, function(err, pr){
		if (err) throw err;
		// if insert is successfull, it will return newly inserted object
	  	//res.json(video);
		res.redirect('/properties');
	});
});

router.post('/properties/edit/:id', function(req, res) {
	//req.body is used to read form input
	var collection = db.get('properties');
	var new_record = {
		place: req.body.title,
		host: req.body.host,
		path: req.body.image,
		amenities: req.body.amenities,
		ratings: req.body.ratings,
		night_fee: req.body.night_fee,
		service_fee: req.body.service_fee,
		cleaning_fee: req.body.cleaning_fee,
	};

	collection.update({ _id:req.params.id }, {$set : new_record}, {upsert:true}, function(err, pr){
		if (err) throw err;
		// if insert is successfull, it will return newly inserted object
	  	//res.json(video);
		res.redirect('/properties');
	});
});

router.delete('/properties/:id', function(req, res) {
	var collection = db.get('properties');
	collection.remove({ _id: req.params.id }, function(err, result){
		if (err) throw err;
		res.redirect('/properties');
	  	//res.render('show', { pr : result[0] });
		//res.json(result);
	});
});

router.get('/properties/:id/edit', function(req, res) {
	var collection = db.get('properties');
	collection.find({ _id: req.params.id }, function(err, result){
		if (err) throw err;
	  	res.render('edit', { pr : result[0] });
		//res.json(result);
	});
});

router.get('/properties/:id', function(req, res) {
	var collection = db.get('properties');
	collection.find({ _id: req.params.id }, function(err, result){
		if (err) throw err;
	  	res.render('show', { pr : result[0] });
		//res.json(result);
	});
});

module.exports = router;

