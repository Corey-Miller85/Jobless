const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	companyName: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	location: {
		city: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		state: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
	},
	postBody: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
