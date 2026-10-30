import {
    Banknote,
    Calendar,
    ChevronDown,
    ChevronUp,
    Clock,
    MapPin,
    Package,
    Phone,
    Receipt,
    ShoppingCartPlus,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import { getOrder } from "@/app/services/order.services";

export default async function OrderCard({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const orders = await getOrder(id)
    return <>
        <HeroSection
            path="My Orders"
            subtitle={`Track and manage your ${orders.length} orders`}
            title="My Order"
            Icon={ShoppingCartPlus}
        />
        {orders.map((order) => {
            return <Collapsible key={order._id} className="group/order w-10/12 mx-auto py-8">
                <Card className="gap-0 overflow-hidden rounded-2xl border-gray-200 py-0 shadow-sm transition-colors group-data-[state=open]/order:border-green-200">
                    {/* Summary row */}
                    <CardContent className="flex gap-5 p-5">
                        {/* Image */}
                        <div className="relative h-28 w-28 shrink-0">
                            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-3">
                                <img
                                    src={order.cartItems[0].product.imageCover}
                                    alt={order.cartItems[0].product.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                            <div>
                                <Badge className="gap-1.5 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-600 hover:bg-amber-100">
                                    <Clock className="h-3.5 w-3.5" />
                                    Processing
                                </Badge>
                                <p className="mt-2 flex items-center gap-2 text-xl font-bold text-gray-900">
                                    <span className="font-normal text-gray-400">#</span>
                                    {order.id}
                                </p>
                                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5 text-gray-400" />
                                        {new Date(order.createdAt).toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric", timeZone: 'UTC' })}
                                    </span>
                                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                                    <span className="flex items-center gap-1.5">
                                        <Package className="h-3.5 w-3.5 text-gray-400" />{order.cartItems.length} item
                                    </span>
                                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                                        {order.shippingAddress?.city}
                                    </span>
                                </div>
                            </div>
                            <p className="mt-3 flex items-baseline gap-1.5">
                                <span className="text-2xl font-extrabold text-gray-900">{order.totalOrderPrice}</span>
                                <span className="text-sm font-medium text-gray-400">EGP</span>
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex shrink-0 flex-col items-end justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                                <Banknote className="h-4 w-4" />
                            </div>
                            <CollapsibleTrigger>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="group h-auto gap-2 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 data-[state=open]:bg-green-600 data-[state=open]:text-white data-[state=open]:shadow-lg data-[state=open]:shadow-green-600/30 data-[state=open]:hover:bg-green-600"
                                >
                                    <span className="group-data-[state=open]:hidden">Details</span>
                                    <span className="hidden group-data-[state=open]:inline">Hide</span>
                                    <ChevronDown className="h-4 w-4 group-data-[state=open]:hidden" />
                                    <ChevronUp className="hidden h-4 w-4 group-data-[state=open]:block" />
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                    </CardContent>

                    {/* Details */}
                    <CollapsibleContent>
                        <div className="space-y-5 border-t border-gray-100 bg-slate-50 p-5">
                            {/* Items */}
                            <div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-green-100 text-green-600">
                                        <Receipt className="h-3.5 w-3.5" />
                                    </span>
                                    Order Items
                                </div>
                                {order.cartItems.map((product) => {
                                    return <div key={product._id} className="mt-4 flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-1.5">
                                            <img
                                                src={product.product.imageCover}
                                                alt={product.product.title}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-800">
                                                {product.product.title}
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">{product.count} × {product.price} EGP</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-gray-900">{product.count*product.price}</p>
                                            <p className="text-xs text-gray-400">EGP</p>
                                        </div>
                                    </div>
                                })}
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* Delivery address */}
                                <div className="rounded-xl border border-gray-200 bg-white p-4">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                                            <MapPin className="h-3.5 w-3.5" />
                                        </span>
                                        Delivery Address
                                    </div>
                                    <p className="mt-4 text-sm text-gray-800">{order.shippingAddress?.city}</p>
                                    <p className="mt-3 text-xs text-gray-600">{order.shippingAddress?.details}</p>
                                    <p className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                                        <Phone className="h-3.5 w-3.5 text-gray-400" />
                                        {order.shippingAddress?.phone}
                                    </p>
                                </div>

                                {/* Order summary */}
                                <div className="rounded-xl border border-amber-200 bg-amber-100/70 p-4">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-orange-500 text-white">
                                            <Clock className="h-3.5 w-3.5" />
                                        </span>
                                        Order Summary
                                    </div>
                                    <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                                        <div className="flex items-center justify-between">
                                            <span>Subtotal</span>
                                            <span>{order.totalOrderPrice-order.shippingPrice-order.taxPrice} EGP</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Shipping</span>
                                            <span>{order.shippingPrice}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Tax</span>
                                            <span>{order.taxPrice}</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between border-t border-amber-200 pt-3">
                                        <span className="text-sm font-bold text-gray-900">Total</span>
                                        <span className="text-lg font-extrabold text-gray-900">{order.totalOrderPrice} EGP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CollapsibleContent>
                </Card>
            </Collapsible>
        })}
    </>
}