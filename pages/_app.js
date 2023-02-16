import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // <SessionProvider session={pageProps.session} basePath="/">
    // <RecoilRoot>
    <div>
      <Component {...pageProps} />
    </div>
    // </RecoilRoot>
    // </SessionProvider>
  );
}
