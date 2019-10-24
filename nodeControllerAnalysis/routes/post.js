const express = require('express');

const postController = require('../controller/post');
const router = express.Router();

const validator = require('../validator');

router.get('/', postController.getPosts);
router.get('/title', postController.getArr);
router.post('/create', postController.createPost);
router.post('/workspace_collection', validator.createPostValidator, 
			postController.createWC);
router.get('/workspace_collection', postController.getWC);
module.exports = router;

// exports.getPosts = (req, res)=>{
// 	res.send("Helooooooooooo");
// };