const {getUsers, createUser, updateUser, deleteUser} = require ('../controllers/usuariosControllers.js')



const getUsersHandler = async (req,res) =>{
    let users;
    console.log
    try {
        users = await getUsers();
        if (users.length)
            res.status(200).json(users)
        else res.status(404).send('Aun no hay usuarios')
    } catch (error) {
        console.log(error)
    }
}


const createUserHandler = async (req,res) => {
    try {
        const {nombre = '', apellido = '', dni = 0, nacimiento = '', email = '', celular = 0} = req.body;
        const newUser = {nombre, apellido, dni, nacimiento, email, celular}
        await createUser(newUser);
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json(error)
        console.log('Error: '+error)
    }
}

const updateUserHandler = async (req,res) => {
    const {id} = req.params;
    console.log(id)
    const {nombre, apellido, dni, nacimiento, email, celular} = req.body
    const data = {
        ...(nombre && { nombre }),
        ...(apellido && { apellido }),
        ...(dni && { dni }),
        ...(nacimiento && { nacimiento }),
        ...(email && { email }),
        ...(celular && { celular }),
    }
    if (!Object.keys(data).length)
        return res.status(404).send('Debe ingresar alguna modificación')

    try {
        await updateUser(id, data)
        res.status(200).send("Usuario modificado correctamente")

    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }

}

const deleteUserHandler = async (req,res) => {
    const {id} = req.params;

    try {
        await deleteUser(id)
        res.status(200).send('Usuario eliminado correctamente')
    } catch (error) {
        res.status(400).send(error)
    }

}


module.exports = {getUsersHandler, createUserHandler, updateUserHandler, deleteUserHandler}