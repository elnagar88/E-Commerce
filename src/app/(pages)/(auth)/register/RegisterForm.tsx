'use client'
import { signIn } from '@/app/services/auth.services'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'
import { toast } from '@/components/ui/toast'
import { ISignIn } from '@/types/auth.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { formSchema } from './register.zod'


export default function RegisterForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showTermsError, setShowTermsError] = useState(false);
    const {control,handleSubmit} = useForm<z.infer<typeof formSchema>>({
      defaultValues:{
      name: '',
      email:'',
      password:'',
      rePassword:'',
      phone:'',
      },
      resolver:zodResolver(formSchema),
    })
    async function RegisterFn(data: ISignIn) {
      if (!isChecked) {
        setShowTermsError(true);
        return;
      }

      setIsLoading(true);

      try {
        const response = await signIn(data);        

    if (response.message === "success") {
      toast.add({
        type: "success",
        description: 'Account Created, Login Now',
      });

      router.push("/login");
    } else {
      toast.add({
        type: "error",
        description: response.message,
      });
    }
      } finally {
        setIsLoading(false);
      }
    }
  return <form onSubmit={(event) => {
        if (!isChecked) setShowTermsError(true);
        void handleSubmit(RegisterFn)(event);
      }} className='w-full mx-auto bg-white border border-gray-100 shadow-xl shadow-gray-200/60 px-6 py-8 sm:px-10 sm:py-12 rounded-3xl'>
        <h3 className='text-3xl sm:text-4xl text-center text-main-primary-600 font-exo font-bold tracking-tight'>Create Your Account</h3>
        <p className='text-center text-gray-400 text-sm sm:text-base mt-2 mb-9'>Start your fresh journey with us today</p>
          <div className='my-4'>
            <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className='text-sm font-medium text-gray-700'>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Ahmed"
                autoComplete="off"
                className='h-11 rounded-xl bg-gray-50/60 border-gray-200 px-4 placeholder:text-gray-400 transition-all duration-200 focus-visible:bg-white focus-visible:border-main-primary-400 focus-visible:ring-main-primary-400'
        />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} className='text-xs' />}
            </Field>
          )}/>
        </div>
          <div className='my-4'>
            <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className='text-sm font-medium text-gray-700'>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type='email'
                aria-invalid={fieldState.invalid}
                placeholder="Ahmed@Example.com"
                autoComplete="off"
                className='h-11 rounded-xl bg-gray-50/60 border-gray-200 px-4 placeholder:text-gray-400 transition-all duration-200 focus-visible:bg-white focus-visible:border-main-primary-400 focus-visible:ring-main-primary-400'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} className='text-xs' />}
            </Field>
          )}/>
        </div>
          <div className='my-4'>
            <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className='text-sm font-medium text-gray-700'>Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                type='password'
                placeholder="Create Strong Password"
                autoComplete="off"
                className='h-11 rounded-xl bg-gray-50/60 border-gray-200 px-4 placeholder:text-gray-400 transition-all duration-200 focus-visible:bg-white focus-visible:border-main-primary-400 focus-visible:ring-main-primary-400'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} className='text-xs' />}
            </Field>
          )}/>
        </div>
          <div className='my-4'>
            <Controller
            name="rePassword"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className='text-sm font-medium text-gray-700'>Confirm Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Confirm your password"
                type='password'
                autoComplete="off"
                className='h-11 rounded-xl bg-gray-50/60 border-gray-200 px-4 placeholder:text-gray-400 transition-all duration-200 focus-visible:bg-white focus-visible:border-main-primary-400 focus-visible:ring-main-primary-400'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} className='text-xs' />}
            </Field>
          )}/>
        </div>
          <div className='my-4'>
            <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className='text-sm font-medium text-gray-700'>Phone Number</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="+20 123 456 7890"
                type='tel'
                autoComplete="off"
                className='h-11 rounded-xl bg-gray-50/60 border-gray-200 px-4 placeholder:text-gray-400 transition-all duration-200 focus-visible:bg-white focus-visible:border-main-primary-400 focus-visible:ring-main-primary-400'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} className='text-xs' />}
            </Field>
          )}/>
        </div>
        <div className='mt-6 mb-2'>
        <FieldGroup>
          <Field orientation="horizontal" className='items-start'>
            <Checkbox
              id="terms-checkbox"
              name="terms-checkbox"
              checked={isChecked}
              onCheckedChange={(checked) => {
                const accepted = checked === true;
                setIsChecked(accepted);
                if (accepted) setShowTermsError(false);
              }}
              aria-invalid={showTermsError && !isChecked}
              aria-describedby={showTermsError && !isChecked ? 'terms-error' : undefined}
              className={'accent-main-primary-500 mt-0.5 cursor-pointer'}
            />
            <Label htmlFor="terms-checkbox" className='text-sm text-gray-500 font-normal leading-relaxed cursor-pointer'><p>I agree to the<span className='text-main-primary-600 font-medium hover:text-main-primary-800 hover:underline underline-offset-4 transition-colors duration-200'><Link href={'/terms'}> Terms </Link></span> of Service and <span className='text-main-primary-600 font-medium hover:text-main-primary-800 hover:underline underline-offset-4 transition-colors duration-200'><Link href={'/privacyPolicy'}> Privacy Policy </Link></span></p></Label>
          </Field>
        </FieldGroup>
            {showTermsError && !isChecked && (
              <p id="terms-error" className="text-xs text-red-500 mt-2">You must agree to the terms and conditions</p>
            )}
        </div>
        <Button className='h-11 w-full mt-6 rounded-xl text-base font-semibold bg-main-primary-500 hover:bg-main-primary-800 shadow-md shadow-main-primary-500/30 hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center duration-200' type='submit' disabled={isLoading}>
          {isLoading?<Spinner />:<p className='flex gap-2 justify-center items-center'><span><UserPlus/></span> Create My Account</p>}
          </Button>
        <p className='font-exo text-center text-sm sm:text-base text-gray-500 mt-6'>Already have an account ? <span><Link href={'/login'} className='text-main-primary-600 hover:text-main-primary-800 font-semibold hover:underline underline-offset-4 transition-colors duration-200'>Login</Link></span></p>
  </form>
}