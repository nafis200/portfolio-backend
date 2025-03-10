import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
  phone_number:string;  
  _id?:string;
  address:string
};

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isUserExistsByCustomPhone(phone_number: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}

export type TLoginUser = {
  email?: string;
  password: string;
  phone_number?:string
};

export type TUserRole = keyof typeof USER_ROLE;

export type NewUser = {
  password: string;
  role: "string";
};
