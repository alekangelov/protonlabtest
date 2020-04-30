import "../styles/index.scss";
import { createContext, useState } from "react";

export const AppContext = createContext({
  pricing: "12",
  currency: "EUR",
});

function MyApp({ Component, pageProps }) {
  const [pricing, setPricing] = useState("12");
  const [currency, setCurrency] = useState("EUR");
  return (
    <AppContext.Provider value={{ currency, pricing, setPricing, setCurrency }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
