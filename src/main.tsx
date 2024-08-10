import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home/Home.tsx";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page.tsx";
import Header from "./components/Header.tsx";
import Nav from "./components/nav/Nav.tsx";
import About from "./routes/about/About.tsx";
import Skills from "./routes/skills/Skills.tsx";
import Work from "./routes/work/Work.tsx";
import Resume from "./routes/resume/Resume.tsx";

import "./globals.css";
import Projects from "./routes/projects/Projects.tsx";

const Wrapper = (props: { children?: ReactNode }): ReactNode => (
  <div className="h-full w-full flex justify-between flex-col">
    <Header />
    <Nav />
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
    path: "/Projects",
    element: (
      <Wrapper>
        <Projects />
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
    element: <Navigate to="/Home" replace />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
