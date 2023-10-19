import store from "@/store/store";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
