'use client'
import { updatePassword } from '@/app/services/updateUserData.services'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Lock, Save } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from '../button'
import { CardContent } from '../card'
import { Field, FieldError, FieldLabel } from '../field'
import { Input } from '../input'
import { Spinner } from '../spinner'
import { toast } from '../toast'
import { IUpdatePassData } from '@/types/updatePassword.type'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function UpdatePassword() {
    const [isLoading, setisLoading] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showRe, setShowRe] = useState(false);
    const router = useRouter()
    const formSchema = z
        .object({
            currentPassword: z.string().min(1, "Enter your current password"),

            password: z
                .string()
                .regex(
                    /^(?=.{8,}$)(?=.*(?:\d|\W+))(?=.*[A-Z])(?=.*[a-z]).*$/,
                    "Example: Ahmed@123"
                ),

            rePassword: z.string().min(1, "Please confirm your password"),
        })
        .refine((data) => data.password === data.rePassword, {
            message: "Passwords do not match",
            path: ["rePassword"],
        });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: '',
            password: '',
            rePassword: ''
        },
    })

    async function handleUpdatePassword(PasswordData: IUpdatePassData) {
        setisLoading(true)
        const data = await updatePassword(PasswordData)
        if (data.message == 'success') {
            toast.add({ type: 'success', description: 'Your Password has been updated' })
            await signOut({redirect:false})
            setisLoading(false)
            form.reset()
            router.push('/login')
        } else if (data.message == 'fail') {
            toast.add({ type: 'success', description: data.errors?.msg })
            setisLoading(false)
        } else {
            toast.add({ type: 'success', description: data.message })
            setisLoading(false)
        }
    }


    return <>
        <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
        <p className="mt-1 text-sm text-slate-500">
            Update your password
        </p>

        <form className="mt-5 overflow-hidden rounded-3xl shadow-xl bg-white" onSubmit={form.handleSubmit(handleUpdatePassword)}>
            <CardContent className="p-8">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
                        <Lock className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="font-bold text-slate-900">Change Password</h2>
                        <p className="text-sm text-slate-500">Update your account password</p>
                    </div>
                </div>

                <div className="mt-6 space-y-5">
                    <div className="space-y-2">
                        <Controller
                            name="currentPassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-password">
                                        Current Password
                                    </FieldLabel>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder='Enter your current password'
                                            type={showCurrent ? 'text' : 'password'}
                                            className="h-12 rounded-xl pr-12"
                                            autoComplete="off"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCurrent(!showCurrent)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showCurrent ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-newpassword">
                                        New Password
                                    </FieldLabel>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-newpassword"
                                            aria-invalid={fieldState.invalid}
                                            type={showNew ? 'text' : 'password'}
                                            placeholder="Enter your new password"
                                            className="h-12 rounded-xl pr-12"
                                            autoComplete="off"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNew(!showNew)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showNew ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Controller
                            name="rePassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-repassword">
                                        Confirm New Password
                                    </FieldLabel>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-repassword"
                                            type={showRe ? 'text' : 'password'}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Confirm your new password"
                                            className="h-12 rounded-xl pr-12"
                                            autoComplete="off"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowRe(!showRe)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showRe ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>
                    <p className='text-gray-500 font-exo'>After change password successfully , you must login again <span className='text-red-600 font-bold text-lg'>*</span></p>
                    <Button type='submit' className="h-12 gap-2 rounded-xl bg-green-600 px-6 font-semibold shadow-lg shadow-green-600/30 hover:bg-green-700">
                        {isLoading ? <Spinner /> : <div className='flex gap-1 justify-center items-center'><Save />Change Password</div>}
                    </Button>
                </div>
            </CardContent>
        </form>
    </>
}