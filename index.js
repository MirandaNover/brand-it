const express = require("express");
const path = require('path');
const app = express();

var PORT = process.env.port || 3000;

// View Engine Setup
app.set("views", __dirname);
app.set("view engine", "ejs");

app.get("/", function(req, res){
	// Sample data to be filled in form
	var user = {
		input: "A women's underwear brand for millenials with a sustainability focus"
	}

	res.render("SampleForm",
		{
			user: user
		}
	);
})

app.listen(PORT, function(error){
	if(error) throw error
	console.log("Server created Successfully on PORT", PORT)
})
