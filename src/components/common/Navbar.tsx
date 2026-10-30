"use client";
import Logo from "@/assets/Logo.svg";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback
} from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CartContext } from "@/context/CartContext";
import { ChevronDown, Heart, LogOut, Menu, Package, Settings, ShoppingCart, UserRound, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const userData = useSession();
  const { numOfCart } = useContext(CartContext);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  async function handleLogout() {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    setIsOpen(false);
    try {
      await signOut({ redirect: false });
      router.push("/login");
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm py-1.5 px-2">
      {/* Navbar Desktop (lg and up) */}
      <div className="hidden lg:flex items-center justify-between gap-4 px-4 xl:px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image src={Logo} alt="Fresh Cart" />
        </Link>

        {/* Search */}

        {/* Links */}
        <div className="flex gap-8 items-center shrink-0">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`transition-colors hover:text-main-primary-800 font-exo text-xl ${
                  active ? "text-main-primary-800 font-semibold" : "text-gray-700 font-medium"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 xl:gap-5 shrink-0">
          <Link href="/wishlist" className="text-gray-500 hover:text-red-400">
            <Heart size={24} strokeWidth={1.8} />
          </Link>

          <Link href="/cart" className="relative text-gray-500 hover:text-main-primary-500">
            <div>
              <ShoppingCart size={25} strokeWidth={1.8} className="relative" />
              {numOfCart > 0 && (
                <div className="absolute w-5.5 h-5.5 text-center rounded-2xl -right-3 top-2 bg-main-primary-400 text-white">
                  <span>{numOfCart}</span>
                </div>
              )}
            </div>
          </Link>

          {userData.status == "authenticated" ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback><UserRound /></AvatarFallback>
                  <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <Link href={`/myOrders/${userData.data.user.id}`}>
                    <DropdownMenuItem className="hover:bg-main-primary-500! hover:text-white! hover:cursor-pointer duration-200">
                      My Orders
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/settings">
                    <DropdownMenuItem className="hover:bg-main-primary-500! hover:text-white! hover:cursor-pointer duration-200">
                      Settings
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    className="hover:bg-red-600! hover:text-white! hover:cursor-pointer duration-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className="flex items-center gap-2">
              <Button className="h-10 rounded-full bg-main-primary-500 px-4 xl:px-6 text-sm font-semibold text-white shadow-md hover:bg-main-primary-600">
                <UserRound size={17} />
                <span>Sign In</span>
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile / Tablet Navbar (below lg) */}
      <div className="flex lg:hidden items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/">
          <Image src={Logo} alt="Fresh Cart" />
        </Link>
        <button onClick={() => setIsOpen(true)} aria-label="Open menu">
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-screen w-72 sm:w-80 max-w-[85vw] bg-white
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
       <ScrollArea className="h-screen">
  <div className="flex min-h-screen flex-col justify-between">
    {/* Top: Header + Links */}
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5">
        <Image src={Logo} alt="Fresh Cart" />
        <button onClick={() => setIsOpen(false)} aria-label="Close menu">
          <X size={28} />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-5 px-6 py-8 border-t space-y-8">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              onClick={() => setIsOpen(false)}
              className={`font-medium transition-colors hover:text-main-primary-800 ${
                active ? "text-main-primary-800 font-semibold" : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>

    {/* Middle: Wishlist & Cart */}
    <div className="px-4">
      <Link
        href="/wishlist"
        className="flex items-center gap-3 py-4 border-t border-gray-100"
        onClick={() => setIsOpen(false)}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
          <Heart size={20} strokeWidth={2} className="text-red-500" />
        </div>
        <span className="text-[16px] font-medium text-slate-700 hover:text-main-primary-800">
          Wishlist
        </span>
      </Link>

      <Link
        href="/cart"
        className="flex items-center gap-3 py-4 border-b border-gray-100"
        onClick={() => setIsOpen(false)}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
          <ShoppingCart size={20} strokeWidth={2} className="text-green-600" />
        </div>
        <span className="text-[16px] font-medium text-slate-700 hover:text-main-primary-800">
          Cart
        </span>
      </Link>
    </div>

    {/* Bottom: Profile / Auth */}
    <div className="px-4 pb-6">
      {userData.status == "authenticated" ? (
        <div>
          <Collapsible className="border-b" open={isProfileOpen} onOpenChange={setIsProfileOpen}>
            <CollapsibleTrigger className="flex w-full cursor-pointer items-center gap-3 py-4 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600">
                <UserRound size={22} strokeWidth={2} className="text-white" />
              </div>
              <span className="flex-1 text-[16px] font-medium text-slate-700">Profile</span>
              <ChevronDown
                size={20}
                className={`text-slate-500 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="border-gray-200 pl-4">
                <Link
                  href={`/myOrders/${userData.data.user.id}`}
                  className="flex items-center gap-3 py-3"
                  onClick={() => { setIsOpen(false); setIsProfileOpen(false); }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                    <Package size={18} className="text-slate-600" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-700 hover:text-main-primary-800">
                    My Orders
                  </span>
                </Link>

                <Link
                  href="/settings"
                  className="flex items-center gap-3 py-3"
                  onClick={() => { setIsOpen(false); setIsProfileOpen(false); }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                    <Settings size={18} className="text-slate-600" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-700 hover:text-main-primary-800">
                    Settings
                  </span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="group flex w-full items-center gap-3 py-4 text-left border-gray-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 transition-colors duration-200 group-hover:bg-red-600">
              <LogOut size={20} strokeWidth={2} className="text-red-500 transition-colors duration-200 group-hover:text-white" />
            </div>
            <span className="text-[16px] font-medium text-red-600">
              {isLoggingOut ? "Logging out..." : "Logout"}
            </span>
          </button>
        </div>
      ) : (
        <div className="flex gap-3 py-5 justify-center">
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="py-2 px-6 rounded-xl bg-green-600 text-[16px] font-semibold text-white transition hover:bg-green-700"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="py-2 px-6 rounded-xl border-2 border-green-600 text-[16px] font-semibold text-green-600 transition hover:bg-green-50"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  </div>
</ScrollArea>
      </div>
    </nav>
  );
}