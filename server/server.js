const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"bvessv727wtdruxnly1c-mysql.services.clever-cloud.com",
    user:"u0tpois3cll4dapd",
    password:"uwa5I8pgvVWrGS49vbUD",
    database:"bvessv727wtdruxnly1c"
})

app.get('/',(req,res)=>{
    const sql="SELECT Ename, Eid, Edept, DATE_FORMAT(Edob, '%d-%m-%Y') as Edob, Egender, Edesign, Esalary, Eaddress, Elocation, Epincode, Eexperience, Eage FROM Employee"; // Using DATE_FORMAT to format the date
    db.query(sql,(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
})

app.post('/Homenew', (req, res) => {
    console.log("postdata");  
    console.log("req-post:", req.body);  
    const sql = "INSERT INTO Employee (Ename, Eid, Edept, Edob, Egender, Edesign, Esalary, Eaddress, Elocation, Epincode, Eexperience, Eage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        
        req.body.Ename,
        req.body.Eid,
        req.body.Edept,
        req.body.Edob,
        req.body.Egender,
        req.body.Edesign,
        req.body.Esalary,
        req.body.Eaddress,
        req.body.Elocation,
        req.body.Epincode,
        req.body.Eexperience,
        req.body.Eage,
    ];
    console.log("completed");
    console.log(values);

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("created");
    });
    res.status(200).send({message:"created"}); 
});

  
app.delete('/:Eid', (req, res, next) => {
    const sql = "DELETE FROM Employee WHERE Eid= ?";
    const Eid=req.params.Eid;

    db.query(sql, [Eid], (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("deleted");
    });
});



app.listen(8081, ()=>{
    console.log("Listening...");
})