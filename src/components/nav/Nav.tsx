import { routes } from "../../main";
import { Link, useLocation } from "react-router-dom";

import "./nav.css";
import { useState } from "react";
import { Hamburger } from "../Icons";

export default function Nav() {
  const location = useLocation();
  const { pathname } = location;

  const [droppedDown, setDroppedDown] = useState<boolean>(false);

  return (
    <div id="nav" className="nav-wrapper">
      <div
        className="nav-dropdown"
        onClick={() => setDroppedDown(!droppedDown)}
      >
        <Hamburger color={droppedDown ? "#F0B65A" : "#AFAFAF"} />
      </div>
      <nav className="nav" data-dropped-down={droppedDown}>
        {routes.map((route) => (
          <Link
            key={`nav-${route.path.replace("/", "")}`}
            className={`nav-item lowercase ${route.path === pathname ? "nav-item-selected" : ""}`}
            to={route.path}
            onClick={() => setDroppedDown(false)}
          >
            {route.path.replace("/", "_")}
          </Link>
        ))}
      </nav>
      <div className="nav-relief" />
    </div>
  );
}
