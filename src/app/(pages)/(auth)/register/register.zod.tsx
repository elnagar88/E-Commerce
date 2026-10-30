import * as z from "zod"

export const formSchema = z.object({
    name:z.string().min(3,'At least 3 character'),
    email:z.email(),
    password:z.string().regex(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,'Password should be like this Ahmed@123'),
    rePassword:z.string(),
    phone:z.string().regex(/^(01)(0|1|2|5)[0-9]{8}$/,'Only Egyption Numbers')
}).refine((data)=>{return data.password===data.rePassword},{
    error:"Password don't match",
    path:['rePassword']
})