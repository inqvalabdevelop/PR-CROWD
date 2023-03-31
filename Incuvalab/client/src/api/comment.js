import axios from 'axios';

export const createCommentRequest = async (comment) => await axios.post('/comment', comment)

export const deleteCommentRequest = async (idComment) => await axios.delete('/comment/'+ idComment)

export const getCommentsRequest = async (idFunding) => await axios.get('/comments/'+ idFunding)
