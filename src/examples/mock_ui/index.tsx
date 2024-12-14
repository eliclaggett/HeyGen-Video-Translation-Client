/*
 * Filename: index.tsx
 * Author: Elijah Claggett
 *
 * Description:
 * This ReactJS file is the entrypoint to our demo application for testing the Heygen Video Translation Client
 */

// Imports
import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";

// UI
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
