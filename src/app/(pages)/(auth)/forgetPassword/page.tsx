'use client'
import ForgetPasswordForm from "@/components/ui/forgetPassword/ForgetPasswordForm";
import ResetPasswordForm from "@/components/ui/forgetPassword/ResetPasswordForm";
import VerifyRestCode from "@/components/ui/forgetPassword/VerifyRestCode";
import Link from "next/link";
import { useState } from "react";


export default function page() {

  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
 return <>

    <div className='w-full shadow-2xl pt-10 pb-5 rounded-2xl'>
        {/* Logo */}
        <h1 className="text-center text-3xl font-bold">
          <span className="text-green-600">Fresh</span>
          <span className="text-slate-800">Cart</span>
        </h1>
      {step === 1 && (
          <ForgetPasswordForm setStep={setStep} setEmail={setEmail}/>
      )}

      {step === 2 && (
        <VerifyRestCode  email={email} setStep={setStep} />
      )}
      {step === 3 && (
        <ResetPasswordForm />
      )}
        {/* Footer */}
        <div className="border-t border-gray-100 mt-5 pt-4 text-center text-sm text-gray-600 ">
          Remember your password?{" "}
          <Link href="/login" className="text-green-600 font-bold hover:underline">
            Sign In
          </Link>
        </div>

    </div>
 </>
  
}