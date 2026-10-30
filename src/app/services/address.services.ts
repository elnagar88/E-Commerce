import { IAddressData } from "@/types/address.type";
import { addAddressAction, deleteAddressAction, getUserAddressAction } from "../actions/address.action";

export async function addAddress(userAddress:IAddressData) {
    const data = await addAddressAction(userAddress)
    return data
}
export async function getUserAddress() {
    const data = await getUserAddressAction()
    return data
}
export async function deleteAddress(addressId:string) {
    const data = await deleteAddressAction(addressId)
    return data
}