export class User {
    name: string;
    email: string;
}

export const DefaultUserObj: User = {
    name: '',
    email: ''
};

export class Credentials {
    userName: string;
    pass: string;
}

export class LoginSuccess {
    token: string;
    success: boolean;
}
