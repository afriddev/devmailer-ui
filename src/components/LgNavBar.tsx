import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/siteContent";

export default function LgNavBar() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-2">
      {navItems.map((item) => {
        const isActive =
          pathname === item.path || (pathname === "/" && item.path === "/home");

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link rounded-none shadow-none ${
              isActive ? "nav-link-active" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
