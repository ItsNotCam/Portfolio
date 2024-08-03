import { routes } from "../main";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div id="nav" className="w-full flex flex-row gap-1">
      <nav className="flex flex-row gap-1 max-nav:flex-grow" role="navigation">
        {routes.map((route) => (
          <Link
            key={`nav-${route.path.replace("/", "")}`}
            className={
              `nav:w-52 max-nav:flex-grow bg-custom-off-dark-800 text-center ` +
              `p-1 cursor-pointer border-t-4 pb-2 ` +
              `transition-all duration-200 ` +
              `${
                route.path.toLowerCase() === pathname.toLowerCase()
                  ? " border-custom-red text-custom-orange"
                  : " border-transparent text-custom-text-300 hover:text-custom-orange "
              }`
            }
            to={route.path}
          >
            {route.path.replace("/", "_").toLowerCase()}
          </Link>
        ))}
      </nav>
      <div className="w-auto flex-grow bg-custom-off-dark-800 border-t-4 border-transparent max-nav:hidden" />
    </div>
  );
}
