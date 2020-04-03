//CRUD

// pay attention to the path, has to be ./
const material_model = require('./material_model.js');


//CREATE
const api_post_material = (req, res, next) =>{
    console.log('api_post_material');
   // let data = req.body;
   let data = {
       name: req.body.name,
       min_density: req.body.min_density,
       max_density: req.body.max_density,
       min_strength: req.body.min_strength,
       max_strength: req.body.max_strength,
       min_strength_density: req.body.min_strength / req.body.max_density,
       max_strength_density: req.body.max_strength / req.body.min_density
   }

   let new_material = material_model(data);
   new api_post_material.save().then(()=>{
        console.log(new_material);
        res.end(JSON.stringify(new_material));

   }).catch(err => {
        res.status(500);
        console.log(err);
   });
    // console.log(data);
    // res.end(JSON.stringify(data));
};

//READ 

const api_get_materials = (req, res, next) =>{
    console.log('api_get_materials');

    material_model.find({}).lean().then(materials=>{
            res.send(JSON.stringify(materials));
    }).catch (err => {
        res.status(500);
        console.log(err);
    });
};


//UPDATE

//DELETE
const api_delete_material = (req, res, next) =>{
    let id= req.params.id;

// .findOneAndDelete{(name: id)}.then does not require id to delete an item
    material_model.findByIdAndRemove(id).then(()=>{
        res.send();
    }).catch (err => {
        res.status(500);
        console.log(err);
    });

};

//EXPORTS
module.exports.api_post_material = api_post_material;
module.exports.api_get_materials = api_get_materials;
module.exports.api_delete_material = api_delete_material;