import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, lazy, Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { MainLayout } from "./layouts/MainLayout";

const HomePageController = lazy(() => import("./pages/HomePageController"));

export const AppController: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Suspense fallback={<div>Loading...</div>}>
                  <HomePageController />
                </Suspense>
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
