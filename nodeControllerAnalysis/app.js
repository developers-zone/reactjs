const express = require('express');
const app = express();
// middleware
const morgan =require('morgan');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, 
										 useUnifiedTopology: true }).then(()=> {
										 	console.log("Database connected");
										 	console.log("Database got connected...!!");
										 });

mongoose.connection.on('error', err => {
	console.log(err.message);
})

// body-parser
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
app.use(bodyParser.json());


// express-validator
app.use(expressValidator());

// bring in routes
// const postRoutes = require('./routes/post');
// app.get('/', postRoutes.getPosts);

// object Destructuring
// const { getPosts } = require('./routes/post');

// middleware
// const myMiddleware = (req, res, next)=>{
// 	console.log("middleware applied succesfully");
// 	next();
// }
// app.use(morgan('dev'));
// app.use(myMiddleware);

// app.get('/', getPosts);

const postRoutes = require('./routes/post');
app.use('/',postRoutes);
app.use('/title',postRoutes);
// console.log(process.env.PORT);
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Port is listening to '+port);
});