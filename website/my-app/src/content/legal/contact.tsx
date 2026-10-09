import type { LegalSection } from "@/components/legal/legal-page";
import { BRAND } from "@/lib/data";
import { LEGAL } from "@/lib/site";

/**
 * Contact page content.
 * Rendered in the same style as the legal pages. Contact channels, registered
 * office and Grievance Officer details come from `LEGAL` in `src/lib/site.ts`
 * — keep them in sync there (single source of truth, also used by the legal
 * documents).
 */
export const contactSections: LegalSection[] = [
  {
    id: "get-in-touch",
    number: "01",
    title: "Get in touch",
    body: (
      <>
        <p>Reach our support team through any of the channels below:</p>
        <p>
          <strong>Support email:</strong>{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>
        </p>
        <p>
          <strong>Support phone:</strong>{" "}
          <a href={LEGAL.contactPhoneHref}>{LEGAL.contactPhone}</a>
        </p>
        <p>
          <strong>Support hours:</strong> {LEGAL.supportHours}
        </p>
        <p>
          <strong>Response time:</strong> {LEGAL.responseTime}
        </p>
      </>
    ),
  },
  {
    id: "by-email",
    number: "02",
    title: "By email",
    body: (
      <>
        <p>
          For anything at all — questions, a booking issue, help deleting your
          account, or feedback — write to us at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>. We
          read every message and will get back to you at the address you write
          from.
        </p>
      </>
    ),
  },
  {
    id: "by-phone",
    number: "03",
    title: "By phone",
    body: (
      <>
        <p>
          Prefer to talk it through? Call or message us at{" "}
          <a href={LEGAL.contactPhoneHref}>{LEGAL.contactPhone}</a>.
        </p>
      </>
    ),
  },
  {
    id: "business-details",
    number: "04",
    title: "Business details",
    body: (
      <>
        <p>
          <strong>Legal entity name:</strong> {LEGAL.name}
        </p>
        <p>
          <strong>Business type:</strong> {LEGAL.structure}
        </p>
        <p>
          <strong>Udyam / MSME registration:</strong> {LEGAL.udyamNumber}
        </p>
        <p>
          <strong>Brand / trading name:</strong> {BRAND}
        </p>
        <p>
          <strong>Nature of business:</strong> a platform connecting customers
          with verified local professionals for repairs, cleaning, maintenance,
          and everyday jobs.
        </p>
        <p>
          <strong>Registered address:</strong>{" "}
          {LEGAL.addressLines.map((line) => <span key={line}>{line}<br /></span>)}
        </p>
      </>
    ),
  },
  {
    id: "grievance-officer",
    number: "05",
    title: "Grievance Officer",
    body: (
      <>
        <p>
          Grievances may be submitted to our Grievance Officer at the details
          set out below:
        </p>
        <p>
          <strong>Grievance Officer:</strong> {LEGAL.grievanceOfficer}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href={LEGAL.contactPhoneHref}>{LEGAL.contactPhone}</a>
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {LEGAL.addressLines.map((line) => <span key={line}>{line}<br /></span>)}
        </p>
      </>
    ),
  },
  {
    id: "what-to-include",
    number: "06",
    title: "What to include",
    body: (
      <>
        <p>
          To help us help you faster, please include in your email or message:
        </p>
        <ul>
          <li>your name;</li>
          <li>a phone number we can reach you on; and</li>
          <li>a short description of what happened — including a booking ID, if you have one.</li>
        </ul>
      </>
    ),
  },
  {
    id: "follow-us",
    number: "07",
    title: "Follow us",
    body: (
      <>
        <p>
          Updates, launches, and behind the scenes are shared on our Instagram,{" "}
          <a href="https://www.instagram.com/samona.in/" target="_blank" rel="noreferrer">
            @samona.in
          </a>
          .
        </p>
      </>
    ),
  },
];