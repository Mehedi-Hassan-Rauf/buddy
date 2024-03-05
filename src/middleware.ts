export { default } from "next-auth/middleware";

export const config = {
  // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],

  matcher: [
    // "/",
    "/all-problems",
    "/ranking",
    "/share-problem",
    "/your-contributions",
  ],
};
