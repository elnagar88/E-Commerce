'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Lock, Mail } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Field, FieldError, FieldLabel } from '../field'
import { Input } from '../input'
import { ResetPassword } from '@/app/services/forgetPassword'
import { IUserResetData } from '@/types/forgetPassword.type'
import { useState } from 'react'
import { toast } from '../toast'
import { useRouter } from 'next/navigation'
import { Spinner } from '../spinner'

export default function ResetPasswordForm() {
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter()

  const formSchema = z.object({
  email: z.email(),
  newPassword:z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)

})
    const {handleSubmit,control} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      newPassword:''
    },
  })
  async function handleResetPassword(userResetData:IUserResetData){
    setisLoading(true)
    const data = await ResetPassword(userResetData)
    if(data.token){
      setisLoading(false)
      toast.add({type:'success',description:'Password Reset Successfully'})
      router.push('/login')
    }else{
      setisLoading(false)
      toast.add({type:'error',description:'Error, Enter Correct Data'})

    }
  }
  return <>
        {/* Title */}
        <h2 className="text-center text-2xl font-exo font-bold text-slate-800 mt-5">
          Create New Password
        </h2>
        <p className="text-center text-gray-600 mt-2 tracking-wider">
            Your new password must be different from previous passwords
        </p>
            {/* Steps */}
        <div className="flex items-center justify-center mt-8">
          <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center ring-4 ring-green-100">
            <Check size={14} />
          </div>
          <div className="w-10 h-0.5 bg-green-600" />
          <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center ring-4 ring-green-100">
            <Check size={14} />
          </div>
          <div className="w-10 h-0.5 bg-green-600" />
          <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center ring-4 ring-green-100">
            <Lock size={14} />
          </div>
        </div>

        {/* Form */}
        <div className="mt-8 w-10/12 mx-auto">

          <form onSubmit={handleSubmit(handleResetPassword)}>
            <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
            <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-2.5">
                <Mail size={16} className="text-gray-400" />
            <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email"
                className='border-0 ring-0 focus-visible:ring-0'
                autoComplete="off"
            />
                </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
        )}
        />
            <Controller
            name="newPassword"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className='mt-5'>New Password</FieldLabel>
            <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-2.5">
                <Lock size={16} className="text-gray-400" />
            <Input
              type='password'
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter New Password"
                className='border-0 ring-0 focus-visible:ring-0'
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
            {isLoading?<span className='w-full flex justify-center'><Spinner/></span>:<p>Reset Password</p>}
            </button>
          </form>

        </div>
  </>
}
