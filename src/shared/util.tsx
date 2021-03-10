import { JSONResponse } from "../models/app.model";

const toJsonResponse = (success: boolean, message: string, data?: any): JSONResponse =>{
    return {
        success,
        message,
        data
    };
};

export { toJsonResponse}