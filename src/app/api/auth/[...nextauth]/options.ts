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
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          throw new Error("Fill all the fields");
        }
        const user = await User.findOne({ email: email });
        try {
          if (user) {
            console.log("User Exists");
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
              throw new Error("Wrong password");
              // return { error: "Wrong password" };
            } else {
              return user;
            }
          } else {
            throw new Error("No user with the given email");
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // return token;
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      if (token.sub && session.user) {
        session.user.image = token.sub;
      }
      return session;
    },
  },
};
