import { AxiosRequestConfig } from 'axios';

export interface IGetsParams {
	limit?: number;
	page?: number;
	[key: string]: any;
}

export interface IformData {
	id: number | string;
	[key: string]: any;
}

export default abstract class {
	abstract apiUrl: string;

	async delete(id: number | string) {
		return await useDelete(`${this.apiUrl}/${id}`);
	}

	async get(id: number | string) {
		return await useGet(`${this.apiUrl}/${id}`);
	}

	async getList(params: IGetsParams = {}) {
		return await useGet(`${this.apiUrl}/list`, params);
	}

	async save(formData: IformData, useFormData: boolean = false, config?: AxiosRequestConfig) {
		let url = this.apiUrl;
		if (formData.id) url += `/${formData.id}`
		if (useFormData) {
			const f = new FormData();
			for (const key in formData) f.append(key, formData[key]);
			return await usePut(url, f, config);
		}

		return await usePut(url, formData, config);
	}
}
