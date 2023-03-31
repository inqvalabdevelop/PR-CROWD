import { Router } from 'express';
import { updateUserById, createUser, 
    deleteUserById, 
    getLoginUser, getTypeUserById, 
    getUserEditList, getUserDonateFunding, 
    getEmailVerification, restoreForgetPassword, 
    setPasswordForget, createAdmin,
    updatePasswordByUserId, getUsers, 
    getUserById, getCountFundingsCreateByUserId, 
    getTitleFundingByUserId,  getCountDonationsByUserId , 
    getTitleOfFundingDonateByUserId, getTitleOfFollowedFundingByUserId, 
    getCountFollowedByUserId, setUserFollowedInsert } from '../controllers/userController';

const router = Router();

/**
 * Método GET retornar tipo de usuario por ID
 * @name /userType/:id - [GET]
 */
router.get('/userType/:id', getTypeUserById);

/**
 * Método GET retornar todos los usuarios
 * @name /userlist - [GET]
 */
router.get('/userlist', getUserEditList);

/**
 * Método GET retornar usuario donador por ID
 * @name /userDonate/:id - [GET]
 */
router.get('/userDonate/:id', getUserDonateFunding);

/**
 * Método GET retornar usuarioS
 * @name /users - [GET]
 */
router.get('/users', getUsers);

/**
 * Método GET retornar usuario por ID
 * @name /users/:id - [GET]
 */
router.get('/users/:id', getUserById);

/**
 * Método GET reotrnar cantidad de emprendimientos creados por el ID  del usuario
 * @name /users/countFunding/:id - [GET]
 */
router.get('/users/countFunding/:id', getCountFundingsCreateByUserId);

/**
 * Método GET reotrnar cantidad de emprensimientos donados por el ID  del usuario
 * @name /users/countDonated/:id - [GET]
 */
router.get('/users/countDonated/:id',  getCountDonationsByUserId );

/**
 * Método GET reotrnar cantidad de emprensimientos seguidas por el ID  del usuario
 * @name /users/countFollowed/:id - [GET]
 */
router.get('/users/countFollowed/:id', getCountFollowedByUserId);

/**
 * Método GET retornar lista de emprendimientos creados por ID del usuario
 * @name /users/TitleFunding/:id - [GET]
 */
router.get('/users/TitleFunding/:id', getTitleFundingByUserId);

/**
 * Método GET retornar lista de emprendimientos donados por ID del usuario
 * @name /users/TitleFundingDonated/:id - [GET]
 */
router.get('/users/TitleFundingDonated/:id', getTitleOfFundingDonateByUserId);

/**
 * Método GET retornar lista de emprendimientos seguidos por ID del usuario
 * @name /users/Followed/:id - [GET]
 */
router.get('/users/Followed/:id', getTitleOfFollowedFundingByUserId);

/**
 * Método GET retornar usuario por ID
 * @name /user/:id - [GET]
 */
router.get('/user/:id', getUserById);

/**
 * Método POST enviar email de verificación
 * @name /email - [POST]
 */
router.post('/email', getEmailVerification)

/**
 * Método POST restaurar contraseña olvidada
 * @name /restoreForgetPassword - [POST]
 */
router.post('/restoreForgetPassword', restoreForgetPassword)

/**
 * Método POST 
 * @name /users/Followed/ - [POST]
 */
router.post('/users/Followed/', setUserFollowedInsert);

/**
 * Método POST crear usuarios
 * @name /user - [POST]
 */
router.post('/user', createUser);

/**
 * Método POST crear usuarios administrador
 * @name /new-admin - [POST]
 */
router.post('/new-admin', createAdmin);

/**
 * Método POST login
 * @name /userLogin - [POST]
 */
router.post('/userLogin', getLoginUser);

/**
 * Método PUT modificar contraseña
 * @name /setPassword - [PUT]
 */
router.put('/setPassword', setPasswordForget)

/**
 * Método PUT modificar datos de usuario
 * @name /user/:id - [PUT]
 */
router.put('/user/:id', updateUserById);

/**
 * Método PUT cambiar contraseña
 * @name /users/changePassword/:id - [PUT]
 */
router.put('/users/changePassword/:id', updatePasswordByUserId);

/**
 * Método DELETE eliminar usuario
 * @name /user/:id - [DELETE]
 */
router.delete('/user/:id', deleteUserById);

export default router;