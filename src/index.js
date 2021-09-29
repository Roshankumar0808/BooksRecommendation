import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const Footer = () => (
  <footer className="footer">
    <p>Made by Roshan,follow me on:</p>
    <a class="link" href="https://www.instagram.com/roshan4445/">
      Instagram
    </a>
  </footer>
);
// ReactDOM.render(
//   [<App key="1" />, <Footer key="2" />],
//   document.getElementById("root")
// );
ReactDOM.render(
  <StrictMode>
    <App key="1" />, <Footer key="2" />
    {/* document.getElementById("root") */}
  </StrictMode>,
  rootElement
);

