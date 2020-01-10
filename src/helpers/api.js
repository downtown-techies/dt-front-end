import axios from 'axios';

export const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;

const instance = axios.create({
  baseUrl: apiBaseUrl,
});

const get = (path, token, config) => {
  return instance.request({
    url: path,
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    ...config,
  });
};

const destroy = (path, token, config) => {
  return instance.request({
    url: path,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    crossdomain: true,
    ...config,
  });
};

const post = (path, data, token, config) => {
  return instance.request({
    url: path,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    crossdomain: true,
    ...config,
  });
};

const securePost = (path, data, token, config) => {
  return instance.request({
    url: path,
    method: 'post',
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    crossdomain: true,
    ...config,
  });
};

export const apiRequest = {
  get,
  post,
  securePost,
  destroy
};

