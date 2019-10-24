const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title :{
		type: String,
		required: 'Title  is required',
		minlength:4,
		maxlength:150
	},
	body :{
		type: String,
		required: 'Body  is required',
		minlength:4,
		maxlength:150
	}
});

const workspaceSchema = new mongoose.Schema({
	name :{
		type: String,
		required: true
	},
	code :{
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Post", postSchema);
module.exports = mongoose.model("workspace_collects", workspaceSchema);