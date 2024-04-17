import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./providers/AuthProvider";
import { ProtectedRouter } from "./components/ProtectedRouter";

import { Home } from "./modules/home";
import { Cursos } from "./modules/Cursos/cursos";
import { Auth } from "./modules/auth";
import { Layout } from "./modules/layout";
import { Chat } from "./modules/chat";
import { Relacionamento } from "./modules/relacionamento";
/* import { Provider } from "./context/Provider"; */
import { AcessibilityProvider } from "./providers/AccessibilityProvider";
import { Hiring } from "./modules/hiring";

const queryClient = new QueryClient();

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AcessibilityProvider>
            <AuthProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="/recrutamento"
                  element={
                    <Layout>
                      <Hiring />
                    </Layout>
                  }
                />
                <Route
                  path="/central"
                  element={
                    <Layout>
                      <Relacionamento />
                    </Layout>
                  }
                />
                <Route path="/login" element={<Auth />} />

                <Route
                  path="/chat"
                  element={
                    <ProtectedRouter>
                      <Chat />
                    </ProtectedRouter>
                  }
                />
                <Route
                  path="/cursos"
                  element={
                    <ProtectedRouter>
                      <Cursos />
                    </ProtectedRouter>
                  }
                />
              </Routes>
            </AuthProvider>
          </AcessibilityProvider>
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
