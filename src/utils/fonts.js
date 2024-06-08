import localFont from "next/font/local";

export const Vazir = localFont({
  variable: "--font-vazir",
  src: [
    {
      path: "../../public/assets/fonts/Vazir/Vazir-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Vazir/Vazir-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Vazir/Vazir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Vazir/Vazir-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Vazir/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Vazir/Vazir-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Vazir/Vazir-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
