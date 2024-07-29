export interface UpdateProfileUserData {
    email: string;
    firstName: string;
    image: string;
    isActivated: boolean;
    lastName: string;
    username: string;
    __v: number;
}

export interface UpdateProfileResponse {
    message: string,
    userData: UpdateProfileUserData
}

export interface UpdateProfileErrorResponse {
    message: string;
}