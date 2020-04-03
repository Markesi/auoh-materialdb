const express = require('express');
const port = process.env.PORT || 8080; // PORT is CASE-sensitive

const mongoose = require('mongoose');
const app = express();

const body_parser = require('body-parser');

const material_controller = require('./material_controller');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true})); // material/id

app.use( (req, res, next)=>{
    console.log(req.method, ' ', req.path);
    next();
}); 

// GET /api/material

//RESTful API

//CRUD operations

// CREATE
app.post("/api/material", material_controller.api_post_material);
// READ

// Having a domain: api.domain.com/materials
app.get("/api/materials", material_controller.api_get_materials);
// UPDATE


//DELETE
app.delete("/api/material/:id", material_controller.api_delete_material);

// change password in password and test in materialdb (db name)
const database_uri = "mongodb+srv://server:YLkD1bOuprLl9oHp@cluster0-tvgsl.mongodb.net/materialdb?retryWrites=true&w=majority";

mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then( ()=>{
    console.log('database connected');
    app.listen(port);
}).catch((err =>{
    console.log(err);
}));

// YLkD1bOuprLl9oHp

// app.listen(port);