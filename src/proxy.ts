    import { getToken } from "next-auth/jwt";
    import { NextRequest, NextResponse } from "next/server";

    export default async function proxy(req:NextRequest) {
        const pathName = req.nextUrl.pathname
        const isAuthPage =
        pathName === '/login' ||
        pathName === '/register' ||
        pathName === '/forgetPassword';
          const token = await getToken({
            req:req,
            secret:process.env.AUTH_SECRET
        })

        if(isAuthPage){
            if(token){
                return NextResponse.redirect(new URL('/',req.url))
            }else{
                return NextResponse.next()
            }
        }

        if(token){
            return NextResponse.next()
        } else{

            return NextResponse.redirect(new URL('/login',req.url))
        }


        
    }
    export const config = {
    matcher: ["/cart/:path*", "/wishlist/:path*", "/login", "/register","/forgetPassword","/settings","/myOrders/:path*","/checkout/:path*"],
    };
