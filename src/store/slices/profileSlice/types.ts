export enum USER_ROLES {
	ADMIN = 'Admin',
	SIMPLE_USER = 'Simple User',
}

export type Profile = {
	id: string;
	name: string;
} | null

export interface IProfileInitialState {
	profile: Profile;
}

export interface IUserRoleResponse {
	role: USER_ROLES;
}