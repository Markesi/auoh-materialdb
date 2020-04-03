//CRUD


//CREATE
const api_post_material = (req, req, next) =>{
    console.log('api_post_material');
    let data = req.body;
    console.log(data);
    res.end(JSON.stringify(data));
};

//READ 

const api_get_materials = (req, res, next) =>{
    res.send(JSON.stringify([]));
};


//UPDATE

//DELETE

//EXPORTS
module.exports.api_post_material = api_post_material;
module.exports.api_get_materials = api_get_materials;