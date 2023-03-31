import axios from 'axios';

/*export const getFundingByIdRequest = async (idFunding) => await axios.get('/funding/'+idFunding)
export const getFundingTop3Request = async () => await axios.get('/fundingRank3')*/

export const getFundingByIdRequest = async (idFunding) => await axios.get('/funding/'+idFunding)

export const getFundingTop3Request = async () => await axios.get('/fundingRank3')

export const getFundsRequests = async () => await axios.get('/funding')

export const getFundsRequestsByCat = async (id) => await axios.get('/funding/category/' + id)

export const getFundsAprobeRequests = async () => await axios.get('/request-funding')

export const getFundsErasedRequests = async () => await axios.get('/oldfunding')

export const getFundsCompletedRequests = async () => await axios.get('/fullfunding')

export const aproveRequestsOfList = async (id) => await axios.put('/funding/aprove/' + id)

export const moveRequestToBault = async (id) => await axios.put('/funding/move/' + id)

export const removeRequestFromBault = async (id) => await axios.put('/funding/restore/' + id)

export const permanentDeleteRequest = async (id) => await axios.delete('/funding/delete/' + id)


export const getPostsRequest = async () => await axios.get("/Funding/rank");

export const getPostRequest = async (id) => await axios.get("/Funding/rank" + id);

export const deletePostRequest = async (id) =>
  await axios.delete("/Funding/rank" + id);

export const createPostRequest = async (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("/Funding/rank", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  return axios.put("/Funding/rank" + id, newPostFields);
};

export const getFundByNameRequest = async (post) => await axios.post('/funding/name', post) 

export const putFundingRequest = async (funding) => 
{
    const form = new FormData()

    for (let key in funding) {
       form.append(key, funding[key])
    }

    return await axios.put('/updateFunding',  form,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export const createFundingRequest = async (funding) => {
  const form = new FormData();

  for (let key in funding) {
     form.append(key, funding[key]);
  }
  
 return await axios.post("/funding", form,{
      headers: {
          "Content-Type": "multipart/form-data"
      }
  });
}

