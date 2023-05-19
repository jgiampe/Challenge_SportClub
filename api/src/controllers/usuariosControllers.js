const Usuario = require ('../db.js')

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${year}-${month}-${day}`;
}


const getUsers = async () => {
    try {
        const usuarios = await Usuario.find()
        return usuarios
        
    } catch (error) {
        throw (error)
    }
}

const createUser = async ({nombre, apellido, dni, nacimiento, email, celular}) => {
    
    try {
        const usuario = new Usuario ({
            nombre,
            apellido,
            dni,
            nacimiento: formatDate(new Date(nacimiento)),   // recibe fecha yyyy-mm-dd
            email,
            celular,
        });
        const resultado = await usuario.save()
        console.log(resultado);
        return resultado
        
    } catch (error) {
        // throw (error)
        // console.log(Object.keys(error.keyPattern)[0])
        let key = Object.keys(error.keyPattern || {})
        
        //DNI o email repetido
        if(key.length){
            throw `Ya existe una cuenta con este ${key[0]}`
        }

        const incomplete = error.message?.split("`")[1]
        // console.log(incomplete)
        if(incomplete.length)
            throw `Debe insertar ${incomplete}`
        // console.log (Object.keys(error.errors))
        
        
        const validationError = error.message?.split(": ")[2]
        if(validationError)
            throw validationError
    }
}

const updateUser = async (id, data) => {

    try {

        const usuario = await Usuario.updateOne({_id:id},
        {
            $set:data,
        })
        // console.log(usuario)
    } catch (error) {
        throw (error)
    }
}

const deleteUser = async (id) => {
    try {
        const usuario = await Usuario.deleteOne({_id:id})
        if(!usuario.deletedCount)
            throw 'User not found'
        } catch (error) {
        if(error === 'User not found')
            throw error
        throw 'Wrong ID'
    }
}

// getUsuarios()
// createUser({nombre:'Raul', apellido:"Lopez", dni:35333122, nacimiento:'1988-12-03', email:'rlopez@gmail.com', celular:1154645454})
// updateUser("64665b9a1c60dd1333065ef2", {nombre: "Manuela", apellido: "Pereyra"})
// deleteUser("6466a2bf32e9d3acf12beca8")
// deleteUser("6466a2bf32e9d3acf12beca8")
module.exports = {getUsers, createUser, updateUser, deleteUser}