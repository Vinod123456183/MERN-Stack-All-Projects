import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./Router/Router";
import "./index.css";
import { ThemeProvider } from "./Components/Core/ThemContext";
import { CoinContextMain } from "./contexts/CoinContextMain";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ThemeProvider>
        <CoinContextMain>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </CoinContextMain>
      </ThemeProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
