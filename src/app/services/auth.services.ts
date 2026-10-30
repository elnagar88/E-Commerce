import { IAuthResponse, ILogin, ISignIn } from "@/types/auth.type";
import { handleUserRegister } from "../actions/register.action";
import { handleUserLogin } from "../actions/login.action";

export async function signIn(userData:ISignIn):Promise<IAuthResponse> {
    const data:IAuthResponse = await handleUserRegister(userData)
    return data
    
}
export async function Login(userData:ILogin):Promise<IAuthResponse> {
    const data = await handleUserLogin(userData)
    return data
    
}