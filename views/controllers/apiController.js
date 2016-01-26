//Currently only app.js will run ther entire server code but this is an exmpale how we can seperate the code in controllers.

module.exports=function(app)
{

	//Opnes welcome page
app.get('/welcome', function (req, res) {
   res.render('welcome');
})


//Opens send money page
app.get('/sendMoney',function(req,res){
	console.log("i m in send money")
res.render('sendMoney');

});


//*** Save Data to mongo db and redirect to success page
app.post('/success',function(req,res){
console.log("On success page");
var newreciever= Reciever({
email:req.body.email,
date:req.body.date,

amount:req.body.amount,
//Please uncomment the above line and uncomment the below one to check the error handling
//amount:"somestring",

currency:req.body.currency,

});

newreciever.save(function(err)
{

	if (err)

	{
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

}





