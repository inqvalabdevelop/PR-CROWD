import axios from 'axios'

export const getUserRequest = async () => await axios.get('/users');

export const getUserByIdRequest = async (id) => await axios.get('/users/' + id);

export const getCountUserFundingRequest = async (id) => await axios.get('/users/countFunding/'+id);

export const getCountUserDonatedFundingRequest = async (id) => await axios.get('/users/countDonated/'+id);

export const getCountUserFollowedFundingRequest = async (id) => await axios.get('/users/countFollowed/'+id);


export const getUserFundingRequest = async (id) => await axios.get('/users/TitleFunding/'+id);
export const getUserDonatedFundingRequest = async (id) => await axios.get('/users/TitleFundingDonated/'+id);
export const getUserFollowedFundingRequest = async (id) => await axios.get('/users/Followed/'+id);
export const setFollowedFundingRequest = async (userFunding) => await axios.post("/users/Followed", userFunding);


export const getAllCategorysRequest = async () => await axios.get('/categorys');



export const changePassword = async (id, NewPassword) => await axios.put(`/users/change/${id}`,  NewPassword);

export const registerUserRequest = async (user) => await axios.post('/user', user)

export const loginUserRequest = async (user) => await axios.post('/userLogin', user)

export const getTypeUserRequest = async (id) => await axios.get('/userType/'+ id)

export const deleteReqById = async (id) => await axios.delete('/user/'+ id)

export const userListToEditRequest = async () => await axios.get('/userlist')

export const userDonateFundingRequest = async (id) => await axios.get('/userDonate/'+ id)

export const getemailCoincidencesRequest = async (emailSend) => await axios.post('/email', emailSend)

export const getNumberConfirmationRequest = async (emailSend) => await axios.post('/restoreForgetPassword', emailSend)

export const setPasswordForgetRequest = async (userRecoverPassword) => await axios.put('/setPassword', userRecoverPassword)

export const setUpdateUserRequest = async (id, user) => await axios.put('/user/'+id, user)

export const setUpdateAccountInfoRequest = async (id, user) => await axios.put('/users/changePassword/'+id, user)

export const registerAdminRequest = async (user) => await axios.post('/new-admin', user)
