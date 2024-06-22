import { authMiddleware} from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/api/:path*", "/checkout"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};