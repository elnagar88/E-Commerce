'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { IAddressData } from "@/types/address.type"
import { Input } from '@base-ui/react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, X } from 'lucide-react'
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Button } from '../button'
import { Field, FieldError, FieldGroup, FieldLabel } from "../field"
import { InputGroup, InputGroupTextarea } from "../input-group"
import { addAddress } from "@/app/services/address.services"
import { useState } from "react"
import { Spinner } from "../spinner"
import { toast } from "../toast"

export default function AddAddress() {
    const [open, setopen] = useState(false);

    const formSchema = z.object({
        name: z
            .string()
            .min(3, "Name must be at least 3 characters."),
        details: z
            .string()
            .min(5, "details must be at least 5 characters."),
        phone: z
            .string().regex(/^01[0125][0-9]{8}$/, "Enter a valid phone number."),
        city: z
            .string()
            .min(3, "City must be at least 3 characters.")
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "name": '',
            "details": '',
            "phone": '',
            "city": ''
        },
    })
    const [isLoading, setisLoading] = useState(false);

    async function handleAddAddress(userAddres: IAddressData) {
        setisLoading(true)
        const data = await addAddress(userAddres)
        if (data.status == 'success') {
            toast.add({ type: 'success', description: data.message })
            setisLoading(false)
            setopen(false)
            form.reset()
        } else {
            setisLoading(false)
            toast.add({ type: 'error', description: data.message })
            setopen(false)
        }
    }




    return <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleAddAddress)} >
        <AlertDialog open={open} onOpenChange={setopen}>
            <AlertDialogTrigger
                render={<Button className="h-12 gap-2 rounded-xl bg-green-600 px-6 font-semibold shadow-lg shadow-green-600/30 hover:bg-green-700">
                    <Plus className="h-4 w-4" />
                    Add Address
                </Button>} />
            <AlertDialogContent size="default">
                <AlertDialogHeader>
                    <div className="w-full max-w-md bg-white p-2">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">Add New Address</h2>
                            <AlertDialogCancel><X className="h-5 w-5" /></AlertDialogCancel>
                        </div>
                        <div className="mt-5 space-y-5">
                            <div className="space-y-2">
                                <FieldGroup>
                                    <Controller
                                        name="name"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-title">
                                                    Address Name
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="form-rhf-demo-title"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="e.g. Home, Office"
                                                    className="h-10 rounded-lg px-5 w-full"
                                                    autoComplete="off"
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="details"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-description">
                                                    Description
                                                </FieldLabel>
                                                <InputGroup>
                                                    <InputGroupTextarea
                                                        {...field}
                                                        id="form-rhf-demo-description"
                                                        rows={6}
                                                        placeholder="Street, building, apartment..."
                                                        className="min-h-30 resize-none rounded-2xl px-5 py-4"
                                                        aria-invalid={fieldState.invalid}
                                                    />
                                                </InputGroup>
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="space-y-2 col-span-6">
                                            <Controller
                                                name="phone"
                                                
                                                control={form.control}
                                                render={({ field, fieldState }) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-title">
                                                            Phone Number
                                                        </FieldLabel>
                                                        <Input
                                                            {...field}
                                                            id="form-rhf-demo-title"
                                                            type="tel"
                                                            aria-invalid={fieldState.invalid}
                                                            placeholder="01xxxxxxxxx"
                                                            className="h-10 rounded-2xl p w-full px-5"
                                                            autoComplete="off"
                                                        />
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]} />
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                        </div>
                                        <div className="space-y-2 col-span-6">
                                            <Controller
                                                name="city"
                                                control={form.control}
                                                render={({ field, fieldState }) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel className="text-sm font-exo text-slate-700" htmlFor="form-rhf-demo-title">
                                                            City
                                                        </FieldLabel>
                                                        <Input
                                                            {...field}
                                                            id="form-rhf-demo-title"
                                                            aria-invalid={fieldState.invalid}
                                                            placeholder="Cairo"
                                                            className="h-10 rounded-2xl p w-full px-5"
                                                            autoComplete="off"
                                                        />
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]} />
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </FieldGroup>
                            </div>
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className={'bg-main-primary-600 hover:bg-main-primary-900'} type="submit" form="form-rhf-demo" disabled={isLoading}>{isLoading ? <Spinner /> : 'Save Address'}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </form>

}
