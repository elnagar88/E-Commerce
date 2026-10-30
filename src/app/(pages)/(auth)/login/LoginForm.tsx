'use client'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { toast } from '@/components/ui/toast'
import { ILogin } from '@/types/auth.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { loginSchema } from './login.zod'

export default function LoginForm() {

    const [isLoading, setisLoading] = useState(false);
    const router = useRouter()
    const {control,handleSubmit} = useForm({
        defaultValues:{
            email:'',
            password:''
        },resolver:zodResolver(loginSchema)
    })
    async function loginFn(userData:ILogin){
      setisLoading(true)
      const res = await signIn('credentials',{...userData,redirect:false,callbackUrl:'/'})
      if(res?.ok){
        toast.add({ type:'success',description: "Logged in Success" })
        router.push('/')
        setisLoading(false)
      }else{
        toast.add({ type:'error',description:res?.error})
        setisLoading(false)
       }  
      
    }

  return <form onSubmit={handleSubmit(loginFn)} id="form-rhf-demo" className='w-full mx-auto bg-white border border-gray-100 shadow-xl shadow-gray-200/60 px-6 py-8 sm:px-10 sm:py-12 rounded-3xl'>
            <h3 className='text-3xl sm:text-4xl text-center text-main-primary-600 font-exo font-bold tracking-tight'>Welcome Back </h3>
        <p className='text-center text-gray-400 text-sm sm:text-base mt-2 mb-9'>Sign in to continue your fresh shopping experience</p>
          <FieldGroup className='gap-4'>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className='my-1.5'>
                  <FieldLabel htmlFor="form-rhf-demo-email" className='text-sm font-medium text-gray-700'>
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    autoComplete="off"
                    className='h-11 rounded-xl bg-gray-50/60 border-gray-200 px-4 placeholder:text-gray-400 transition-all duration-200 focus-visible:bg-white focus-visible:border-main-primary-400 focus-visible:ring-main-primary-400'

                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className='text-xs' />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className='my-1.5'>
                    <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="form-rhf-demo-password" className='text-sm font-medium text-gray-700'>
                        Password
                    </FieldLabel>
                        <Link href={'/forgetPassword'} className='text-sm font-exo font-medium text-main-primary-900 hover:text-main-primary-600 hover:underline underline-offset-4 transition-colors duration-200'>Forget Password ?</Link>
                    </div>
                  <Input
                    {...field}
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                    type='password'
                    className='h-11 rounded-xl bg-gray-50/60 border-gray-200 px-4 placeholder:text-gray-400 transition-all duration-200 focus-visible:bg-white focus-visible:border-main-primary-400 focus-visible:ring-main-primary-400'

                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className='text-xs' />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
                  <Button className='h-11 w-full mt-8 rounded-xl text-base font-semibold bg-main-primary-500 hover:bg-main-primary-800 shadow-md shadow-main-primary-500/30 hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center duration-200' type='submit' disabled={isLoading}>
                    {isLoading?<Spinner />:'Login'}
                    </Button>
                  <p className='font-exo text-center text-sm sm:text-base text-gray-500 mt-6'>New to FreshCart ? <span><Link href={'/register'} className='text-main-primary-600 hover:text-main-primary-800 font-semibold hover:underline underline-offset-4 transition-colors duration-200'>Create an account</Link></span></p>
          
        </form>
}