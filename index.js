const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())
app.use(express.static('public'))



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

let _id=0;
let users=[];
let exercises=[];


app.post('/api/users',function(req,res){
    const username=req.body.username;
    _id++;
    const newUser={username,_id:_id.toString()};
    users.push(newUser);
    return res.status(200).json({
     username,
     _id,
    })
})

app.get('/api/users',function(req,res){
   return res.status(200).json(users)
})

app.post("/api/users/:_id/exercises",function(req,res){
     const _id=req.params._id;
     const userInfo=users.find((user)=>user._id===_id);
     
     if(!userInfo){
      return res.status(404).json({
        error:`No user found with id ${_id}`
      })
     }
     
     const {description, duration}=req.body;
     let date=req.body.date ? new Date(req.body.date):new Date();

     const exercise={
      _id,
      username:userInfo.username,
      date:date.toDateString(),
      duration:Number(duration),
      description
     }

     exercises.push(exercise);

    return res.status(200).json(exercise);
  }) 

app.get('/api/users/:_id/logs',function(req,res){
  const _id=req.params._id;
  
  const userInfo=users.find((user)=>user._id===_id);

  if(!userInfo){
    return res.status(404).json({
      error:"User not found"
    })
  }
  
  let userExercises=exercises.filter((exercise)=>exercise._id===_id);

  const {from,to,limit}=req.query;

  if(from){
    const fromDate=new Date(from);
    userExercises=userExercises.filter((ex)=>new Date(ex.date)>=fromDate);
  }

  if(to){
    const toDate=new Date(to);
    userExercises=userExercises.filter((ex)=>new Date(ex.date)<=toDate);
  }

  if(limit){
    userExercises=userExercises.slice(0,parseInt(limit));
  }

  res.status(200).json({
    _id,
    username:userInfo.username,
    count:userExercises.length,
    log:userExercises.map(({description,duration,date})=>({
      description,
      duration,
      date
    }))
  })
})  


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
