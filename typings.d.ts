export interface IDict<T> {
	[key: string]: T;
}

export interface StateRes {
	ia: boolean; // Is admin
	id: boolean; // Inited
	lg: boolean; // Logined
}
