import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DiDart, DiPython } from "react-icons/di";
import { LiaJava } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";
import {
  LuArrowRight,
  LuBadgeCheck,
  LuBookOpen,
  LuBoxes,
  LuClock3,
  LuExternalLink,
  LuMail,
  LuServerCog,
  LuSparkles,
} from "react-icons/lu";
import PremiumCodeEditor from "../components/PremiumCodeEditor";
import { sdkOptions, type SdkId } from "../data/siteContent";

const features = [
  {
    image: "/connectivity.svg",
    title: "Unified provider reach",
    description:
      "One integration layer gives your product a clean path into user email workflows.",
  },
  {
    image: "/marketFaster.svg",
    title: "Fast implementation",
    description:
      "Developer-facing tooling stays light, so launch timelines stay focused on product work.",
  },
  {
    image: "/productivity.svg",
    title: "Reliable delivery flow",
    description:
      "Use the API for production email without building a separate sending layer from scratch.",
  },
  {
    image: "/scheduler.svg",
    title: "HTML-ready messaging",
    description:
      "Rich body content is supported from the start for onboarding, alerts, and scheduled sends.",
  },
];

const operatingNotes = [
  "Dart, JavaScript, Python, and Java examples stay aligned across the product site and docs.",
  "App password setup is documented clearly so teams can move from test to live usage quickly.",
  "The product surface stays structured so developers can scan value and next steps quickly.",
];

const useCases = [
  {
    label: "Lifecycle",
    title: "Onboarding and activation mail",
    description:
      "Handle verification, welcome journeys, release notices, and product education with HTML-ready content.",
  },
  {
    label: "Operations",
    title: "Internal alerts and workflow sends",
    description:
      "Trigger approvals, summaries, reminders, and ops notifications without building separate email infrastructure.",
  },
  {
    label: "User action",
    title: "In-app send flows",
    description:
      "Let your users initiate receipts, confirmations, and scheduled messages directly from product workflows.",
  },
];

const workflow = [
  {
    title: "Choose the stack",
    description:
      "Start with Dart, JavaScript, Python, or Java and use the matching package surface immediately.",
  },
  {
    title: "Install and configure",
    description:
      "Copy the command, create an app password if required, and map sender, recipient, subject, and body.",
  },
  {
    title: "Ship HTML mail",
    description:
      "Use the same request model to send structured HTML email instead of plain text-only flows.",
  },
  {
    title: "Operate safely",
    description:
      "Rely on clearer docs, anti-abuse posture, and policy pages for trust, review, and governance work.",
  },
];

function getSdkIcon(id: SdkId) {
  if (id === "dart") {
    return <DiDart className="text-2xl" />;
  }

  if (id === "python") {
    return <DiPython className="text-2xl" />;
  }

  if (id === "java") {
    return <LiaJava className="text-2xl" />;
  }

  return <TbBrandJavascript className="text-2xl" />;
}

export default function Home() {
  const navigate = useNavigate();
  const [activeSdkId, setActiveSdkId] = useState<SdkId>("dart");
  const activeSdk =
    sdkOptions.find((option) => option.id === activeSdkId) || sdkOptions[0];
  const [code, setCode] = useState(activeSdk.code);

  useEffect(() => {
    setCode(activeSdk.code);
  }, [activeSdk.code]);

  return (
    <div className="premium-shell">
      <section className="section-pad">
        <div className="shell-width split-grid">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="eyebrow">
                <LuSparkles />
                Unified email infrastructure
              </p>
              <h1 className="display-title">
                Ship email flows that look product-grade.
              </h1>
              <p className="lead-copy">
                Email API gives your app one clean surface for HTML email,
                transactional messages, and user-triggered sends. Move from
                prototype to production with SDKs for Dart, JavaScript, Python,
                and Java.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/docs")}
                className="button-primary rounded-none shadow-none"
              >
                Read the docs
                <LuArrowRight />
              </button>
              <a
                href="https://pub.dev/packages/email_sender"
                target="_blank"
                rel="noreferrer"
                className="button-secondary rounded-none shadow-none"
              >
                View Dart package
                <LuExternalLink />
              </a>
            </div>

            <div className="chip-row">
              <div className="data-chip">
                <LuBadgeCheck />
                Top #2 on pub.dev
              </div>
              <div className="data-chip">
                <LuMail />
                2,000+ weekly downloads
              </div>
              <div className="data-chip">
                <LuClock3 />
                HTML email support
              </div>
            </div>

            <div className="stat-strip premium-panel overflow-hidden rounded-none shadow-none">
              <div className="stat-block">
                <span className="label">Developers</span>
                <p className="metric-value">1,000+</p>
                <p className="metric-label">Teams and builders using the SDK layer worldwide.</p>
              </div>
              <div className="stat-block">
                <span className="label">Daily requests</span>
                <p className="metric-value">3,000+</p>
                <p className="metric-label">Steady usage across app flows, test sends, and product alerts.</p>
              </div>
              <div className="stat-block">
                <span className="label">SDK surface</span>
                <p className="metric-value">4</p>
                <p className="metric-label">Supported ecosystems with aligned setup and sample code.</p>
              </div>
            </div>
          </div>

          <div className="premium-panel premium-grid-bg rounded-none shadow-none">
            <div className="hero-media">
              <div className="flex items-center justify-between border border-[var(--line)] bg-[rgba(255,255,255,0.34)] px-4 py-3">
                <div>
                  <p className="label mb-1">Preview</p>
                  <p className="text-lg font-semibold tracking-[-0.03em]">
                    Delivery system overview
                  </p>
                </div>
                <span className="badge">Live-ready layout</span>
              </div>

              <div className="hero-image-frame rounded-none shadow-none">
                <img
                  src="/hero-premium-grid.svg"
                  alt="Email API system illustration"
                  className="rounded-none shadow-none"
                />
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="metric-card rounded-none shadow-none">
                  <LuBookOpen className="mb-4 text-2xl text-[var(--accent-strong)]" />
                  <p className="label mb-2">Docs</p>
                  <p className="support-copy">
                    Clear onboarding for app passwords, installs, and first send.
                  </p>
                </div>
                <div className="metric-card rounded-none shadow-none">
                  <LuBoxes className="mb-4 text-2xl text-[var(--accent-strong)]" />
                  <p className="label mb-2">SDKs</p>
                  <p className="support-copy">
                    Keep teams moving with matching examples in every supported language.
                  </p>
                </div>
                <div className="metric-card rounded-none shadow-none">
                  <LuServerCog className="mb-4 text-2xl text-[var(--accent-strong)]" />
                  <p className="label mb-2">Integration</p>
                  <p className="support-copy">
                    Product teams can wire sending logic without building infra from zero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">SDK playground</p>
            <h2 className="section-title">
              Pick a language and inspect the implementation surface.
            </h2>
            <p className="lead-copy">
              Choose the stack your team already uses, copy the install command,
              and adapt a working example without hunting through scattered
              package pages.
            </p>
          </div>

          <div className="docs-layout">
            <div className="space-y-4">
              {sdkOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveSdkId(option.id)}
                  className={`language-tab w-full flex-wrap justify-between rounded-none text-left shadow-none ${
                    activeSdkId === option.id ? "language-tab-active" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    {getSdkIcon(option.id)}
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-[0.18em]">
                        {option.name}
                      </span>
                      <span className="mt-1 block text-xs tracking-[0.12em] opacity-70">
                        {option.installLabel}
                      </span>
                    </span>
                  </span>
                  <span className="break-all text-xs tracking-[0.2em] uppercase sm:text-right">
                    {option.packageTarget}
                  </span>
                </button>
              ))}

              <div className="premium-panel rounded-none p-6 shadow-none">
                <p className="label">Install</p>
                <code className="mt-3 block overflow-x-auto whitespace-pre text-base text-[var(--muted-strong)]">
                  {activeSdk.installCommand}
                </code>
                <a
                  href={activeSdk.packageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Open package reference
                  <LuExternalLink />
                </a>
              </div>
            </div>

            <div className="editor-shell premium-panel-dark rounded-none shadow-none">
              <div className="editor-topbar">
                <div>
                  <p className="label mb-1 text-[rgba(245,239,229,0.62)]">
                    Sample integration
                  </p>
                  <p className="text-lg font-semibold tracking-[-0.03em]">
                    {activeSdk.name}
                  </p>
                </div>
                <span className="badge border-[rgba(255,255,255,0.12)] text-[rgba(245,239,229,0.82)]">
                  HTML body supported
                </span>
              </div>
              <PremiumCodeEditor
                value={code}
                onValueChange={setCode}
                language={activeSdk.editorLanguage}
                minHeight={360}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Why teams use it</p>
            <h2 className="section-title">
              Core advantages for teams shipping email into product flows.
            </h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="feature-card rounded-none shadow-none"
              >
                <div className="feature-icon rounded-none shadow-none">
                  <img
                    src={feature.image}
                    alt=""
                    className="h-6 w-6 rounded-none shadow-none"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {feature.title}
                </h3>
                <p className="support-copy mt-4">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width split-grid">
          <div className="space-y-5">
            <p className="eyebrow">Operating posture</p>
            <h2 className="section-title">
              Built for teams that care about trust, speed, and clarity.
            </h2>
            <p className="lead-copy">
              The platform stays focused on what teams actually need: predictable
              setup, clean implementation surfaces, and a product experience
              that feels credible from the first visit.
            </p>
          </div>

          <div className="space-y-4">
            {operatingNotes.map((note, index) => (
              <div
                key={note}
                className="premium-panel flex gap-4 rounded-none p-5 shadow-none"
              >
                <div className="timeline-number !mb-0 h-10 w-10 text-sm">
                  0{index + 1}
                </div>
                <p className="support-copy text-[var(--muted-strong)]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-16 lg:space-y-20">
          <div className="split-grid">
            <div className="space-y-5">
              <p className="eyebrow">Common product flows</p>
              <h2 className="section-title">
                More than one demo screen. Built for real app messaging paths.
              </h2>
              <p className="lead-copy">
                Teams usually need more than a single transactional endpoint. The
                service is positioned for onboarding, operational communication,
                user-triggered messages, and scheduled sends inside the same
                product surface.
              </p>
            </div>

            <div className="premium-panel rounded-none p-4 shadow-none">
              <div className="hero-image-frame rounded-none shadow-none">
                <img
                  src="/html_email_preview.png"
                  alt="HTML email layout preview"
                  className="rounded-none shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="premium-panel rounded-none p-6 shadow-none"
              >
                <p className="label">{item.label}</p>
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
            <p className="eyebrow">Integration workflow</p>
            <h2 className="section-title">
              A denser path from first visit to production use.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {workflow.map((step, index) => (
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
                <p className="support-copy mt-4 text-[var(--muted-strong)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-16 lg:space-y-20">
          <div className="split-grid">
            <div className="space-y-5">
              <p className="eyebrow">Trust and governance</p>
              <h2 className="section-title">
                Dense policy pages for privacy, terms, and security review.
              </h2>
              <p className="lead-copy">
                The site now includes explicit legal and operational language
                covering data handling, abuse-related retention, lawful
                disclosure, and project stewardship.
              </p>
            </div>

            <div className="premium-panel rounded-none p-4 shadow-none">
              <div className="hero-image-frame rounded-none shadow-none">
                <img
                  src="/policy-premium-grid.svg"
                  alt="Policy and governance illustration"
                  className="rounded-none shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            <Link
              to="/privacy"
              className="premium-panel rounded-none p-6 shadow-none transition hover:border-[var(--accent)]"
            >
              <p className="label">Privacy</p>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                No selling. No renting. Clear disclosure rules.
              </h3>
              <p className="support-copy mt-4 text-[var(--muted-strong)]">
                Covers collection, retention, abuse handling, and disclosure to
                lawful authorities when legally required.
              </p>
            </Link>

            <Link
              to="/terms"
              className="premium-panel rounded-none p-6 shadow-none transition hover:border-[var(--accent)]"
            >
              <p className="label">Terms</p>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                Anti-spam, anti-fraud, and lawful use boundaries.
              </h3>
              <p className="support-copy mt-4 text-[var(--muted-strong)]">
                Defines acceptable use, suspension rights, project status, and
                misuse enforcement.
              </p>
            </Link>

            <Link
              to="/security"
              className="premium-panel rounded-none p-6 shadow-none transition hover:border-[var(--accent)]"
            >
              <p className="label">Security</p>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                Logging, incident handling, and abuse-response posture.
              </h3>
              <p className="support-copy mt-4 text-[var(--muted-strong)]">
                Explains operational safeguards, data handling limits, and the
                independent project security model.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width premium-panel premium-grid-bg rounded-none px-6 py-8 shadow-none md:px-10 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="eyebrow">Start building</p>
              <h2 className="section-title max-w-none">
                Move from package install to first send with less friction.
              </h2>
              <p className="lead-copy">
                Start with the docs, copy the example for your stack, and send
                the first message from a flow your team can actually keep using.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/docs")}
                className="button-primary rounded-none shadow-none"
              >
                Open docs
                <LuArrowRight />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="button-secondary rounded-none shadow-none"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
