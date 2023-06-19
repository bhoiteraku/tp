var exp=require('express');
var mysql=require('mysql2');
var cors=require('cors');
var bp=require('body-parser');
var app=exp();
app.use=(cors())
app.use(bp.json());

var con=mysql.create.Connection({
host:"localhost",
user:"root",
password:"root",
databases:"test"
})

     con.Connect(function(err)
     {
      if(!err)
    console.log("conneted success");
   else
    console.log("connection failed");
   })

    app.get('/getEmps',function(req,res)
     { con.query('select * from emp10',function(err,result)
    {
     if(!err)
     {
     res.json(result);
       }
   });
})


app.post('/insertEmp',function(req,res){
	
        var empid = req.body.empid;
        var ename = req.body.ename;
        var sal = req.body.sal;
	var dept = req.body.dept;

        var query = "insert into emp10(EMPNO,ENAME,SAL,DEPTNO) values (?,?,?,?)";	
	con.query(query,[empid,ename,sal,dept],function(err){
	    if(!err)
		res.send("insertion success");
	    else
		res.send("insertion failed");
       })

});




app.listen(9000, function(){
console.log("express REST at 9000");
});





