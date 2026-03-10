import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import Bottom from "./Bottom";
import LgNavBar from "./LgNavBar";
import NavBar from "./NavBar";

function ProtectedLayout() {
  const [nav, setNav] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setNav(0);
  }, [pathname]);

  return (
    <div className="premium-shell min-h-screen">
      <header className="header-bar">
        <div className="shell-width flex items-center justify-between py-4">
          <button
            onClick={() => navigate("/")}
            className="brand-lockup rounded-none shadow-none"
            aria-label="Go to home"
          >
            <span className="brand-mark">
              <img
                src="/emailapi-mark.svg"
                alt=""
                className="h-10 w-10 rounded-none shadow-none"
              />
            </span>
            <span className="text-left text-lg font-semibold tracking-[-0.03em] text-[var(--ink)]">
              Email API
            </span>
          </button>

          <div className="hidden lg:block">
            <LgNavBar />
          </div>

          <button
            className="flex h-12 w-12 items-center justify-center border border-[var(--line-strong)] text-[var(--ink)] lg:hidden"
            onClick={() => setNav(nav === 0 ? 1 : 0)}
            aria-label={nav === 0 ? "Open navigation" : "Close navigation"}
          >
            {nav === 0 ? <BiMenuAltRight size={26} /> : <AiOutlineClose size={24} />}
          </button>
        </div>

        {nav === 1 ? (
          <div className="mobile-menu-panel border-t border-[var(--line)] lg:hidden">
            <div className="shell-width py-4">
              <NavBar setNav={setNav} />
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <Bottom />
    </div>
  );
}

export default ProtectedLayout;
