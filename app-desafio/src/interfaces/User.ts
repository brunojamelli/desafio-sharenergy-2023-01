export interface User {
    name: {
        title: string;
        first: string;
        last: string;
    }
    picture: {
        medium: any,
        large: any
    };
    email: string;
    login: { username: string };
    dob: { age: number }
};