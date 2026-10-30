'use client'
import {
    CreditCard,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Logo from '@/assets/freshcart-logo.svg'
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Footer() {
    const userData = useSession()
  
  return (
    <footer className="bg-slate-900 text-gray-300 ">
      <div className="max-w-7xl container py-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="md:col-span-1">
          <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 mb-4">
            <Image src={Logo} alt="Fresh Cart"/>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            FreshCart is your one-stop destination for quality products. From
            fashion to electronics, we bring you the best brands at
            competitive prices with a seamless shopping experience.
          </p>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-green-500" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-green-500" />
              <span>support@freshcart.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-500" />
              <span>123 Commerce Street, New York, NY 10001</span>
            </div>
          </div>

      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-main-primary-700 duration-200 cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
        </div>

        <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-main-primary-700 duration-200 cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </div>

        <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-main-primary-700 duration-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
            <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508-.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
            clipRule="evenodd"
            />
            </svg>
        </div>

        <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-main-primary-700 duration-200 cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
          </svg>
        </div>
      </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-bold mb-4">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href={'/shop'} className="hover:text-main-primary-500 duration-200">All Products</Link></li>
            <li><Link href={'/categories'} className="hover:text-main-primary-500 duration-200">Categories</Link></li>
            <li><Link href={'/shop'} className="hover:text-main-primary-500 duration-200">Brands</Link></li>


          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-white font-bold mb-4">Account</h3>
          <ul className="space-y-3 text-sm">
            {userData.status=='authenticated'&&<li><Link href={`/myOrders/${userData.data?.user.id}`} className="hover:text-main-primary-400 duration-200">My Order</Link></li>}
            <li><Link href={'/wishlist'} className="hover:text-main-primary-400 duration-200">Wishlist</Link></li>
            <li><Link href={'/cart'} className="hover:text-main-primary-400 duration-200">Shopping Cart</Link></li>
            {userData.status!=='authenticated'&&<li><Link href={'/login'} className="hover:text-main-primary-400 duration-200">Sign In</Link></li>}
            {userData.status!=='authenticated'&&<li><Link href={'/register'} className="hover:text-main-primary-400 duration-200">Create Account</Link></li>}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-main-primary-400 duration-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-bold mb-4">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href={'/privacyPolicy'} className="hover:text-main-primary-400 duration-200">Privacy Policy</Link></li>
            <li><Link href={'/terms'} className="hover:text-main-primary-400 duration-200">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© 2026 FreshCart. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <CreditCard size={16} /> Visa
            </span>
            <span className="flex items-center gap-1">
              <CreditCard size={16} /> Mastercard
            </span>
            <span className="flex items-center gap-1">
              <CreditCard size={16} /> PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

