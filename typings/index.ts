export interface Dict<T> {
	[key: string]: T;
}

export interface GetStateResponse {
	ia: boolean; // Is admin
	id: boolean; // Inited
	lg: boolean; // Logined
}

export interface InitConfigFormData {
	account: string;
	nginx: NginxConfig;
	password: string;
}

export interface NginxConfig {
	configPath: string;
	dir: string;
	reloadCommand: string;
	restartCommand: string;
}
