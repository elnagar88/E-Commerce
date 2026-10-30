'use client'
import { Trash2 } from "lucide-react";
import { Button } from "../../button";
import { deleteAddress } from "@/app/services/address.services";
import { toast } from "../../toast";
import { useState } from "react";
import { Spinner } from "../../spinner";


export default function DeleteAddress({ addressId }: { addressId: string }) {
    const [isLoading, setisLoading] = useState(false);
    async function deleteAdd() {
        setisLoading(true)
        const data = await deleteAddress(addressId)
        if(data.status=='success'){
            toast.add({type:'success',description:data.message})
            setisLoading(false)
        }else{
            toast.add({type:'error',description:data.message})
            setisLoading(false)
        }
    }

    return <Button
        variant="secondary"
        size="icon"
        className="h-10 w-10 rounded-lg bg-gray-100 text-gray-700"
        onClick={deleteAdd}
    >
        {isLoading?<Spinner className="h-4 w-4"/> :<Trash2 className="h-4 w-4"/>}
    </Button>
}
