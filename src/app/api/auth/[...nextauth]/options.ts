import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import connectDB from "@/lib/db";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await User.findOne({ email: email });
        try {
          if (user) {
            console.log("User Exists");
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
              throw new Error("User does not exist");
            }
          }
        } catch (error) {
          console.log(error);
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
