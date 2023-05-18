const { Router } = require('express');
const {getUsersHandler, createUserHandler, updateUserHandler, deleteUserHandler} = require ('../handlers/usuariosHandlers.js')

const router = Router();

router.get('/', getUsersHandler)
router.post('/', createUserHandler)
router.put('/:id', updateUserHandler)
router.delete('/:id', deleteUserHandler)

module.exports = router;
