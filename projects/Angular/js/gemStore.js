(function (){
	var app= angular.module('store', ['store-stuff','purchased-stuff']);
	

	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.products=[];
		$http.get('js/store-products.JSON').success(function(data){
			store.products = data;
		});
	}]);

 	app.controller('reviewController', ['$http', function($http){
 		var current= this;
 		current.demo= {};
 		current.formSubmission= function(product){
	 		product.reviews.push(current.demo)
	 		  // Trigger validation flag.
			  current.submitted = true;
			  var config = {
			    params : {
			      'callback' : 'JSON_CALLBACK',
			      'name' : "Chinmay",
			      'email' : "hello",
			      'subjectList' : "hahaha",
			    }
			  };

			  // Perform JSONP request.
			  var $promise = $http.jsonp('js/store-products.JSON', config)
			    .success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {}).finally(function() {});	
 			
 			current.demo= {};
 		}
 	}]);
})();