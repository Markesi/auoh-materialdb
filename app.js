const express = require('express');
const port = process.env.PORT || 8080; // PORT is CASE-sensitive
const app = express();

const body_parser = require('body-parser');

const material_controller = require('./material_controller');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true})); // material/id

app.use( (req, res, next)=>{
    console.log(req.method, ' ', req.path);
    next();
}); // GET /api/material

//RESTful API

//CRUD operations

// CREATE

// READ

// Having a domain: api.domain.com/materials
app.get("/api/materials", material_controller.api_get_materials);
// UPDATE


app.listen(port);