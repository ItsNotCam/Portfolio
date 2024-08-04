import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.tsx";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page.tsx";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import About from "./routes/About.tsx";
import Skills from "./routes/Skills.tsx";
import Work from "./routes/Work.tsx";
import Resume from "./routes/Resume.tsx";

import './globals.css';

const Wrapper = (props: { children?: ReactNode }): ReactNode => (
  <div className="flex flex-col justify-between items-center min-h-screen w-full gap-1">
    <div className="flex flex-col w-full">
      <Header />
      <Nav />
    </div>
    {props.children}
  </div>
);

export const routes = [
  {
    path: "/Home",
    element: (
      <Wrapper>
        <Home />
      </Wrapper>
    ),
  },
  {
    path: "/About",
    element: (
      <Wrapper>
        <About />
      </Wrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Skills",
    element: (
      <Wrapper>
        <Skills />
      </Wrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Work",
    element: (
      <Wrapper>
        <Work />
      </Wrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Resume",
    element: (
      <Wrapper>
        <Resume />
      </Wrapper>
    ),
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter([
  ...routes,
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
