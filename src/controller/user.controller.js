const model = require('../database/modelo/index');

const getUsers = async (req,res) =>{
    // res.send("bienvenido GET TOTAL");
    const users = await model.User.findAll()
    return res.status(200).json({users})
}

const addUser = async (req,res)=>{
    const data = req.body;
    // res.send("Agregare un usuario" + data);
    const inserted = await model.User.create(data);
    return res.status(201).json({inserted})
}

const deleteUser = async (req,res) =>{
    const {id} = req.params
    await model.User.destroy({where: { id : id }})
    const users = await model.User.findAll()
    return res.status(200).json({users})
}

const updateUser = async (req,res) =>{
    const {id} = req.params
    const data = req.body
    const updated = await model.User.update(data,{where: { id : id }});
    console.log(updated)
    const user = await model.User.findByPk(id)
    return res.status(200).json({user})
}

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser
}