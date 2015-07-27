var mongoose = require('mongoose');
var Product = mongoose.model('Product', require('../models/productsSchema.js'));

module.exports = {
  create: function(req, res){
  	console.log('create new product function', req.body);
  },

  retrieve: function(req, res){
  	console.log(req.body);
  },

  update: function(req, res){
  	console.log(req.body);
  },

  remove: function(req, res){
  	console.log(req.body);
  },
};

