(function(){
	var app= angular.module('purchased-stuff',[]);
	app.directive('shoppingCart',function(){
		return{
			restrict: 'E',
			templateUrl: 'shopping-cart.html',
		};
	});
	app.controller('shoppingController', function(){
		this.addItem = function(product){
			var cart = document.getElementById('current_selection');
			cart.innerHTML= cart.innerHTML+'<a href class="list-group-item">'+product.name+'</a>';
		}
	});
})();