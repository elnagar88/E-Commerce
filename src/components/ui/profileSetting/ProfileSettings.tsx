'use client'
import { updateUserInfo } from '@/app/services/updateUserData.services'
import { IUserInfo } from '@/types/userInfo.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { Save, User } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from '../button'
import { CardContent } from '../card'
import { Field, FieldError, FieldLabel } from '../field'
import { Input } from '../input'
import { Spinner } from '../spinner'
import { toast } from '../toast'

export default function ProfileSettings() {
  const [isLoading, setisLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters."),
    email: z.email(),
    phone: z.string().regex(/^01[0125][0-9]{8}$/, "Enter a valid phone number."),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "name": '',
      "email": '',
      "phone": '',
    },
  })

  async function handleUpdateUserInfo(userInfo:IUserInfo) {
    setisLoading(true)
    const data = await updateUserInfo(userInfo)
    if(data.message=='success'){
      toast.add({type:'success',description:'Your information has been updated'})
      setisLoading(false)
      form.reset()
    }else if(data.message=='fail'){
      toast.add({type:'success',description:data.errors?.msg})
      setisLoading(false)
    }else{
      setisLoading(false)
    }
  }


  return <>
    <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
    <p className="mt-1 text-sm text-slate-500">
      Update your profile information
    </p>

    <form className="mt-5 overflow-hidden rounded-3xl shadow-xl bg-white" onSubmit={form.handleSubmit(handleUpdateUserInfo)}>
      <CardContent className="p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">Profile Information</h2>
            <p className="text-sm text-slate-500">Update your personal details</p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <div className="space-y-2">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-title">
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder='Enter Your Name'
                    className="h-12 rounded-xl"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <div className="space-y-2">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-email">
                    Email Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    type='email'
                    placeholder="Enter your email"
                    className="h-12 rounded-xl"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <div className="space-y-2">
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-phone">
                    Phone Number
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-phone"
                    type='tel'
                    aria-invalid={fieldState.invalid}
                    placeholder="01xxxxxxxxx"
                    className="h-12 rounded-xl"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <Button type='submit' className="h-12 gap-2 rounded-xl bg-green-600 px-6 font-semibold shadow-lg shadow-green-600/30 hover:bg-green-700">
            {isLoading?<Spinner/>:<div className='flex gap-1 justify-center items-center'><Save/>Save Changes</div>}
          </Button>
        </div>
      </CardContent>
    </form>
  </>
}
