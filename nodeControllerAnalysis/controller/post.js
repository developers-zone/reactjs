const Post = require('../models/post');

exports.getPosts = (req, res)=>{
	res.send("Helooooooooooo");
};

exports.getArr = (req, res)=>{
	res.json({
		post:[{'title':'helloooo'},
			  {'title':'hai'},
			  {'title':'hiyaa'},
			  {'title':'halooon'}]
	});
};

exports.createPost = (req, res)=>{
	const post = new Post(req.body);
	// console.log("Creating Post ", req.body);
	post.save((err,result)=>{
		if(err){
			return res.status(400).json({
				error : err
			});
		}
		res.status(200).json({
			post: result
		})
	});
};

exports.createWC = (req, res)=>{
	const post = new Post(req.body);
	// console.log("Creating Post ", req.body);
	// post.save((err,result)=>{
	// 	if(err){
	// 		return res.status(400).json({
	// 			error : err
	// 		});
	// 	}
	// 	res.status(200).json({
	// 		post: result
	// 	})
	// });
	post.save().then(result=>{
		res.status(200).json({
			post: result
		})
	});
};

exports.getWC = (req, res)=>{
	const post = Post.find().select("_id code")
					 .then(post=>{
					 	res.status(200).json({posts:post});
					 })
					 .catch(err=>{
					 	console.log("Error:", err);
					 })
};