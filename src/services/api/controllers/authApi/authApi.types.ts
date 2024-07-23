
export interface IUser {
    email: string;
    id: string;
    isActivated: boolean;
    roles: Array<string>
}

export interface CheckUserRequest {
    username: string;
}

export interface RegistrationRequest {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface AuthErrorResponse {
    message: string,
    errors: [
        { field: string }
    ]
}

export interface CheckUserResponse {
    exists: boolean;
}

export interface ApiError {
    data: {
        message: string;
        errors: {
            field: string;
            message: string;
        }[];
    };
    status: number;
}