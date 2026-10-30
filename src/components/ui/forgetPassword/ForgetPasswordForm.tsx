'use client'
import { KeyRound, Lock, Mail } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '../field'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../input'
import { IForgetPasswordData } from '@/types/forgetPassword.type'
import { forgetPassword } from '@/app/services/forgetPassword'
import { toast } from '../toast'
import { Spinner } from '../spinner'

  type Props = {
  setStep: Dispatch<SetStateAction<number>>;
  setEmail: Dispatch<SetStateAction<string>>;
  };
export default function ForgetPasswordForm({ setStep,setEmail }: Props) {

  const [isLoading, setisLoading] = useState(false);
  
      const formSchema = z.object({
      email: z.email()
  })
      const {control,handleSubmit} = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
      },
    })
    async function handleForgetPassword(userEmail:IForgetPasswordData) {
      setisLoading(true)
      const data = await forgetPassword(userEmail)
      if(data.statusMsg=='success'){
        toast.add({type:'success',description:data.message})
        setisLoading(false)
        setEmail(userEmail.email)
        setStep(2)
        
      }else{
        toast.add({type:'error',description:data.message})
        setisLoading(false)
      }
      
    }
  return <>
          {/* Title */}
        <h2 className="text-center text-2xl font-exo font-bold text-slate-800 mt-5">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 mt-2 tracking-wider">
            No worries, we'll send you a reset code
        </p>
            {/* Steps */}
        <div className="flex items-center justify-center mt-5">
          <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center ring-4 ring-green-100">
            <Mail size={14} />
          </div>
          <div className="w-10 h-px bg-gray-200" />
          <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
            <KeyRound size={14} />
          </div>
          <div className="w-10 h-px bg-gray-200" />
          <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
            <Lock size={14} />
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 w-10/12 mx-auto" onSubmit={handleSubmit(handleForgetPassword)}>
            <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className='font-exo'>Email Address</FieldLabel>
            <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-2.5">
                <Mail size={16} className="text-gray-400" />
            <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email"
                className='border-0 ring-0 focus-visible:ring-0 aria-invalid:ring-0'
                autoComplete="off"
            />
                </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
        )}
        />

          <button
            type="submit"
            className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl shadow-lg transition"
          >
            {isLoading?<span className='w-full flex justify-center'><Spinner/></span>:<p>Send Reset Code</p>}
          </button>

        </form>
  </>
}
