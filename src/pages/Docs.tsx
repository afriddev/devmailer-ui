import { useEffect, useState } from "react";
import { DiDart, DiPython } from "react-icons/di";
import { LiaJava } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";
import {
  LuArrowRight,
  LuBadgeCheck,
  LuBookText,
  LuExternalLink,
  LuKey,
  LuLifeBuoy,
  LuMailCheck,
} from "react-icons/lu";
import DocsCodePart from "../components/DocsCodePart";
import PremiumCodeEditor from "../components/PremiumCodeEditor";
import {
  requestFields,
  sdkOptions,
  type SdkId,
} from "../data/siteContent";

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

const implementationNotes = [
  {
    title: "Authentication discipline",
    description:
      "If you use a custom Gmail sender, create a dedicated app password and keep it out of client-side code.",
  },
  {
    title: "HTML-safe workflows",
    description:
      "Use HTML bodies for product emails, but sanitize and control source content before sending from user-facing flows.",
  },
  {
    title: "Abuse-aware operations",
    description:
      "Keep logs and support processes ready for spam review, complaint handling, and legal escalation if the workflow grows.",
  },
];

const faqNotes = [
  {
    title: "Can I use this for product onboarding mail?",
    description:
      "Yes. The SDK examples and HTML body field are structured for welcome flows, verification, release notes, and lifecycle messaging.",
  },
  {
    title: "Do I need separate docs per language?",
    description:
      "No. The package tabs stay aligned to the same request model, which makes cross-team review much simpler.",
  },
  {
    title: "What about policy review?",
    description:
      "The site now includes Privacy, Terms, and Security pages so teams can review abuse controls, retention language, and lawful disclosure boundaries.",
  },
];

export default function Docs() {
  const [activeSdkId, setActiveSdkId] = useState<SdkId>("dart");
  const activeSdk =
    sdkOptions.find((option) => option.id === activeSdkId) || sdkOptions[0];
  const [code, setCode] = useState(activeSdk.code);

  useEffect(() => {
    setCode(activeSdk.code);
  }, [activeSdk.code]);

  const scrollToSetup = () => {
    document.getElementById("setup")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="premium-shell">
      <section className="section-pad">
        <div className="shell-width split-grid">
          <div className="space-y-6">
            <p className="eyebrow">
              <LuBookText />
              Integration guide
            </p>
            <h1 className="display-title">
              Implementation docs for fast, production-focused setup.
            </h1>
            <p className="lead-copy">
              The Email API docs are now structured around actual implementation
              work: choose a language, install the SDK, set an app password if
              needed, and send HTML email with a consistent request shape.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="button-primary rounded-none shadow-none"
                onClick={scrollToSetup}
              >
                Quick start
                <LuArrowRight />
              </button>
              <a
                href={activeSdk.packageUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary rounded-none shadow-none"
              >
                Open package
                <LuExternalLink />
              </a>
            </div>
          </div>

          <div className="premium-panel premium-grid-bg rounded-none p-6 shadow-none">
            <div className="hero-image-frame rounded-none shadow-none">
              <img
                src="/docs-premium-grid.svg"
                alt="Documentation and integration illustration"
                className="rounded-none shadow-none"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="metric-card rounded-none shadow-none">
                <LuMailCheck className="mb-4 text-2xl text-[var(--accent-strong)]" />
                <p className="label mb-2">Request model</p>
                <p className="support-copy">
                  Keep the payload simple: recipient, title, subject, and HTML
                  body content.
                </p>
              </div>
              <div className="metric-card rounded-none shadow-none">
                <LuKey className="mb-4 text-2xl text-[var(--accent-strong)]" />
                <p className="label mb-2">Auth path</p>
                <p className="support-copy">
                  If you use a custom Gmail sender, create an app password and
                  plug it into your integration flow.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3 border border-[var(--line)] bg-[rgba(255,255,255,0.3)] p-4">
              <p className="label mb-0">Supported SDKs</p>
              <div className="chip-row">
                {sdkOptions.map((option) => (
                  <span key={option.id} className="data-chip">
                    {option.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Setup</p>
            <h2 className="section-title">
              Choose the SDK, copy the install command, then send.
            </h2>
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
                        {option.packageTarget}
                      </span>
                    </span>
                  </span>
                  <span className="badge border-[var(--line)] bg-transparent text-[var(--muted-strong)]">
                    {option.installLabel}
                  </span>
                </button>
              ))}

              <div className="premium-panel rounded-none p-6 shadow-none">
                <p className="label">Before you send</p>
                <p className="support-copy">
                  Need a custom Gmail sender? Create a new{" "}
                  <a
                    href="https://support.google.com/accounts/answer/185833?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-link"
                  >
                    app password
                  </a>{" "}
                  so your app can authenticate cleanly.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <DocsCodePart codeObj={activeSdk} />

              <div className="editor-shell premium-panel-dark rounded-none shadow-none">
                <div className="editor-topbar">
                  <div>
                    <p className="label mb-1 text-[rgba(245,239,229,0.62)]">
                      Example code
                    </p>
                    <p className="text-lg font-semibold tracking-[-0.03em]">
                      {activeSdk.name}
                    </p>
                  </div>
                  <a
                    href={activeSdk.packageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="badge border-[rgba(255,255,255,0.14)] text-[rgba(245,239,229,0.82)]"
                  >
                    Package reference
                  </a>
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
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Implementation notes</p>
            <h2 className="section-title">
              The details teams usually ask for before using a mail service in production.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {implementationNotes.map((item) => (
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
            <p className="eyebrow">Payload fields</p>
            <h2 className="section-title">
              The message contract is small enough to understand quickly.
            </h2>
          </div>

          <div className="field-grid">
            {requestFields.map((field) => (
              <article
                key={field.name}
                className="field-card rounded-none shadow-none"
              >
                <p className="label">{field.name}</p>
                <p className="support-copy text-[var(--muted-strong)]">
                  {field.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule section-pad">
        <div className="shell-width space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">
              <LuLifeBuoy />
              FAQ
            </p>
            <h2 className="section-title">
              Dense answers for integration, governance, and product use.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {faqNotes.map((item) => (
              <article
                key={item.title}
                className="premium-panel rounded-none p-6 shadow-none"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
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
        <div className="shell-width premium-panel rounded-none px-6 py-8 shadow-none md:px-10 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="eyebrow">
                <LuBadgeCheck />
                Ready to build
              </p>
              <h2 className="section-title max-w-none">
                Install the package, adapt the example, and send your first HTML email.
              </h2>
              <p className="lead-copy">
                Everything here is arranged around the next action: install,
                configure, and send.
              </p>
            </div>

            <button
              onClick={scrollToSetup}
              className="button-primary rounded-none shadow-none"
            >
              Jump to setup
              <LuArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
