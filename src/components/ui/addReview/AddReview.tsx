'use client'
import { addReview } from '@/app/services/review.services'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'
import { toast } from '@/components/ui/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Star } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

const formSchema = z.object({
  review: z.string().min(3, 'Review must be at least 3 characters'),
  rating: z.number().min(1, 'Please select a rating'),
})

export default function AddReview({ productId }: { productId: string }) {
  const router = useRouter()
  const [hover, setHover] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const user = useSession()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: '',
      rating: 0,
    },
  })

  async function handleAddReview(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    const data = await addReview(values,productId)
    if(data?.data){
      toast.add({ type: 'success', description: 'Your review has been added' })
      setIsLoading(false)
      form.reset()
      router.refresh()
    }else{
      toast.add({ type: 'error', description:'You already added review on this product'})
      setIsLoading(false)
      form.reset()
    }
  }

  return user.status=='authenticated'&&<form
      onSubmit={form.handleSubmit(handleAddReview)}
      className="mt-4 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-5"
    >
      <h3 className="text-sm font-semibold text-slate-900">Write a Review</h3>

      {/* Rating */}
      <Controller
        name="rating"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="text-sm font-exo text-slate-700">
              Your Rating
            </FieldLabel>
            <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
              <button type="button" onClick={() => field.onChange(1)} onMouseEnter={() => setHover(1)} aria-label="1 star">
                <Star size={24} className={1 <= (hover || field.value) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
              </button>
              <button type="button" onClick={() => field.onChange(2)} onMouseEnter={() => setHover(2)} aria-label="2 stars">
                <Star size={24} className={2 <= (hover || field.value) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
              </button>
              <button type="button" onClick={() => field.onChange(3)} onMouseEnter={() => setHover(3)} aria-label="3 stars">
                <Star size={24} className={3 <= (hover || field.value) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
              </button>
              <button type="button" onClick={() => field.onChange(4)} onMouseEnter={() => setHover(4)} aria-label="4 stars">
                <Star size={24} className={4 <= (hover || field.value) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
              </button>
              <button type="button" onClick={() => field.onChange(5)} onMouseEnter={() => setHover(5)} aria-label="5 stars">
                <Star size={24} className={5 <= (hover || field.value) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
              </button>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Review */}
      <Controller
        name="review"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="text-sm font-exo text-slate-700"
              htmlFor="form-add-review"
            >
              Your Review
            </FieldLabel>
            <textarea
              {...field}
              id="form-add-review"
              aria-invalid={fieldState.invalid}
              rows={4}
              placeholder="Share your experience with this product..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 aria-invalid:border-red-500"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="h-11 gap-2 rounded-xl bg-green-600 px-6 font-semibold shadow-lg shadow-green-600/30 hover:bg-green-700"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex items-center justify-center gap-1">
            <Send size={16} />
            Submit Review
          </div>
        )}
      </Button>
    </form>
}