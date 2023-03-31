import { commentQueries } from '../database/commentQuery'
import { getConnection, sql } from '../database/configuration/connection';


/**
 * Esta función elimina un comentario por su ID
 * @param {req} req 
 * @param {res} res 
 */
export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('idComment', id)
            .query(commentQueries.deleteCommentById)
        res.status(200);
        res.json(result.rowsAffected);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const createComment = async(req, res) => {
    try {
        if (req.body == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields'});
        } else {
            const pool = await getConnection();
            var result = await pool.request()
                .input("idFunding", sql.Int, req.body.idFunding)
                .input("idUser", sql.Int, req.body.idUser)
                .input("comment", sql.VarChar, req.body.comment)
                .query(commentQueries.createNewComment);
            res.json(req.body);
        }
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const getComments = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('idFunding', id)
            .query(commentQueries.getComments);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
