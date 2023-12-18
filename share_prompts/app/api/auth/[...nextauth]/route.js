import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    async session({ session }) {

    },

    async signIn({ profile }) {

        try {
            await connectToDB();

            //check if user in db

            //create new user
            return true;
        }
        catch(err){
            console.log(err);
            return false;
        }
    
    },
})

export { handler as GET, handler as POST };