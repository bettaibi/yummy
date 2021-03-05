
export interface IUser{
    id: string;
    name: string;
    email: string;
    password?: string;
    avatar?: string;
    credential?: string;
}

export interface Ilogin{
    email: string;
    password: string;
}


export interface IRecipe{
    name: string;
    picture: string
}