export const commentQueries = {
    getComments: "SELECT C.IdComment, CONCAT(U.Name, ' ', U.LastName) AS Name, C.Comment, C.RegisterDate FROM Comments C INNER JOIN Users U ON U.IdUser = C.IdUser WHERE C.IdFunding = @idFunding ORDER BY  C.RegisterDate DESC",
    createNewComment: "INSERT INTO Comments(IdFunding, IdUser, Comment) VALUES (@idFunding , @idUser, @comment)",
    deleteCommentById: "DELETE FROM Comments WHERE IdComment = @idComment"
}