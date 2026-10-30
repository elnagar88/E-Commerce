import ArticleCard from '@/components/ui/articalCard/ArticalCard'
import HeroSection from '@/components/ui/heroSection/HeroSection'
import PrivacyHeader from '@/components/ui/privacyHeader/PrivacyHeader'
import { CircleCheck, CreditCard, Handshake, IdCard, Mail, MoveLeft, MoveRight, ReceiptText, RefreshCcw, Scale, Truck } from 'lucide-react'
import Link from 'next/link';


export default function page() {
    const content1 = [
        {num:1.1,description:'By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.'},
        {num:1.2,description:'If you do not agree to these Terms, you must not access or use the Service.'},
        {num:1.3,description:'We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.'},
    ]
    const content2 = [
        {num:2.1,description:'The Service is intended for users who are at least eighteen (18) years of age.'},
        {num:2.2,description:'By using the Service, you represent and warrant that you are of legal age to form a binding contract.'},
        {num:2.3,description:'If you are accessing the Service on behalf of a legal entity, you represent that you have the authority to bind such entity.'},
    ]
    const content3 = [
        {num:3.1,description:'You may be required to create an account to access certain features of the Service.'},
        {num:3.2,description:'You agree to provide accurate, current, and complete information during registration.'},
        {num:3.3,description:'You are solely responsible for maintaining the confidentiality of your account credentials.'},
        {num:3.4,description:'You agree to notify us immediately of any unauthorized use of your account.'}
    ]
    const content4 = [
        {num:4.1,description:'All orders placed through the Service are subject to acceptance and availability.'},
        {num:4.2,description:'Prices are subject to change without notice prior to order confirmation.'},
        {num:4.3,description:'Payment must be made in full at the time of purchase through approved payment methods.'},
        {num:4.4,description:'We reserve the right to refuse or cancel any order at our sole discretion.'},
    ]
    const content5 = [
        {num:5.1,description:'Shipping times are estimates only and are not guaranteed.'},
        {num:5.2,description:'Risk of loss and title for items purchased pass to you upon delivery to the carrier.'},
        {num:5.3,description:'We are not responsible for delays caused by carriers, customs, or other factors beyond our control.'},
    ]
    const content6 = [
        {num:6.1,description:'Our return policy allows returns within 14 days of delivery for most items.'},
        {num:6.2,description:'Products must be unused and in original packaging.'},
        {num:6.3,description:'Refunds will be processed within 5-7 business days after receiving the returned item.'},
    ]
    const content7 = [
        {description:'To the maximum extent permitted by applicable law, FreshCart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.'},
    ]
    const content8 = [
        {description:'If you have any questions about these Terms, please contact us at ',email:'support@freshcart.com'},
    ]
  return <>
  <HeroSection path='Terms of Service' subtitle='Last updated: September 2026' title='Terms of Service' Icon={ReceiptText}/>
    <PrivacyHeader title='Important Notice' description='By accessing and using FreshCart, you accept and agree to be bound by the terms and provisions of this agreement. Please read these terms carefully before using our services.' Icon={ReceiptText} bgColor='amber'/>
    <div className='container grid lg:grid-cols-2 gap-5 border-b pb-8'>
        <ArticleCard numArtical='1' title='Acceptance of Terms' Icon={Handshake} content={content1}/>
        <ArticleCard numArtical='2' title='User Eligibility' Icon={CircleCheck} content={content2}/>
        <ArticleCard numArtical='3' title='Account Registration' Icon={IdCard} content={content3}/>
        <ArticleCard numArtical='4' title='Orders and Payments' Icon={CreditCard} content={content4}/>
        <ArticleCard numArtical='5' title='Shipping and Delivery' Icon={Truck} content={content5}/>
        <ArticleCard numArtical='6' title='Returns and Refunds' Icon={RefreshCcw} content={content6}/>
        <ArticleCard numArtical='7' title='Limitation of Liability' Icon={Scale} content={content7}/>
        <ArticleCard numArtical='8' title='Contact Us' Icon={Mail} content={content8}/>
    </div>

    <div className='container mt-5 flex justify-between py-5'>
        <div>
            <Link href={'/'} className='bg-gray-100 py-2 px-3 rounded-md flex items-center gap-1 max-w-fit hover:bg-gray-300 duration-200 shadow-lg'><span><MoveLeft/></span> Back To Home</Link>
        </div>
        <div>
            <Link href={'/privacyPolicy'} className='bg-main-primary-600 text-white py-2 px-3 rounded-md flex items-center gap-1 max-w-fit hover:bg-main-primary-800 duration-200 shadow-lg'>View Privacy Policy <span><MoveRight/></span></Link>
        </div>
    </div>
  </>
}
