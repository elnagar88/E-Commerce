'use client'
import { forgetPassword, verifyRestCode } from "@/app/services/forgetPassword"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { IOTP } from "@/types/forgetPassword.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { Check, KeyRound, Lock } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field, FieldLabel } from "../field"
import { Spinner } from "../spinner"
import { toast } from "../toast"

type Props ={
  setStep:Dispatch<SetStateAction<number>>,
  email:string
}
export default function VerifyRestCode({email,setStep}:Props) {

      const formSchema = z.object({
      resetCode: z.string().min(6).max(6)
  })
      const {control,handleSubmit} = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        resetCode: "",
      },
    })
    

    const [isLoading, setisLoading] = useState(false);
      async function handelResendCode(email:string) {
      setisLoading(true)
      const data = await forgetPassword({email})

      if(data.statusMsg=='success'){
        toast.add({type:'success',description:data.message})
        setisLoading(false)        
        
      }else{
        toast.add({type:'error',description:data.message})
        setisLoading(false)
      }
      
    }
    async function handleVerifyCode(OTP:IOTP) {
      setisLoading(true)
      const data = await verifyRestCode(OTP)

      if(data.status=='Success'){
        toast.add({type:'success',description:'Veification Done'})
        setStep(3)
        setisLoading(false)
      }else{
        toast.add({type:'error',description:'Reset code is invalid or has expired'})
        setisLoading(false)
      }
      
    }
    return <>
    
            {/* Title */}
        <h2 className="text-center text-2xl font-exo font-bold text-slate-800 mt-5">
          Check Your Email
        </h2>
        <p className="text-center text-gray-600 mt-2 tracking-wider font-exo">
            Enter the 6-digit code sent to <span className="text-main-primary-600">{email}</span>
        </p>
                {/* Steps */}
        <div className="flex items-center justify-center mt-8">
          <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center ring-4 ring-green-100">
            <Check size={14} />
          </div>
          <div className="w-10 h-0.5 bg-green-600" />
          <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center ring-4 ring-green-100">
            <KeyRound size={14} />
          </div>
          <div className="w-10 h-px bg-gray-200" />
          <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
            <Lock size={14} />
          </div>
        </div>

        {/* Form */}
        <form className="flex-col justify-center py-8 mt-5" onSubmit={handleSubmit(handleVerifyCode)}>
      <Field className="w-fit mx-auto mb-5">
      <FieldLabel htmlFor="digits-only" className="justify-center font-exo text-lg text-main-primary-900">Verification Code</FieldLabel>
      <Controller
        name="resetCode"
        control={control}
        render={({ field, fieldState }) => (
          <div>
            <InputOTP
              id="digits-only"
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={field.value}
              onChange={field.onChange}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="h-10 w-10 lg:h-12 lg:w-12 text-2xl rounded-md border mx-0.5" />
                <InputOTPSlot index={1} className="h-10 w-10 lg:h-12 lg:w-12 text-2xl rounded-md border mx-0.5" />
                <InputOTPSlot index={2} className="h-10 w-10 lg:h-12 lg:w-12 text-2xl rounded-md border mx-0.5" />
                <InputOTPSlot index={3} className="h-10 w-10 lg:h-12 lg:w-12 text-2xl rounded-md border mx-0.5" />
                <InputOTPSlot index={4} className="h-10 w-10 lg:h-12 lg:w-12 text-2xl rounded-md border mx-0.5" />
                <InputOTPSlot index={5} className="h-10 w-10 lg:h-12 lg:w-12 text-2xl rounded-md border mx-0.5" />
              </InputOTPGroup>
            </InputOTP>

            {fieldState.error && (
              <p className="text-sm text-center text-red-500 mt-2">
                Enter the right OTP
              </p>
            )}
          </div>
        )}
      />
    </Field>
            <p className="text-center font-exo ">Didn't receive the code?<span className="text-main-primary-800 font-semibold cursor-pointer" onClick={()=>{handelResendCode(email)}}> Resend Code</span></p>
          <div className="flex justify-center">
            <button
            type="submit"
            className="w-11/12  mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl shadow-lg transition "
          >
            {isLoading?<span className='w-full flex justify-center'><Spinner/></span>:<p>Verify Code</p>}
          </button>
      </div>
        </form>
    </>
}
