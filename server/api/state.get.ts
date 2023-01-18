import { StateRes } from '@/typings';

export default defineEventHandler((event) => {
	return {
		ia: false,
		id: false,
		lg: false
	} as StateRes;
});
