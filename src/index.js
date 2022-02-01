import React from "react";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { messages as messagesEn } from "./locales/en/messages";
import { messages as messagesDe } from "./locales/de/messages";

async function bootstrap() {
  i18n.load("en", messagesEn);
  i18n.load("de", messagesDe);

  console.info("messagesDe", messagesEn);

  i18n.activate("de");

  ReactDOM.render(
    <I18nProvider i18n={i18n}>
      <Trans>Message Inbox</Trans>
      <br />
      <Trans>Hello World</Trans>
      <br />
      <Trans>Welcome</Trans>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nProvider>,
    document.getElementById("root")
  );
}

bootstrap();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
