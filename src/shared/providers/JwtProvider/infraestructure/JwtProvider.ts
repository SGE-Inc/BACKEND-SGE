import jwt from "jsonwebtoken";
import { TCreateJwtProvider } from "../domain/TJwtProvider";

export const CreateJwtProvider: TCreateJwtProvider = () => (object, options?) => {
  return jwt.sign(object, process.env.JWT_SECRET || "sge-jwt-secret", options);
};
