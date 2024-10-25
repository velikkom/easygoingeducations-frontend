import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const res = await login(credentials);

        const data = await res.json();

        console.log(data);

        if (!res.ok) return null;

        const payload = {
          user: { ...data },
          accessToken: data.token,
        };
        delete payload.user.token;

        return payload;
      },
    }),
  ],
  callbacks: {
    //middleware de ayarlandığı şekliyle NextAuth un kapdama alanı na giren sayfalara yapılan
    //
    authorized({ auth, request }) {
      const { pathhname } = request.nextUrl;
      




      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const { accessToken, user } = token;
      session.user = user;
      session.accessToken = accessToken;
      return session;
      console.log(session);
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
