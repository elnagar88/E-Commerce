import { IUserInfo } from "@/types/userInfo.type";
import { updatePasswordAction, updateUserInfoAction } from "../actions/updateUserData.action";
import { IUpdatePassData } from "@/types/updatePassword.type";

export async function updateUserInfo(userInfo:IUserInfo) {
    const data = await updateUserInfoAction(userInfo)
    return data
}
export async function updatePassword(PasswordData:IUpdatePassData) {
    const data = await updatePasswordAction(PasswordData)
    return data
}