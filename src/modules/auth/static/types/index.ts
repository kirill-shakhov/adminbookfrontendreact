export interface User {
    activationLink: string;
    email: string;
    username: string;
    firstName: string;
    image: string;
    isActivated: string;
    lastName: string;
    roles: Array<string>;
}


export interface AuthState {
    accessToken: string;
    user: User | null;
}

