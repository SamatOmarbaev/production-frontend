import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";
import { Themeprovider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <Themeprovider>
      <App />
    </Themeprovider>
  </BrowserRouter>,
  document.getElementById("root")
);
