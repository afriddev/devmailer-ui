import { Link } from "react-router-dom";
import { LuArrowRight, LuFileText, LuScale, LuShieldCheck } from "react-icons/lu";
import {
  policyLinks,
  type PolicyContent,
} from "../data/legalContent";

type PolicyLayoutProps = {
  policy: PolicyContent;
};

export default function PolicyLayout({ policy }: PolicyLayoutProps) {
  return (
    <div className="premium-shell">
      <section className="section-pad">
        <div className="shell-width split-grid">
          <div className="space-y-6">
            <p className="eyebrow">
              <LuScale />
              {policy.eyebrow}
            </p>
            <h1
              className="max-w-none text-[clamp(2.7rem,5vw,5.1rem)] leading-[0.96] tracking-[-0.05em]"
              style={{ fontFamily: '"Fraunces", serif' }}
            >
              {policy.title}
            </h1>
            <p className="lead-copy">{policy.intro}</p>

            <div className="chip-row">
              <div className="data-chip">
                <LuFileText />
                Updated {policy.updatedAt}
              </div>
              <div className="data-chip">
                <LuShieldCheck />
                Independent project policy
              </div>
            </div>

            <div className="space-y-4">
              {policy.summary.map((item, index) => (
                <div
                  key={item}
                  className="premium-panel flex gap-4 rounded-none p-5 shadow-none"
                >
                  <div className="timeline-number !mb-0 h-10 w-10 text-sm">
                    0{index + 1}
                  </div>
                  <p className="support-copy text-[var(--muted-strong)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-panel premium-grid-bg rounded-none p-4 shadow-none">
            <div className="hero-image-frame rounded-none shadow-none">
              <img
                src="/policy-premium-grid.svg"
                alt="Policy overview illustration"
                className="rounded-none shadow-none"
              />
            </div>

            <div className="mt-4 grid gap-3">
              {policy.highlights.map((item) => (
                <div
                  key={item.label}
                  className="metric-card rounded-none shadow-none"
                >
                  <p className="label mb-2">{item.label}</p>
                  <p className="support-copy text-[var(--muted-strong)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Policy details</p>
            <h2 className="section-title max-w-none">
              Dense sections for operations, data, abuse handling, and legal disclosure.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {policy.sections.map((section) => (
              <article
                key={section.title}
                className="premium-panel rounded-none p-6 shadow-none"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {section.title}
                </h3>

                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="support-copy text-[var(--muted-strong)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <div className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex gap-3 border-t border-[var(--line)] pt-3"
                      >
                        <span className="badge">Item</span>
                        <p className="support-copy text-[var(--muted-strong)]">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width premium-panel rounded-none px-6 py-8 shadow-none md:px-10 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="eyebrow">Related policies</p>
              <h2 className="section-title max-w-none">
                Read the rest of the legal and security set.
              </h2>
              <p className="lead-copy">
                These policy pages are written to be practical and dense, not vague filler.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {policyLinks
                .filter((item) => item.path !== `/${policy.slug}`)
                .map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="button-secondary rounded-none shadow-none"
                  >
                    {item.label}
                    <LuArrowRight />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
