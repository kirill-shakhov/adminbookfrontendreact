
export interface IUser {
    email: string;
    id: string;
    isActivated: boolean;
    roles: Array<string>
}


export interface AuthState {
    accessToken: string;
    refreshToken: string;
    user: IUser | null;
}

export interface UserState {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}