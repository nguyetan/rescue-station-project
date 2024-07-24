import { BACKEND } from '../libs/config';
import Api from './api';

export const backendService = new Api({
  baseURL: BACKEND,
  withCredentials: true,
});
