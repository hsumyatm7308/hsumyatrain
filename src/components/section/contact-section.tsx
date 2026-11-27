import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  const socialLinks = [
    DATA.contact.social.GitHub,
    DATA.contact.social.LinkedIn,
  ];

  return (
    <div className="py-8 sm:py-10">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <div className="mb-7 flex w-full items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="rounded-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Contact
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s talk.
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Have a question or a project in mind? Send me a message.
        </p>

        <a
          href={DATA.contact.social.Facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Message me on Facebook
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <a
          href={`mailto:${DATA.contact.email}`}
          className="mt-5 break-all text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {DATA.contact.email}
        </a>

        <div className="mt-6 flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <social.icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <a
          href={`tel:${DATA.contact.tel}`}
          className="mt-4 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {DATA.contact.tel}
        </a>
      </div>
    </div>
  );
}
