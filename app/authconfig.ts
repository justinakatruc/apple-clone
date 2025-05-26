export const authConfig = {
  providers: [],
  pages: {
    signIn: '/shop/signIn',
    signOut: '/shop/signOut',
    // verifyRequest: '/shop/verify-request',
    // newUser: null // Will disable the new account creation screen
  },
  callbacks: {
    authorized({auth, request} : any) {
      const isLoggedIn = auth?.user;
      const isHome = request.nextUrl.pathname.startsWith("/");
      if(isHome) {
        if(isLoggedIn) return true;
        return false;
      }
      else if (isLoggedIn) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    }
  }
}