export type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PolicyContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  highlights: { label: string; value: string }[];
  summary: string[];
  sections: PolicySection[];
};

export const policyLinks = [
  { label: "Privacy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
  { label: "Security", path: "/security" },
];

export const privacyPolicy: PolicyContent = {
  slug: "privacy",
  eyebrow: "Privacy Policy",
  title: "Data handling written for real-world delivery, abuse control, and legal clarity.",
  intro:
    "This Privacy Policy explains how the Dev Mailer library collects, uses, stores, and discloses information when you use the project website, SDKs, documentation, or related services. The service is maintained by Shaik Afrid as an independent software project.",
  updatedAt: "March 10, 2026",
  highlights: [
    { label: "Maintainer", value: "Shaik Afrid" },
    { label: "Data sale", value: "We do not sell or rent personal data." },
    { label: "Lawful disclosure", value: "Only when required by law or legal process." },
    { label: "Abuse logs", value: "May be retained longer to prevent fraud, spam, or misuse." },
  ],
  summary: [
    "We collect only the information needed to operate, secure, support, and improve the service.",
    "We may keep operational and security records longer where needed to investigate abuse, spam, fraud, or illegal use.",
    "We never sell personal data and we never rent personal data to advertisers, brokers, or data resellers.",
  ],
  sections: [
    {
      title: "1. Information we may collect",
      paragraphs: [
        "We may collect account details, contact information, sender identities, recipient email addresses, request metadata, support messages, and technical records such as IP address, timestamps, user agent, request identifiers, and device or browser information.",
        "Where required to operate the sending flow, we may process message content, HTML bodies, subject lines, and delivery-related metadata. We try to minimize access, but some content may be stored temporarily in logs, backups, or incident records where necessary for operations or abuse review.",
      ],
      bullets: [
        "Sender and recipient email addresses",
        "Message metadata such as subject, title, timestamps, and request IDs",
        "Technical and security data such as IP address, browser, device, and network signals",
        "Support, feedback, compliance, and abuse-report communications",
      ],
    },
    {
      title: "2. Why we use information",
      paragraphs: [
        "We use data to deliver the service, respond to support requests, keep documentation and integrations working, investigate incidents, detect spam or fraudulent behavior, enforce platform rules, and maintain service reliability.",
        "We may also use operational records to improve deliverability, reduce abuse, troubleshoot infrastructure issues, and document security events or compliance matters.",
      ],
    },
    {
      title: "3. Sharing and disclosure",
      paragraphs: [
        "We do not sell personal data. We do not rent personal data. We do not provide user data to advertisers or data brokers.",
        "We may share limited data with hosting providers, infrastructure vendors, analytics tools, support providers, or similar service providers that help operate the project and that are required to handle information on our behalf.",
        "We may disclose data to a court, regulator, law enforcement agency, government office, public authority, or other third party where we believe disclosure is required by subpoena, court order, legal process, statute, or other applicable law, or where disclosure is reasonably necessary to protect the service, users, the public, or the rights of the maintainer.",
      ],
    },
    {
      title: "4. Retention and deletion",
      paragraphs: [
        "We keep data only for as long as reasonably necessary to operate the service, maintain records, resolve disputes, enforce agreements, or satisfy legal obligations.",
        "Security logs, request records, and abuse-related evidence may be retained longer where needed to prevent spam, phishing, fraud, malicious automation, harassment, unlawful activity, or repeat misuse of the service.",
      ],
    },
    {
      title: "5. User rights and requests",
      paragraphs: [
        "Subject to applicable law, you may request access, correction, deletion, or clarification regarding personal information associated with your use of the service.",
        "Some records may need to be retained even after a deletion request where keeping them is necessary for security, abuse prevention, dispute resolution, backup integrity, or legal compliance.",
      ],
    },
    {
      title: "6. Project ownership and contact",
      paragraphs: [
        "The Dev Mailer library and the related website are maintained by Shaik Afrid as an independent project. If you need privacy support, policy clarification, or abuse escalation handling, contact the maintainer through the public project channels listed on the site.",
        "If this project later adds enterprise features, a separate data processing agreement, negotiated retention terms, or additional compliance materials may apply to those specific services.",
      ],
    },
  ],
};

export const termsPolicy: PolicyContent = {
  slug: "terms",
  eyebrow: "Terms of Use",
  title: "Service terms focused on lawful use, anti-abuse controls, and operational boundaries.",
  intro:
    "These Terms of Use govern access to the Dev Mailer library website, SDKs, docs, and related service features. By using the service, you agree to these terms. The project is maintained by Shaik Afrid as an independent software project.",
  updatedAt: "March 10, 2026",
  highlights: [
    { label: "Project type", value: "Independent software project" },
    { label: "Allowed use", value: "Legitimate product, transactional, and operational email use" },
    { label: "Prohibited use", value: "Spam, phishing, fraud, malware, harassment, illegal content" },
    { label: "Suspension", value: "Accounts or access may be limited to stop abuse or legal risk" },
  ],
  summary: [
    "Use of the service must remain lawful, non-deceptive, and consistent with anti-spam and anti-abuse rules.",
    "The maintainer may suspend access, investigate misuse, and preserve records where needed to protect the service or comply with law.",
    "These terms do not grant any right to misuse the service, impersonate others, or bypass technical restrictions.",
  ],
  sections: [
    {
      title: "1. Acceptable use",
      paragraphs: [
        "You may use the service only for lawful purposes and only in ways that do not violate anti-spam rules, privacy rights, intellectual property rights, or the safety of other users, recipients, or systems.",
        "You are responsible for the email content you send, the addresses you target, the permissions you rely on, and the compliance status of your product or business.",
      ],
    },
    {
      title: "2. Prohibited conduct",
      paragraphs: [
        "You may not use the service for phishing, spam, malware distribution, deceptive messaging, credential harvesting, impersonation, harassment, surveillance abuse, unlawful marketing, or any illegal or harmful activity.",
        "You may not attempt to overload the service, bypass technical protections, reverse engineer private parts of the system without permission, or interfere with logs, monitoring, or abuse-control workflows.",
      ],
      bullets: [
        "No unlawful or deceptive messaging",
        "No sending to purchased, scraped, or unauthorized lists",
        "No malware, exploit payloads, or credential collection",
        "No abuse of free access, rate limits, or support channels",
      ],
    },
    {
      title: "3. Suspension, preservation, and enforcement",
      paragraphs: [
        "We may investigate suspected misuse, restrict or suspend access, reject requests, or preserve relevant records where necessary to protect the service, recipients, infrastructure, or the public.",
        "If misuse appears to involve fraud, abuse, spam, threats, or illegal conduct, we may retain logs, metadata, and related evidence for longer periods and may cooperate with lawful investigations where required.",
      ],
    },
    {
      title: "4. Availability and project status",
      paragraphs: [
        "The service is provided on an as-available basis unless a separate written agreement states otherwise. Features, packages, limits, docs, and interfaces may change as the project evolves.",
        "Because the service is maintained as an independent project, there may be maintenance windows, feature changes, or service adjustments made to improve security, reliability, or abuse prevention.",
      ],
    },
    {
      title: "5. Intellectual property and site content",
      paragraphs: [
        "The code, branding, docs, layouts, text, and original design materials on the site remain the property of the project or their respective licensors unless otherwise stated.",
        "Open source components, third-party packages, icons, fonts, or infrastructure providers may remain subject to their own licenses and terms.",
      ],
    },
    {
      title: "6. Legal process and disputes",
      paragraphs: [
        "Where required by law, legal process, court order, subpoena, or valid regulatory request, the project may disclose information relevant to the service, including operational records, account identifiers, or abuse-related evidence.",
        "If a specific governing law or dispute process is required for your use case, you should obtain separate written terms before relying on the service for regulated or enterprise-critical workflows.",
      ],
    },
  ],
};

export const securityPolicy: PolicyContent = {
  slug: "security",
  eyebrow: "Security Policy",
  title: "Security controls shaped around minimal access, logging discipline, and anti-abuse response.",
  intro:
    "This Security Policy describes the operational posture of the Dev Mailer library project, including monitoring, abuse handling, lawful disclosure boundaries, and the practical limits of an independently maintained service.",
  updatedAt: "March 10, 2026",
  highlights: [
    { label: "Access model", value: "Need-to-know access wherever reasonably possible" },
    { label: "Monitoring", value: "Operational logging for uptime, fraud, abuse, and incident response" },
    { label: "Disclosure", value: "No selling or renting of data; lawful disclosure only when required" },
    { label: "Security goal", value: "Reduce misuse risk while keeping integration simple" },
  ],
  summary: [
    "Security controls are designed around minimization, auditing, and practical abuse handling rather than marketing claims.",
    "Operational and abuse records may be retained when necessary to investigate misuse, spam, fraud, or unlawful activity.",
    "If we receive a valid legal demand, we may disclose information to the appropriate public authority as required by law.",
  ],
  sections: [
    {
      title: "1. Operational safeguards",
      paragraphs: [
        "The project aims to limit access to sensitive systems and data to personnel, tools, or providers that reasonably need that access to operate the service.",
        "Infrastructure, deployments, and service changes may be monitored for uptime, error rates, anomalies, or misuse patterns in order to keep the platform stable and reduce abuse risk.",
      ],
    },
    {
      title: "2. Secrets, credentials, and internal access",
      paragraphs: [
        "Credentials, tokens, and operational secrets should be handled through managed configuration and should not be exposed in public repositories, client-side code, or unsecured logs.",
        "Even with careful practices, no internet-connected system can guarantee absolute security. Users should avoid sending data that they are not legally permitted to process through the service.",
      ],
    },
    {
      title: "3. Logging, anti-abuse, and retention",
      paragraphs: [
        "We may log request metadata, system events, sender or recipient indicators, account context, and other technical records needed to detect spam, fraud, excessive automation, credential abuse, or service misuse.",
        "Where an event appears abusive or unlawful, relevant records may be retained longer, correlated with other logs, or preserved for incident review, dispute handling, or lawful investigation response.",
      ],
    },
    {
      title: "4. Vulnerabilities and incident handling",
      paragraphs: [
        "Security issues should be reported responsibly. The project may validate reports, prioritize fixes based on severity, and publish changes or advisories where appropriate.",
        "If a security incident materially affects the service, the maintainer may take emergency steps including feature restriction, credential rotation, infrastructure isolation, logging expansion, or temporary suspension of affected flows.",
      ],
    },
    {
      title: "5. Lawful requests and cooperation",
      paragraphs: [
        "The project does not sell or rent data. However, if a court, regulator, law enforcement agency, government office, or other competent public authority issues a valid legal demand, the project may disclose information required by law.",
        "Where appropriate and legally permitted, the project may seek to limit or clarify the scope of a request before disclosure. Nothing in this policy promises notice where notice is prohibited or impractical.",
      ],
    },
    {
      title: "6. Maintainer statement",
      paragraphs: [
        "This service is maintained by Shaik Afrid as an independent project. Security posture, documentation, and controls are improved continuously, but enterprise customers with strict regulatory requirements should request additional review before production dependency.",
      ],
    },
  ],
};
