import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/siteContent";

type NavBarProps = {
  setNav: (value: number) => void;
};

export default function NavBar({ setNav }: NavBarProps) {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Mobile navigation" className="mobile-nav">
      {navItems.map((item) => {
        const isActive =
          pathname === item.path || (pathname === "/" && item.path === "/home");

        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setNav(0)}
            className={`nav-link w-full justify-between rounded-none px-4 shadow-none ${
              isActive ? "nav-link-active" : ""
            }`}
          >
            <span>{item.label}</span>
            <span className="text-xs tracking-[0.22em] text-current">0{item.path === "/home" ? 1 : item.path === "/about" ? 2 : 3}</span>
          </Link>
        );
      })}
    </nav>
  );
}
