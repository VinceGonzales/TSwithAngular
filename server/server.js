const express = require('express');
const path = require('path');
const api = require('./routes/api');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
var optionStatic = {
	dotfiles: 'ignore',
	extensions: ['htm', 'html'],
	setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now())
	}
};
app.use(express.static(path.join(__dirname, 'dist'), optionStatic));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', api); // Set our api routes 
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
}); //Catch all other routes and return the index file

const port = process.env.PORT || '3000';  //port setting
app.set('port', port);
app.listen(port, ()=> console.log(`Listening at localhost:${port}`));
