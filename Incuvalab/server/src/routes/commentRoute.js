import { Router } from 'express';
import { getComments, createComment, deleteCommentById } from '../controllers/commentController';


const router = Router();

/**
 * Método GET para obtener un comentario por su ID
 * @name /comments/:id - [GET]
 */
router.get('/comments/:id', getComments);

/**
 * Método POST crear un comentario
 * @name /comment - [POST]
 */
router.post('/comment', createComment);

/**
 * Método DELETE eliminar un comentario por su ID
 * @name /comment/:id - [DELETE]
 */
router.delete('/comment/:id', deleteCommentById);

export default router;