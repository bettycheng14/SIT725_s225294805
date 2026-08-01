var express = require("express");
var app = express();
const mongoose = require("mongoose");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/week4DB");
mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB!");
});
const CardSchema = new mongoose.Schema({
	title: String,
	image: String,
	link: String,
	linkTitle: String,
	description: String,
});
const Card = mongoose.model("Card", CardSchema);
const cardList = [
	{
		title: "Iced Long Black",
		image: "images/coffee-1.jpg",
		link: "https://maps.app.goo.gl/3MPgxUp99gMJTdPD7",
		linkTitle: "LiLo Coffee Roasters",
		description:
			"Iced Long Black is my All-Time-Favourite. This one is from the Osaka Lilo Coffee. I choose the beans with flower flavour which is so fruity and rich.",
	},
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
Card.insertMany(cardList)
	.then((docs) => {
		console.log(`Successfully saved ${docs.length} cards!`);
	})
	.catch((err) => {
		console.error("Error inserting cards:", err);
	});

app.get("/api/cards", async (req, res) => {
	const cards = await Card.find({});
	res.json({ statusCode: 200, data: cards, message: "Success" });
});

var port = process.env.port || 3000;

app.listen(port, () => {
	console.log("App listening to: " + port);
});
