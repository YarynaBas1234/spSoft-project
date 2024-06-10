export interface ILoginResponse {
	data?: { id: string; name: string };
	error?: string;
}

export interface ILoginParams {
	login: string;
	password: string;
}
