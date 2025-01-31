import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Hero.css";
import "@/styles/Categories.css";
import "@/styles/Essentials.css";
import "@/styles/RoadMap.css";
import "@/styles/SteppedTimeline.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
