import { H3Event } from 'h3';

export const statusCode = (event: H3Event, status: number, message = '') => {
	event.node.res.statusCode = status;
	return message;
}

export const error = (event: H3Event, message = 'error') => statusCode(event, 500, message);
export const notFound = (event: H3Event, message = '') => statusCode(event, 404, message);
export const unprocessableEntity = (event: H3Event, message = '') => statusCode(event, 422, message);
