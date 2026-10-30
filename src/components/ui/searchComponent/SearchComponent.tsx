"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  search: z.string().trim().min(1),
});

type SearchValues = z.infer<typeof searchSchema>;

type SearchBarProps = {
  id?: string;
  className?: string;
  onSearched?: () => void;
};

export default function SearchComponent({
  id = "search",
  className,
  onSearched,
}: SearchBarProps) {
  const router = useRouter();

  const form = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: { search: "" },
  });

  function handleSearch(values: SearchValues) {
    router.push(`/shop?search=${encodeURIComponent(values.search)}`);
    form.reset();
    onSearched?.();
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSearch)}
      className={cn("relative w-full", className)}
    >
      <Controller
        name="search"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="relative">
              <Input
                {...field}
                id={id}
                type="text"
                autoComplete="off"
                aria-invalid={fieldState.invalid}
                placeholder="Search products..."
                className="h-11 rounded-full border-gray-200 bg-gray-50 pl-4 pr-12 text-sm shadow-none transition-colors focus-visible:border-main-primary-500 focus-visible:bg-white focus-visible:ring-0"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-main-primary-500 text-white transition-colors hover:bg-main-primary-600"
              >
                <Search size={16} />
              </button>
            </div>
          </Field>
        )}
      />
    </form>
  );
}