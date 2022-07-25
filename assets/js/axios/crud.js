import { CanceledError } from "axios";
import axiosClient from "./config.js";
export async function getRequest(url) {
  try {
    const response = await axiosClient.get(`/${url}.json`);
    if (response && response.data) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else {
      console.log(error.message);
    }
  }
}

export async function deleteRequest(url, payload) {
  try {
    const response = await axiosClient.delete(`/${url}/${payload}`);
    if (response && response.data) {
      console.log(response);
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function putRequest(id, post) {
  try {
    const api = "/posts/" + id + ".json";

    console.log("api", api);
    const response = await axiosClient.put(api, {
      ...post,
      lastUpdated: new Date(),
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function postRequest(url, payload) {
  try {
    const response = await axiosClient.post(`/${url}.json`, {
      lastUpdated: new Date(),
      ...payload,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("error in response", error.response.data);
    }
    console.log("error happend");
  }
}
