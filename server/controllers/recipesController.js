//CONTROLLER CODE//

import recipes from "../models/recipesmodel.js";

//create a new user
export const createrecipes = async (req,res) =>{
    try{
        const recipesData=recipes(req.body);
        if(!recipesData){
            return res.status(404).json({msg: "User not found"})
        }
        await recipesData.save();//async and await function comes together
        res.status(200).json({msg:"user craeted successfully..!"});

    }
    catch(err){
        res.status(500).json({error:error.message});

    }

}

export const getallrecipes=async(req,res)=>{
    try{
        const recipesData = await recipes.find();
        if(!recipesData){
            return res.status(404).json({msg:"User not found"});
        }
        res.status(200).json(recipesData);
    }
   catch (err)   {
    res.status(500).json({error:err.message});
   }   
}

export const getonerecipes = async (req,res)=>{
    try{
        const id=req.params.id;
        const recipesdata = await recipes.findById(id); // this[User.find] will bring the data from database
        if(!recipesdata){
            return res.status(404).json({msg:"User not found"});
        }
        res.status(200).json(recipesdata); // we are here not giving parameter to print messsage but directly passing the parameter to retrieva the
    }

    catch(err){
        res.status(500).json({error:err.message});

    }
}


export const updaterecipes = async(req,res)=>{
try{
    const id = req.params.id;
    const recipesExist = await recipes.findById(id);
    if(!recipesExist){
        return res.status(404).json({msg:"user not found"});
    }
    await recipes.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json(recipesExist);
    //res.status(200).json({msg : "user updated successfully"});
}
catch(err){
    res.status(500).json({error:err.message})
}
}

export const deleterecipes = async(req,res)=>{
    try{
        const id = req.params.id;
        const recipesExist = await recipes.findById(id);
        if(!recipesExist){
            return res.status(404).json({msg:"user not found"});
        }
        await recipes.findByIdAndDelete(id,req.body,{new:true})
    res.status(200).json(recipesExist);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
    };
