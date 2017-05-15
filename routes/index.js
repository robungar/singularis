var express = require('express')
var router = express.Router()
// var turbo = require('turbo360')({site_id: '<app_id>'})


router.get('/', function(req, res, next){
	res.render('index', null)
})

router.get('/services', function(req, res, next){
	res.render('services', null)
})

router.get('/company', function(req, res, next){
	res.render('company', null)
})

router.get('/datacenters', function(req, res, next){
	res.render('datacenters', null)
})

router.get('/support', function(req, res, next){
	res.render('support', null)
})

router.get('/partner', function(req, res, next){
	res.render('partner', null)
})

router.get('/contact', function(req, res, next){
	res.render('contact', null)
})

module.exports = router



