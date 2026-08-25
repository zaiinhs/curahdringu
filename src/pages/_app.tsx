import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { plusJakarta } from "@/lib/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <style jsx global>{`
        :root {
          --font-plus-jakarta: ${plusJakarta.style.fontFamily};
        }
      `}</style>
      <div className={plusJakarta.variable}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
