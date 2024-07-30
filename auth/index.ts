import type { NextAuthOptions, Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { IAuthPayload } from "@/src/types/api";
import { GETAuth } from "@/src/utils/api";

export const options: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user = { ...session.user, ...token };
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials: Record<never, string> | undefined): Promise<null | User> {
        if (!credentials) {
          return null;
        }

        try {
          //   const res = await POSTAuth(credentials as IAuthPayload);

          const data = await GETAuth();
          const payload = credentials as IAuthPayload;
          const res = data.find((user) => user.username === payload.username && user.password === payload.password);

          if (!res) {
            return null;
          }

          /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
          const { password, ...resWithoutPassword } = res;

          return resWithoutPassword;
        } catch (error) {
          console.error("Authorization:", error);
          return null;
        }
      },
      credentials: {},
      name: "Credentials",
    }),
  ],

  session: {
    maxAge: 60 * 60 * 24,
    strategy: "jwt",
  },
};
