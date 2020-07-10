const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
	const posts = await Post.find();
	try {
		res.send(posts);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post("/", async (req, res) => {
	const post = await new Post({
		title: req.body.title,
		companyName: req.body.companyName,
		location: {
			city: req.body.location.city,
			state: req.body.location.state,
		},
		postBody: req.body.postBody,
	});
	post.save();
	res.send(post);
});

module.exports = router;
