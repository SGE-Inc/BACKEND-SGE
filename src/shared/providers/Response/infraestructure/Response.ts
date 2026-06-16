import { IResponse } from "../domain/IResponse";
import { StatusCodes } from "http-status-codes";
export const ResponseProvider: IResponse = (res) => <T = null>(statusCode: StatusCodes, message: string, data: T) => {
    return res.status(statusCode).json({ code: statusCode, message, data });
};
