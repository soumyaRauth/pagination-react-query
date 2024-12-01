import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  /**
   * !Lazy Initialization
   * Lazy Initialization
   * Lazy Initialization
   * Lazy Initialization
   * Lazy Initialization
   * Lazy Initialization
   * Lazy Initialization
   * Lazy Initialization
   * Lazy Initialization
   */
  const [lazyInitialization] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={lazyInitialization}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
