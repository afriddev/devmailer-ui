import { Link, useNavigate } from "react-router-dom";
import { LuArrowRight, LuBadgeCheck, LuShieldCheck } from "react-icons/lu";

const capabilities = [
  {
    image: "/user.svg",
    title: "Service accounts",
    description: "Onboard larger customers faster with account-level sending flows.",
  },
  {
    image: "/lock.svg",
    title: "OAuth verification support",
    description:
      "Reduce friction around provider requirements and move through approval work more confidently.",
  },
  {
    image: "/scheduler.svg",
    title: "Scheduled send",
    description:
      "Queue user communication for better timing instead of shipping everything immediately.",
  },
  {
    image: "/barchart.svg",
    title: "High-volume usage",
    description: "Scale product messaging without making every team build its own send stack.",
  },
  {
    image: "/fingerprint.svg",
    title: "Scoped authentication",
    description:
      "Keep access boundaries clearer with tighter permission handling around email actions.",
  },
];

const steps = [
  {
    title: "Create an app password",
    description:
      "Start with a Gmail app password so your first implementation uses a real sending path immediately.",
  },
  {
    title: "Connect the SDK",
    description:
      "Install the package for your stack and wire in title, subject, recipient, and HTML body.",
  },
  {
    title: "Ship to users",
    description:
      "Move from test sends to real product messaging without rebuilding the interface or integration flow.",
  },
];

const deliveryModel = [
  {
    title: "One integration surface",
    description:
      "Product teams do not need separate interfaces for every language or documentation style.",
  },
  {
    title: "Operationally aware",
    description:
      "The project is framed around real sending flows, abuse prevention, and policy visibility.",
  },
  {
    title: "Independent stewardship",
    description:
      "Maintained as an independent project with direct ownership instead of anonymous template branding.",
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="premium-shell">
      <section className="section-pad">
        <div className="shell-width split-grid">
          <div className="space-y-6">
            <p className="eyebrow">
              <LuShieldCheck />
              Product overview
            </p>
            <h1 className="display-title">
              One email API. A cleaner path to production send flows.
            </h1>
            <p className="lead-copy">
              The product helps teams ship native email experiences faster:
              less custom infrastructure, less integration drag, and a more
              direct path to real-world delivery.
            </p>

            <div className="chip-row">
              <div className="data-chip">
                <LuBadgeCheck />
                HTML email support
              </div>
              <div className="data-chip">
                <LuBadgeCheck />
                Multi-language SDKs
              </div>
              <div className="data-chip">
                <LuBadgeCheck />
                Faster onboarding
              </div>
            </div>
          </div>

          <div className="premium-panel premium-grid-bg rounded-none p-4 shadow-none">
            <div className="hero-image-frame rounded-none shadow-none">
              <img
                src="/about-premium-grid.svg"
                alt="Email API capability illustration"
                className="rounded-none shadow-none"
              />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="metric-card rounded-none shadow-none">
                <p className="label mb-2">Positioning</p>
                <p className="support-copy">
                  Built for teams that need email features without expanding
                  their infrastructure surface area.
                </p>
              </div>
              <div className="metric-card rounded-none shadow-none">
                <p className="label mb-2">Confidence</p>
                <p className="support-copy">
                  Strong SDK coverage and a direct integration path make the
                  product easier to trust quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Operating model</p>
            <h2 className="section-title">
              Product positioning, project stewardship, and implementation clarity.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {deliveryModel.map((item) => (
              <article
                key={item.title}
                className="premium-panel rounded-none p-6 shadow-none"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="support-copy mt-4 text-[var(--muted-strong)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title">
              Core capabilities teams can activate from one integration.
            </h2>
          </div>

          <div className="feature-grid">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="feature-card rounded-none shadow-none"
              >
                <div className="feature-icon rounded-none shadow-none">
                  <img
                    src={capability.image}
                    alt=""
                    className="h-6 w-6 rounded-none shadow-none"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {capability.title}
                </h3>
                <p className="support-copy mt-4">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Implementation path</p>
            <h2 className="section-title">
              Start in three steps, without burying the real work.
            </h2>
          </div>

          <div className="timeline-grid">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="timeline-step rounded-none shadow-none"
              >
                <div className="timeline-number rounded-none shadow-none">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="support-copy mt-4">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width premium-panel rounded-none px-6 py-8 shadow-none md:px-10 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="eyebrow">Policies</p>
              <h2 className="section-title max-w-none">
                Dense legal and security pages are now part of the product story.
              </h2>
              <p className="lead-copy">
                Privacy, Terms, and Security are written as reviewable product
                pages, including anti-abuse retention and lawful disclosure
                language.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/privacy"
                className="button-secondary rounded-none shadow-none"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="button-secondary rounded-none shadow-none"
              >
                Terms
              </Link>
              <Link
                to="/security"
                className="button-secondary rounded-none shadow-none"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width premium-panel rounded-none px-6 py-8 shadow-none md:px-10 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="eyebrow">Next step</p>
              <h2 className="section-title max-w-none">
                Ready to turn the product story into a real integration?
              </h2>
              <p className="lead-copy">
                The next step is practical: open the docs, install the SDK for
                your stack, and wire the first send flow.
              </p>
            </div>

            <button
              onClick={() => navigate("/docs")}
              className="button-primary rounded-none shadow-none"
            >
              Integrate now
              <LuArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
