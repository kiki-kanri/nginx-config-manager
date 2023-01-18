import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosApi = axios.create({});

export interface IAxiosData {
	[key: number | string]: any;
}

export interface IAxiosResponse extends AxiosResponse {
	oldData?: string;
}

type formType = FormData | IAxiosData;

axiosApi.interceptors.response.use((response) => {
	return response;
}, ({ response }) => {
	response.oldData = response.data;
	response.data = 'error';
	return response;
});

async function request(
	url: string,
	method: string,
	params: IAxiosData = {},
	data: IAxiosData = {},
	config?: AxiosRequestConfig
): Promise<IAxiosResponse> {
	return await axiosApi.request({
		...(config || {}),
		data,
		method,
		params,
		url
	});
}

/**
 * Use delete method request.
 */
export const useDelete = async (url: string, params: IAxiosData = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'delete', params, {}, config);
}

export const $useDelete = async (url: string, params: IAxiosData = {}, config?: AxiosRequestConfig) => {
	return (await useDelete(url, params, config)).data;
}

/**
 * Use get method request.
 */
export const useGet = async (url: string, params: IAxiosData = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'get', params, {}, config);
}

export const $useGet = async (url: string, params: IAxiosData = {}, config?: AxiosRequestConfig) => {
	return (await useGet(url, params, config)).data;
}

/**
 * Use patch method request.
 */
export const usePatch = async (url: string, data: formType = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'patch', {}, data, config);
}

export const $usePatch = async (url: string, data: formType = {}, config?: AxiosRequestConfig) => {
	return (await usePatch(url, data, config)).data;
}

/**
 * Use post method request.
 */
export const usePost = async (url: string, data: formType = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'post', {}, data, config);
}

export const $usePost = async (url: string, data: formType = {}, config?: AxiosRequestConfig) => {
	return (await usePost(url, data, config)).data;
}

/**
 * Use put method request.
 */
export const usePut = async (url: string, data: formType = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'put', {}, data, config);
}

export const $usePut = async (url: string, data: formType = {}, config?: AxiosRequestConfig) => {
	return (await usePut(url, data, config)).data;
}
