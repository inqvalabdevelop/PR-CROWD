import axios from "axios";

export const getPostsRequest = async () => await axios.get("/confirm/donations");

export const getPostRequest = async (id) => await axios.get("/confirm/donations" + id);

export const deletePostRequest = async (id) =>
  await axios.delete("/confirm/donations" + id);

export const createPostRequest = async (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("/confirm/donations", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  return axios.put("/confirm/donations" + id, newPostFields);
};