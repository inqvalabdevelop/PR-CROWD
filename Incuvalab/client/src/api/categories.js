import axios from 'axios'

export const getAllCategorysRequest = async () => await axios.get('/categorys');

export const getCatRequests = async () => await axios.get('/categorys')