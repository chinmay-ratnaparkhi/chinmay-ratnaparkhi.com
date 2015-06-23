(function(){
	var app= angular.module('store-stuff',[]);

	app.directive('productDescription',function(){
 		return {
 			restrict : 'A',
 			templateUrl : 'product-description.html',
 		};
 	});

 	app.directive('productSpecs', function(){
 		return{
 			restrict : 'A',
 			templateUrl : 'product-specs.html',
 		};
 	});

 	app.directive('productReviews', function(){
 		return {
 			restrict : 'A',
 			templateUrl : 'product-reviews.html',
 		};
 	});

 	app.directive('storeProduct',function(){
 		return{
 			restrict : 'A',
 			templateUrl : 'store-product.html',
 			controller : function()
 				{
	 				this.tab= 1;
			 		this.isCurrent= function(me){
			 			return this.tab == me;
			 		}
			 		this.makeMeActive= function(me){
			 			this.tab=me;
			 		}
		 		},
		 	controllerAs : 'tab',
		 };
 	});
})();