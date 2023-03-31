import { Router } from 'express';
import { updateCategoryById, getCategorys, createCategory, getCategoryById, deleteCategoryById, getCountCategory } from '../controllers/categoryController';


const router = Router();

/**
 * Método GET para obtener categorias
 * @name /categorys - [GET]
 */
router.get('/categorys', getCategorys);

/**
 * Método GET para retornar la cantidad de categorias
 * @name /categorys/count - [GET]
 */
 router.get('/categorys/count', getCountCategory);

/**
 * Método GET para retornar una cetegoria por id
 * @name /categorys/:id - [GET]
 */
router.get('/categorys/:id', getCategoryById);

/**
 * Método POST para crear categorias
 * @name /categorys - [POST]
 */
 router.post('/categorys', createCategory);

/**
 * Método PUT actualizar una categoria por su id
 * @name /categorys/:id - [PUT]
 */
router.put('/categorys/:id', updateCategoryById);

/**
 * Método DELETE para eliminar una categoria por su id
 * @name /categorys/:id - [DELETE]
 */
router.delete('/categorys/:id', deleteCategoryById);

export default router;