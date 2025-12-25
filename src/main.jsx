import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppUsePopCorn from "./AppUsePopCorn";
import AppChallenge1 from "./AppChallenge1";
import AppHowReactWorks from "./AppHowReactWorks";
import AppCurrencyConverterChanllenge from "./AppCurrencyConverterChanllenge";
import AppUseGeolocate from "./AppUseGeolocate";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppUsePopCorn />
    {/* <AppChallenge1 /> */}
    {/* <AppHowReactWorks /> */}
    {/* <AppCurrencyConverterChanllenge /> */}
    {/* <AppUseGeolocate /> */}
  </StrictMode>
);
