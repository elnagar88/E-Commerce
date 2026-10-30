'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Building2,
  House,
  Mailbox,
  MapPin,
  Phone
} from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

import { createCashOrder } from '@/app/services/order.services'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import z from 'zod'
import { clearCart } from '@/app/services/cart.services'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'


export default function PaymentAddress({ cartId }: { cartId: string }) {
  const router = useRouter()
  const {setnumOfCart} = useContext(CartContext)
  const formSchema = z.object({
    city: z.string().min(2, 'City is required.'),
    details: z.string().min(5, 'Street address must be at least 5 characters.'),
    phone: z.string().regex(/^01[0125][0-9]{8}$/, 'Enter a valid phone number.'),
    postalCode: z.string().regex(/^\d{5}$/, 'Enter a valid 5-digit postal code.'),
  })

  type CheckoutValues = z.infer<typeof formSchema>
  const form = useForm<CheckoutValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: '',
      details: '',
      phone: '',
      postalCode: '',
    },
  })


  async function handleCashOrder(values: CheckoutValues) {
    try {
      const data = await createCashOrder(cartId, values)
      
      if (data.status === 'success') {
        toast.add({ type: 'success', description: data.message })
        form.reset()
        await clearCart()
        setnumOfCart(0)
        router.push(`/myOrders/${data.user.id}`)

      } else {
        toast.add({ type: 'error', description: data.message })
      }
    } catch {
      toast.add({ type: 'error', description: 'Something went wrong, please try again.' })
    }
  }




  return <form id='payment-form' className="space-y-6" onSubmit={form.handleSubmit(handleCashOrder)}>
    <div className="w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
      {/* Header */}
      <div className="bg-linear-to-br from-green-600 to-green-700 px-8 py-5 text-white">
        <div className="flex items-center gap-2">
          <House className="h-5 w-5" />
          <h2 className="text-lg font-bold">Shipping Address</h2>
        </div>
        <p className="mt-1 text-sm text-green-50">Where should we deliver your order?</p>
      </div>

      <div className="px-5 pb-5">
        {/* City */}
        <Controller
          name="city"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="mt-6">
              <FieldLabel htmlFor="city" className="text-sm font-semibold text-gray-800">
                City <span className="text-red-500">*</span>
              </FieldLabel>
              <div className={cn(`flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 transition-colors focus-within:border-green-500`, fieldState.invalid && 'border-red-500')}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  <Building2 className="h-4 w-4" />
                </div>
                <Input
                  {...field}
                  id="city"
                  aria-invalid={fieldState.invalid}
                  placeholder="e.g. Cairo, Giza"
                  className="h-auto border-0 bg-transparent p-2 text-sm text-gray-800 shadow-none focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 dark:aria-invalid:ring-0"
                />
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Street */}
        <Controller
          name="details"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="mt-6">
              <FieldLabel htmlFor="details" className="text-sm font-semibold text-gray-800">
                Street Address <span className="text-red-500">*</span>
              </FieldLabel>
              <div
                className={cn(`flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 transition-colors focus-within:border-green-500`, 'items-start', fieldState.invalid && 'border-red-500')}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <Textarea
                  {...field}
                  id="details"
                  aria-invalid={fieldState.invalid}
                  placeholder="Street name, building number, floor, apartment"
                  className={cn(`h-auto border-0 bg-transparent p-2 text-sm text-gray-800 shadow-none focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 dark:aria-invalid:ring-0`, 'min-h-14 resize-none py-1.5')}
                />
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="mt-6">
              <FieldLabel htmlFor="phone" className="text-sm font-semibold text-gray-800">
                Phone Number <span className="text-red-500">*</span>
              </FieldLabel>
              <div className={cn(`flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 transition-colors focus-within:border-green-500`, fieldState.invalid && 'border-red-500')}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  <Phone className="h-4 w-4" />
                </div>
                <Input
                  {...field}
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  aria-invalid={fieldState.invalid}
                  placeholder="01xxxxxxxxx"
                  className="h-auto border-0 bg-transparent p-2 text-sm text-gray-800 shadow-none focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 dark:aria-invalid:ring-0"
                />
                <span className="shrink-0 text-xs text-gray-400">Egyptian numbers only</span>
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Postal Code */}
        <Controller
          name="postalCode"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="mt-6">
              <FieldLabel htmlFor="postalCode" className="text-sm font-semibold text-gray-800">
                Postal Code <span className="text-red-500">*</span>
              </FieldLabel>
              <div className={cn(`flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 transition-colors focus-within:border-green-500`, fieldState.invalid && 'border-red-500')}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                  <Mailbox className="h-4 w-4" />
                </div>
                <Input
                  {...field}
                  id="postalCode"
                  inputMode="numeric"
                  maxLength={5}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your postal code"
                  className="h-auto border-0 bg-transparent p-2 text-sm text-gray-800 shadow-none focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 dark:aria-invalid:ring-0"
                />
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </div>
  </form>
}
