const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Jeremias:eljerepro1234@cluster0.m9chg.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
  username: String,
  edad: Number,
})

const crear = async () => {
  const user = new User({username: 'Jeremias es buen pibe', edad: 20})
  const crearUser = await user.save()
  console.log(crearUser)
}
/* crear() - Crear usuario */


const buscarTodosUser = async () => {
  const users = await User.find()
  console.log(users)
}
/* buscarTodosUser() - Buscar todos los usuarios */


const buscarUno = async () => {
  const user = await User.findOne({username: 'Jeremias'})
  console.log(user)
}

/* buscarUno() - Buscar un usuario */


const actualizar = async () => {
  const user = await User.findOne({username: 'Jeremias'})
  console.log(user)
  user.edad = 30
  await user.save()
}

/* actualizar - Actualiza un usuario */


const eliminar = async () => {
  const user = await User.findOne({username: 'Sofia'})
  console.log(user)
  if (user){
    await user.remove()
  }
}












