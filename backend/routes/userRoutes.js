import express from 'express';
import UserData from '../models/userModel.js'; // import without curly braces for default export

const router = express.Router();

// GET all users
router.get('', async (req, res) => {
  try {
    const users = await UserData.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//singleuser
router.get("/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const response=await UserData.find({_id:id})
        res.status(201).json(response)
    }
    catch(err){
        res.status(500).json({message:err.error})
    }
})


// POST a new user
router.post('', async (req, res) => {
  const user = new UserData({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete('/:id',async(req,res)=>{
    const {id}=req.params
    try{
        const userdeleted=await UserData.findByIdAndDelete({_id:id})
        res.status(201).json(userdeleted)

    }
    catch(err){
        res.status(500).json({message:err.message})

    }

})
router.patch('/update/:id',async(req,res)=>{
    const {id}=req.params
    const{name,email,password}=req.body
    try{
        const updateuserData=await UserData.findByIdAndUpdate(id,req.body,{new:true,})
        res.status(201).json(updateuserData)
    }
    catch(err){
        res.status(500).json({message:err.error})
    }


})
export default router;
