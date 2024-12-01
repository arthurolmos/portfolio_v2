import { NextRequest, NextResponse } from "next/server";
import { LocalesEnum } from "./app/[lang]/dictionaries/types";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = Object.values(LocalesEnum);

function getLocale(request: NextRequest) {
  const acceptLanguageKey = "accept-language";
  const acceptLanguageHeader = request.headers.get(acceptLanguageKey) as string;

  const languages = new Negotiator({
    headers: {
      [acceptLanguageKey]: acceptLanguageHeader,
    },
  }).languages();

  const defaultLocale = LocalesEnum["en-US"];

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
