import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtecteRoute = createRouteMatcher([
  "/add-job",
  "/jobs(.*)",
  "/stats",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtecteRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
