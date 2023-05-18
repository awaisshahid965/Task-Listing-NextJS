import TodoContainer from "@/src/context/TodoContainer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <TodoContainer>
        <Component {...pageProps} />
      </TodoContainer>
    </div>
  );
}
