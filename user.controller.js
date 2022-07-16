// Aqui se encuentran los endpoints

const Users = require('./user')

const User = {

  get: async (req, res) => {
    const { id } = req.params
    const user = await Users.findById({_id: id})
    res.status(200).send(user)
  },
  list: async (req,res) => {
    const users = await Users.find()
    res.status(200).send(users)
  },
  create: async (req,res) => {
    console.log(req.body)
    const user = new Users(req.body)
    const saveUser = await user.save()
    res.status(201).send(saveUser._id)
  },
  update: async (req,res) => {
    const { id } = req.params
    const user = Users.findOne({ _id: id })
    Object.assign(user, req.body)
    await user.Save()
    res.sendStatus(204)
  },
  destroy: async (req,res) => {
    const { id } = req.params
    const user = new Users({_id: id})
    if(user){
      user.remove()
    }
    res.sendStatus(204)
  }

}

module.exports = User