import express from 'express'
import mongoose from 'mongoose'
import db from './db/conn.js'
import bodyParser from 'body-parser'
import indexrouter from './routes/index.js'




const app=express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




   app.use("/",indexrouter)





app.set('view engine','ejs')
app.set('views','./views')

app.listen(3000)

console.log("http://localhost:3000")

