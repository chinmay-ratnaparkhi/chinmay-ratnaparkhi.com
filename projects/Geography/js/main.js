(function(){
	var app = angular.module('store', []);

	app.controller('storeController', function(){
		this.products= myGems;
	})

	var myGems= [

	{

		name: "Chinmay's Gem",
		price: 5,
		description: "Chinmay created a gem and is now selling it to the world for only $5. Check it out right now!",
		purchasable : true,
		soldout : false,
	},

	{

		name: "Chinmay's Second Gem",
		price: 15,
		description: "Chinmay created another gem and is now selling it to the world for only $15. Check it out right now!",
		purchasable : true,
		soldout : false,
	},

	{

		name: "Chinmay's third Gem",
		price: 25,
		description: "Chinmay created another gem and is now selling it to the world for only $25. Check it out right now!",
		purchasable : false,
		soldout : false,
	},

	
	{

		name: "Chinmay's fourth Gem",
		price: 35,
		description: "Chinmay created another gem and is now selling it to the world for only $35. Check it out right now!",
		purchasable : true,
		soldout : false,
	},

	{

		name: "Chinmay's fifth Gem",
		price: 45,
		description: "Chinmay created another gem and is now selling it to the world for only $45. Check it out right now!",
		purchasable : true,
		soldout : false,
	},

	];

})();
