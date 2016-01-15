module.exports = function(options) {
	
	"use strict";

	const
		http = require("http"),
		express = require("express");
		
	let
		app = express(),
		server = http.createServer(app);
		
	app.use(express.static(options.folder));
		
	return {
		start: function() {
			
			return new Promise(function(resolve, reject) {
				server.listen(options.port, function(err) {
					
					if (err) {
						reject(err);
						return;
					}
					
					resolve();
					
				});
			});
			
		},
		stop: function() {

			return new Promise(function(resolve, reject) {
				server.close(function(err) {
					
					if (err) {
						reject(err);
						return;
					}
					
					resolve();
					
				});
			});			

		}
	}	
};


