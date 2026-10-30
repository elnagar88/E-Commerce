import ArticleCard from '@/components/ui/articalCard/ArticalCard';
import HeroSection from '@/components/ui/heroSection/HeroSection';
import PrivacyHeader from '@/components/ui/privacyHeader/PrivacyHeader';
import { Clock, Cookie, Database, Lock, Mail, MoveLeft, MoveRight, Share2, Shield, UserCheck, UserShield } from 'lucide-react';
import Link from 'next/link';


export default function page() {
    const content1 = [
        {num:1.1,subtitle:'Personal Data: ',description:'Name, email address, phone number, and shipping address.'},
        {num:1.2,subtitle:'Payment  Data: ',description:'Credit card information processed securely through our payment providers.'},
        {num:1.3,subtitle:'Technical  Data: ',description:'IP address, browser type, device information, and access times.'},
        {num:1.4,subtitle:'Usage  Data: ',description:'Pages viewed, products browsed, and actions taken within our platform.'}
    ]
    const content2 = [
        {num:2.1,description:'To process and fulfill your orders.'},
        {num:2.2,description:'To send order confirmations and shipping updates.'},
        {num:2.3,description:'To provide customer support and respond to inquiries.'},
        {num:2.4,description:'To improve our products, services, and user experience.'},
        {num:2.5,description:'To send promotional communications (with your consent).'}
    ]
    const content3 = [
        {num:3.1,description:'We implement industry-standard encryption (SSL/TLS) for all data transfers.'},
        {num:3.2,description:'Payment information is processed by PCI-compliant payment providers.'},
        {num:3.3,description:'We conduct regular security audits and vulnerability assessments.'},
        {num:3.4,description:'Access to personal data is restricted to authorized personnel only.'}
    ]
    const content4 = [
        {num:4.1,description:'We do not sell, trade, or rent your personal information to third parties.'},
        {num:4.2,description:'We may share data with trusted service providers who assist in our operations.'},
        {num:4.3,description:'We may disclose information when required by law or to protect our rights.'},
    ]
    const content5 = [
        {num:5.1,subtitle:'Access: ',description:'Request a copy of your personal data.'},
        {num:5.2,subtitle:'Rectification: ',description:'Request correction of inaccurate data.'},
        {num:5.3,subtitle:'Erasure: ',description:'Request deletion of your personal data.'},
        {num:5.4,subtitle:'Portability: ',description:'Request your data in a portable format.'},
        {num:5.5,subtitle:'Opt-out: ',description:'Unsubscribe from marketing communications at any time.'},
    ]
    const content6 = [
        {num:6.1,description:'We use cookies to enhance your browsing experience and remember preferences.'},
        {num:6.2,description:'You can control cookie settings through your browser preferences.'},
        {num:6.3,description:'Disabling cookies may affect the functionality of certain features.'},
    ]
    const content7 = [
        {description:'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Account data is deleted within 30 days of account closure upon request.'},
    ]
    const content8 = [
        {description:'For questions about this Privacy Policy or to exercise your rights, contact our Data Protection Officer at ',email:'support@freshcart.com'},
    ]
  return <>
    <HeroSection path='Privacy Policy' subtitle='Last updated: September 2026' title='Privacy Policy' Icon={Shield}/>
    <PrivacyHeader title='Your Privacy Matters' description='This Privacy Policy describes how FreshCart collects, uses, and protects your personal information when you use our services. We are committed to ensuring that your privacy is protected.' Icon={Shield}/>
    <div className='container grid lg:grid-cols-2 gap-5 border-b pb-8'>
    <ArticleCard numArtical='1' title='Information We Collect' Icon={Database} content={content1}/>
    <ArticleCard numArtical='2' title='How We Use Your Information' Icon={  UserShield} content={content2}/>
    <ArticleCard numArtical='3' title='Data Protection' Icon={Lock} content={content3}/>
    <ArticleCard numArtical='4' title='Information Sharing' Icon={Share2} content={content4}/>
    <ArticleCard numArtical='5' title='Your Rights' Icon={UserCheck} content={content5}/>
    <ArticleCard numArtical='6' title='Cookies' Icon={Cookie} content={content6}/>
    <ArticleCard numArtical='7' title='Data Retention' Icon={Clock} content={content7}/>
    <ArticleCard numArtical='8' title='Contact Us' Icon={Mail} content={content8}/>
    </div>
    <div className='container mt-5 flex justify-between py-5'>
        <div>
            <Link href={'/'} className='bg-gray-100 py-2 px-3 rounded-md flex items-center gap-1 max-w-fit hover:bg-gray-300 duration-200 shadow-lg'><span><MoveLeft/></span> Back To Home</Link>
        </div>
        <div>
            <Link href={'/terms'} className='bg-main-primary-600 text-white py-2 px-3 rounded-md flex items-center gap-1 max-w-fit hover:bg-main-primary-800 duration-200 shadow-lg'>View Terms Of Services <span><MoveRight/></span></Link>
        </div>
    </div>
  </>
}
