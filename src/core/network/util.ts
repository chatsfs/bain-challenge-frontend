import axios, { AxiosRequestConfig } from 'axios';

type RequestConfig = {
  data?: any;
} & AxiosRequestConfig;

export const APIManager = {
  async get<T = any>(url: string, config: RequestConfig = {}) {
    return axios.get<T>(url, { ...config });
  },

  async patch<T = any>(url: string, config: RequestConfig = {}) {
    const { data, ...rest } = config;
    return axios.patch<T>(url, data, { ...rest });
  },

  async post<T = any>(url: string, config: RequestConfig = {}) {
    const { data, ...rest } = config;
    return axios.post<T>(url, data, { ...rest });
  },

  async put<T = any>(url: string, config: RequestConfig = {}) {
    const { data, ...rest } = config;
    return axios.put<T>(url, data, { ...rest });
  },

  async delete<T = any>(url: string, config: RequestConfig = {}) {
    return axios.delete<T>(url, { ...config });
  },
};
