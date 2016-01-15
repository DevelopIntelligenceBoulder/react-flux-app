require("./app/server")({
	port: process.env.PORT || 8080,
	folder: "app/www"
}).start();