var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
	{
		title: "Cappuccino",
		image: "images/coffee-2.jpg",
		link: "https://maps.app.goo.gl/H44H1YaUZwHaNjCEA",
		linkTitle: "CAFE FADUCCI",
		description:
			"A classic Italian coffee made with espresso and frothy milk, perfect for a morning boost.",
	},
	{
		title: "Hot Americano",
		image: "images/coffee-3.jpg",
		link: "https://maps.app.goo.gl/wBjrzpe8qaACVKk59",
		linkTitle: "Gladys' Heels Coffee",
		description:
			"Rich espresso diluted with hot water, giving it a similar strength to but different flavor from traditionally brewed coffee.",
	},
];

app.get("/api/cards", (req, res) => {
	res.json({ statusCode: 200, data: cardList, message: "Success" });
});

var port = process.env.port || 3000;

app.listen(port, () => {
	console.log("App listening to: " + port);
});
