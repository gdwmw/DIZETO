import type { NextAuthOptions, Session, User } from "next-auth";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { ILoginPayload } from "@/src/types/api";
import { GETDataUsersById, POSTLogin } from "@/src/utils/api";

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
          const { identifier, password } = credentials as ILoginPayload;

          const res = await POSTLogin({ identifier, password });

          if (!res) {
            return null;
          }

          const resdDataUsers = await GETDataUsersById({ id: res.id, token: res.token });

          if (!resdDataUsers) {
            return null;
          }

          const mapDataToResponse: User = {
            email: res.email,
            firstName: resdDataUsers.firstName,
            id: res.id.toString(),
            image: resdDataUsers.image as null | string,
            lastName: resdDataUsers.lastName,
            name: `${resdDataUsers.firstName} ${resdDataUsers.lastName}`,
            role: resdDataUsers.role as string,
            status: "authenticated",
            token: res.token,
            username: res.username,
          };

          return mapDataToResponse;
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
