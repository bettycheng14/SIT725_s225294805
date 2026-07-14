const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// GET endpoint at /add to add two numbers provided as query parameters
app.get("/add", (req, res) => {
	// Parse the numbers from the query parameters
	const a = parseFloat(req.query.a);
	const b = parseFloat(req.query.b);

	// Calculate the sum
	const sum = a + b;
	res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

// GET endpoint at /square to calculate the square of a number
app.get("/square", (req, res) => {
	const num = parseFloat(req.query.num);
	if (isNaN(num)) {
		return res.send(
			"Error: Please provide a valid number using query parameter 'num'.",
		);
	}
	const square = num * num;
	res.send(`The square of ${num} is: ${square}`);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
