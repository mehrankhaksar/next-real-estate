"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ({ children, ...props }) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
