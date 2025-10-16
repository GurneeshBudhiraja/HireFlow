import { Montserrat, Roboto, Nunito, Doto } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  fallback: ["system-ui", "arial"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  fallback: ["system-ui", "arial"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  fallback: ["system-ui", "arial"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});


export const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
  fallback: ["system-ui", "arial"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});