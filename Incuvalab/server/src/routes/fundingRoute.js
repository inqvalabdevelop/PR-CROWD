import { Router } from 'express';
import { updateFunding, setRanckFunding, 
    createFunding, getFunding, 
    getFundingByCat, getFundingById, 
    getOldFunding, getQuestionFunding, 
    getAllFundingBySameName, getAllCompleteFunding, 
    setRanckTop3, deletePointedFunding, 
    deletePointedLogicalFunding, AproveFunding,
     restoreBaultedFunding } from '../controllers/fundingController';

const router = Router();

/**
 * Método GET retornar rancking de emprendimientos
 * @name /funding/rank - [GET]
 */
router.get('/funding/rank', setRanckFunding);

/**
 * Método GET retornar enprendimiento por ID
 * @name /funding/:id - [GET]
 */
router.get('/funding/:id', getFundingById);

/**
 * Método GET 
 * @name /request-funding - [GET]
 */
router.get('/request-funding', getQuestionFunding);

/**
 * Método GET retornar emprendimientos
 * @name /funding - [GET]
 */
router.get('/funding', getFunding);

/**
 * Método GET 
 * @name /oldfunding - [GET]
 */
router.get('/oldfunding', getOldFunding);

/**
 * Método GET 
 * @name //fullfunding - [GET]
 */
router.get('/fullfunding', getAllCompleteFunding);

/**
 * Método GET 
 * @name /funding/category/:id - [GET]
 */
router.get('/funding/category/:id', getFundingByCat);

/**
 * Método GET retornar top 3 en recaudación de emprendimientos
 * @name /fundingRank3 - [GET]
 */
router.get('/fundingRank3' , setRanckTop3 );

/**
 * Método POST 
 * @name /funding/name - [POST]
 */
router.post('/funding/name' , getAllFundingBySameName);

/**
 * Método POST crear emprendimiento 
 * @name /funding - [POST]
 */
router.post('/funding', createFunding);

/**
 * Método PUT aprobar emprendimiento
 * @name /funding/aprove/:id - [PUT]
 */
router.put('/funding/aprove/:id', AproveFunding);

/**
 * Método PUT restaurar emprendimiento
 * @name /funding/restore/:id - [PUT]
 */
router.put('/funding/restore/:id', restoreBaultedFunding);

/**
 * Método PUT eliminación lógica de emprendimiento
 * @name /funding/move/:id - [PUT]
 */
router.put('/funding/move/:id', deletePointedLogicalFunding);

/**
 * Método PUT actualizar información de emprendimiento
 * @name /updateFunding - [PUT]
 */
router.put('/updateFunding', updateFunding);

/**
 * Método DELETE Eeliminar emprendimiento totalmente
 * @name /funding/delete/:id - [DELETE]
 */
router.delete('/funding/delete/:id', deletePointedFunding);


export default router;