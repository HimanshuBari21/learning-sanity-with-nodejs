// dependecies
const path = require("path");
const express = require("express");
const app = express();
const ejs = require("ejs");
const open = require("open");
const sanityClient = require('@sanity/client');
const ejsLint = require('ejs-lint');

// dependecies ends

const client = sanityClient({
	projectId: '0x6zl8tm',
	dataset: 'tshirts',
	apiVersion: '2022-08-05', // use current UTC date - see "specifying API version"!
	token: '', // or leave blank for unauthenticated usage
	useCdn: false, // `false` if you want to ensure fresh data
})

// middleware
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
// middleware ends

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// view engine ends

// routes
const query = '*[_type == "TShirt"]'
const params = { minSeats: 2 }
var data = [];
app.get("/", (req, res, next) => {
	client.fetch(query, params).then((tshirt) => {
		console.log(tshirt)
		res.render("output.ejs", { tshirt });
	})
})



// routes ends

// server at 3000
app.listen(3000, (err) => {
	if (err) {
		throw err
	}
	console.log(`Server running on http://localhost:3000`)
	console.log(Date())
});
// server at 3000 ends