exports.createPostValidator = (req, res, next) => {
	// name
	req.check('name','Writ your name').notEmpty();
	req.check('name','Title must have not matching the length').isLength({
		min:4,
		max:150
	});

	// code
	req.check('code','Write code').notEmpty();
	req.check('code','Code must have not matching the length').isLength({
		min:4,
		max:150
	});
	
	// check for errors
	const errors = req.validationErrors();
	// if errors show the first one as they happen
	if(errors){
		const firstError = errors.map((error)=>error.msg)[0]
		return res.status(400).json({error:firstError});

		// proceed to next middleware
		next();
	} 
};