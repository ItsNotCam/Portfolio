import React, { CSSProperties, ReactNode } from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home/HomeRoute.tsx";

import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page.tsx";
import Header from "./components/Header.tsx";
import Nav from "./components/nav/Nav.tsx";
import About from "./routes/about/AboutRoute.tsx";
import Skills from "./routes/skills/SkillsRoute.tsx";
import Work from "./routes/work/WorkRoute.tsx";
import Resume from "./routes/resume/ResumeRoute.tsx";
import Projects from "./routes/projects/ProjectsRoute.tsx";

export default function CustomCursor(): JSX.Element {
	const [mousePos, setMousePos] = useState<CSSProperties>({ left: 0, top: 0 })

	document.addEventListener('mousemove', (e: MouseEvent) => {
		setMousePos({ left: e.pageX, top: e.pageY });
	})

	return (
		<div className={
			`fixed -translate-x-1/2 -translate-y-1/2 h-6 w-6 border-2 border-custom-text-100 rounded-full pointer-events-none overflow-hidden` 
		} style={{...mousePos, zIndex: 999999}}
		/>
	)
}

const Wrapper = (props: { children?: ReactNode }): ReactNode => (
  <div className="flex flex-col justify-between h-full w-full">
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
		<CustomCursor />
    <RouterProvider router={router} />
  </React.StrictMode>
);
