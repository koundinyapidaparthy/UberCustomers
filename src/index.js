import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// this is for env
// require("dotenv").config()
// Sentry setup for my project
Sentry.init({
  dsn: "https://26a5029f08914a118ee323d475610eec@o1322014.ingest.sentry.io/6579042",
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0, 
});


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();





