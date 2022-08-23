import express from 'express'
import User from '../models/data.js'

const indexrouter=express.Router()

// GET METHOD  START.............................................................................................
indexrouter.get("/data",async(req,res)=>{

   try{
       const get= await User.find()
   
       res.send(get)
      
       }catch(err){
   
        res.send(err)
       }
})
// GET METHOD  END.............................................................................................


// POST API START...........................................................................................................
indexrouter.post("/user",(req,res,next)=>{

  const user = new User(req.body)

  user.save().then(()=>{
      res.status(201).send(user)
  }).catch((err)=>{

      res.status(400).send(err)
  }) 
})
// POST API END..........................................................................................................



// GET PAGINATION START..................................................................................................

indexrouter.get("/page",async(req,res,next)=>{

    try{

        const {page=1, limit=15 ,sort,select,search=""}=req.query;

        const data= await User.find({name:{$regex: search, $options: "i" }})         

            .sort({[sort]:1})        // sorting name, id ,etc

            .limit(limit * 1)       // apply limit to show data

            . skip((page-1) * limit)     // pagination formula

          // .select({name:1})         // show the name 

            res.send({page:page, limit:limit, data:data})


            const total = await User.countDocuments({
        
                         name: { $regex: search, $options: "i" }   // search name according
                     });


    }catch (error) {

        console.log(error)

        res.status(500).json({

            error:error
        })
    }
})
// GET PAGINATION END..................................................................................................
 export default indexrouter

