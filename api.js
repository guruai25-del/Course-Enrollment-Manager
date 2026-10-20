import axios from 'axios';

// Base URL of JSON Server (started with `npm run api`)
const api = axios.create({ baseURL: 'http://localhost:3001' });

// Generic CRUD helpers used by every page
export const getAll = (resource) => api.get(`/${resource}`).then((r) => r.data);
export const getOne = (resource, id) => api.get(`/${resource}/${id}`).then((r) => r.data);
export const create = (resource, data) => api.post(`/${resource}`, data).then((r) => r.data);
export const update = (resource, id, data) => api.put(`/${resource}/${id}`, data).then((r) => r.data);
export const remove = (resource, id) => api.delete(`/${resource}/${id}`);

export default api;
