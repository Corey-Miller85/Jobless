const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");
const creds = require("./config/config");
const posts = require("./routes/jobposts");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
	.connect(
		`mongodb+srv://${creds.username}:${creds.password}@cluster0.fr7qc.mongodb.net/jobsite?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(console.log("Connected to Database..."))
	.catch((err) => console.log("Couldn't connect to MongoDB...", err));

app.get("/", (req, res) => {
	res.send("Welcome to the Job Posts API");
});

app.use("/api/posts", posts);

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
