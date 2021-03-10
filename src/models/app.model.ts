
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
    id?: string;
    label: string;
    image: string;
    cautions: any[];
    calories: number;
    cuisineType: string[];
    dietLabels: string[];
    digest: any[];
    healthLabels: string[];
    ingredientLines: string[];
    ingredients: any;
    mealType: string[];
    totalNutrients: any[];
}

export interface JSONResponse{
    success: boolean;
    message: string;
    data?: any; 
}