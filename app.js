var express = require('express');
var app = express();

app.use(express.static('views'));

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs')

//Mongo DB connection
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignmentdb');

var Schema =mongoose.Schema;

var recieverSchema = new Schema({
email:String,
date:String,
amount:Number,
currency:String,
servicecharge:String

});

var Reciever=mongoose.model('Reciever',recieverSchema);



//Opens welcome page can move to controller
app.get('/welcome', function (req, res) {
   res.render('welcome');
})


//Opens send money page
app.get('/sendMoney',function(req,res){
	console.log("In send money")
res.render('sendMoney');

});


//*** Save Data to mongo db and redirect to success page
app.post('/success',function(req,res){

var finalAmount = parseInt(req.body.amount);
console.log(req.body.servicecharge)
if(req.body.servicecharge=="ToServices")
{

finalAmount= parseInt(req.body.amount) + (((req.body.amount) * 2) / 100);

}


console.log("On success page");
var newreciever= Reciever({
email:req.body.email,
date:req.body.date,
amount:finalAmount,
//Please uncomment the above line and uncomment the below one to check the error handling
//amount:"somestring",
currency:req.body.currency,
servicecharge:req.body.servicecharge

});

newreciever.save(function(err)
{

	if (err)

	{
		//Sends the server error to user in user readable format. 
		res.status(err.status || 500);
        res.render('error', {
            status: err.status,
            message: err.message,
            error: err
        });

	}
	else
	{
res.render('success',{ data: newreciever.email });

	}


});


});


//View transaction history
app.get('/viewHistory',function(req,res){
console.log("In View Transcation")



	Reciever.find({},function(err,users){

    	if (err)

	{
		res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
	}
	else
	{

    var data=JSON.stringify(users);

     res.render('viewHistory',{ data: data });
}
});


});



app.listen(1337);

console.log("Server is listing to 1337");