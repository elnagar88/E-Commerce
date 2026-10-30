import { IOrderAddress } from "@/types/orders.type";
import { createCashOrderAction } from "../actions/order.action";
import { IMyOrders } from "@/types/myOrders";

export async function createCashOrder(cartId:string,values:IOrderAddress) {
    const data = await createCashOrderAction(cartId,values)
    return data
}
export async function getOrder(userId:string):Promise<IMyOrders> {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/orders/user/${userId}`)
    const data = await response.json()
    return data
}