import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter,
  BiMailSend,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { policyLinks } from "../data/legalContent";

export default function Bottom() {
  return (
    <footer className="section-rule premium-shell">
      <div className="shell-width section-pad !py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
          <div className="space-y-4">
            <p className="eyebrow">Email API</p>
            <h2 className="section-title max-w-none text-3xl">
              Clean email infrastructure for product teams shipping quickly.
            </h2>
            <p className="support-copy max-w-xl">
              Built for fast setup, HTML email, and multi-language SDK support
              without the visual clutter that usually comes with dev tooling
              sites.
            </p>
          </div>

          <div className="space-y-4">
            <p className="label">Navigation</p>
            <div className="grid gap-3">
              <Link className="footer-link" to="/home">
                Home
              </Link>
              <Link className="footer-link" to="/about">
                About
              </Link>
              <Link className="footer-link" to="/docs">
                Docs
              </Link>
              <a
                className="footer-link"
                href="https://www.buymeacoffee.com/afriddev"
                rel="noreferrer"
                target="_blank"
              >
                Support the project
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="label">Policies</p>
            <div className="grid gap-3">
              {policyLinks.map((item) => (
                <Link key={item.path} className="footer-link" to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="label">Connect</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://twitter.com/afriddev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-none shadow-none"
                aria-label="Twitter"
              >
                <BiLogoTwitter size={22} />
              </a>
              <a
                href="mailto:afridayan01@gmail.com"
                className="social-link rounded-none shadow-none"
                aria-label="Email"
              >
                <BiMailSend size={22} />
              </a>
              <a
                href="https://github.com/afriddev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-none shadow-none"
                aria-label="GitHub"
              >
                <BiLogoGithub size={22} />
              </a>
              <a
                href="https://instagram.com/afriddev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link rounded-none shadow-none"
                aria-label="Instagram"
              >
                <BiLogoInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Email API. All rights reserved.</p>
          <p>Flat surfaces. Sharp lines. Cleaner docs.</p>
        </div>
      </div>
    </footer>
  );
}
