module.exports = {

	/*might not be necessary to have a query for every single 'conversation' between customer and DB*/

	addProductToCart: function(req, res) {
		req.session.cart.push(req.body);
		res.send(req.session.cart);
	}

	, getCart: function(req, res) {
		res.send(req.session.cart);
	}

	, removeProductFromCart: function(req, res) {
		for(var i = 0; i < req.session.cart; i++) {
			if(req.session.cart[i].item.id === req.body.id) {
				req.session.cart.splice(i, 1);
				break;
			}
		}
		res.send(req.session.cart);
	}

	/*, emptyCart: function(req, res){
		req.session.cart = [];
		res.send(req.session.cart);
	}*/

 
};