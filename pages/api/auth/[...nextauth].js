import NextAuth from "next-auth";
//import GithubProvider from "next-auth/providers/github";
/*import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    //GithubProvider({
    //  clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    //})
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    }),
    // ...add more providers here
  ]
};*/

import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    })
  ]
};

export default NextAuth(authOptions);
