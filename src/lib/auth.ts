import { jwtDecode } from 'jwt-decode';
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOption: AuthOptions = {
    providers: [
        Credentials({
            name: 'Fresh Cart',
            credentials: {
                email: { placeholder: 'Enter Email' },
                password: { type: 'password', placeholder: 'Enter Password' }
            },
            async authorize(credentials) {
                const response = await fetch(`${process.env.BASE_URL}/api/v1/auth/signin`, {
                    body: JSON.stringify(credentials),
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                const data = await response.json()
                if (data.message == 'success') {
                    const decodedToken: { id: string } = jwtDecode(data.token)
                    return {
                        id: decodedToken.id,
                        name: data.user.name,
                        email: data.user.email,
                        token: data.token
                    }
                } else {
                    throw new Error(data.message)
                }
            }
        })
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.token = user.token
                token.id = user.id
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id as string
            return session
        },
    }
    ,
    pages: {
        signIn: '/login'
    }
}