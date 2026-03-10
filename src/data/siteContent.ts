export type NavItem = {
  label: string;
  path: string;
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Docs", path: "/docs" },
];

export type SdkId = "dart" | "javascript" | "python" | "java";

export type SdkOption = {
  id: SdkId;
  name: string;
  installCommand: string;
  installLabel: string;
  packageTarget: string;
  packageUrl: string;
  editorLanguage: string;
  code: string;
};

export const sdkOptions: SdkOption[] = [
  {
    id: "dart",
    name: "Dart",
    installCommand: "pub add email_sender",
    installLabel: "Pub package",
    packageTarget: "email_sender",
    packageUrl: "https://pub.dev/packages/email_sender",
    editorLanguage: "dart",
    code: `import 'package:email_sender/email_sender.dart';

void main() async {
  final emailSender = EmailSender();
  final response = await emailSender.send(
    "team@example.com",
    title: "Launch update",
    subject: "Your March release is live",
    body: "<h1>Ship faster</h1><p>HTML email is supported.</p>",
  );

  print(response["message"]);
}
`,
  },
  {
    id: "javascript",
    name: "JavaScript",
    installCommand: "npm i @afriddev/emailservice",
    installLabel: "NPM package",
    packageTarget: "@afriddev/emailservice",
    packageUrl: "https://www.npmjs.com/package/@afriddev/emailservice",
    editorLanguage: "javascript",
    code: `const emailService = require("@afriddev/emailservice");

async function sendEmail() {
  const response = await emailService({
    toEmail: "team@example.com",
    title: "Launch update",
    subject: "Your March release is live",
    body: "<h1>Ship faster</h1><p>HTML email is supported.</p>",
  });

  console.log(response);
}

sendEmail();
`,
  },
  {
    id: "python",
    name: "Python",
    installCommand: "pip install emailotp",
    installLabel: "PyPI package",
    packageTarget: "emailotp",
    packageUrl: "https://pypi.org/project/emailotp/",
    editorLanguage: "python",
    code: `from emailotp import emailotp

client = emailotp()
response = client.send(
    "team@example.com",
    title="Launch update",
    subject="Your March release is live",
    body="<h1>Ship faster</h1><p>HTML email is supported.</p>",
)

print(response["message"])
`,
  },
  {
    id: "java",
    name: "Java",
    installCommand: "github.com/afriddev/email_service",
    installLabel: "GitHub package",
    packageTarget: "email_service",
    packageUrl: "https://github.com/afriddev/email_service",
    editorLanguage: "java",
    code: `package org.emailservice;

public class Main {
  public static void main(String[] args) {
    EmailService emailService = new EmailService(
      "team@example.com",
      "Launch update",
      "Your March release is live",
      "<h1>Ship faster</h1><p>HTML email is supported.</p>"
    );

    var response = emailService.sendEmail();
    System.out.println(response);
  }
}
`,
  },
];

export const requestFields = [
  {
    name: "toEmail",
    description: "Recipient address for the message you want to deliver.",
  },
  {
    name: "title",
    description: "Short label used by the service for your internal flow.",
  },
  {
    name: "subject",
    description: "Inbox subject line shown to your end user.",
  },
  {
    name: "body",
    description: "HTML body content for rich email layouts and formatting.",
  },
];
