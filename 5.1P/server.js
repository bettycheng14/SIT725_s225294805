const express = require("express");
const app = express();
const PORT = 3000;

// Import route file
const bookRoutes = require("./routes/book");

// Import public folder for static files
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount the route at /api/books
app.use("/api/books", bookRoutes);

// Root route
app.get("/", (req, res) => {
	res.send("Welcome to the Book Catalog Home Page!");
});

app.use((req, res) => res.status(404).json({ message: "Not found" }));
app.use((err, _req, res, _next) => {
	console.error(err);
	res.status(500).json({ message: "Server error" });
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
