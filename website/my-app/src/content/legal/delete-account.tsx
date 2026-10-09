import type { LegalSection } from "@/components/legal/legal-page";
import { LEGAL } from "@/lib/site";

/**
 * Account deletion guidance content.
 * Describes the verified in-app flow (Pro app → Profile settings), the
 * server-decided deletion scope (PRO_PROFILE vs FULL_ACCOUNT), and what is
 * removed versus kept, matching the Pro app's own copy and the backend
 * (`account-deletion.service.ts`). Customers have no in-app deletion flow
 * today and request deletion by contacting support.
 */
export const accountDeletionSections: LegalSection[] = [
  {
    id: "who-this-applies-to",
    number: "01",
    title: "Who this applies to",
    body: (
      <>
        <p>
          Samona uses a single phone number as your identity across both apps —
          the Pro app for professionals and the customer app for people who
          book services. Because one identity can have both sides, how much is
          deleted is decided by our servers based on the shape of your account,
          not chosen by you, and the result is permanent.
        </p>
        <p>
          This page explains what the app will ask you to do, what gets
          removed, what stays on file, and how long deletion takes.
        </p>
      </>
    ),
  },
  {
    id: "how-it-works",
    number: "02",
    title: "How deletion works in the Pro app",
    body: (
      <>
        <p>
          To delete a professional account, go to{" "}
          <strong>Profile settings → Delete account</strong> in the Pro app and
          follow these steps:
        </p>
        <ul>
          <li>
            <strong>Re-verify your phone.</strong> For your safety, we ask you
            to confirm it is really you with a fresh one-time password (OTP)
            sent by SMS. An existing login session alone is not enough.
          </li>
          <li>
            <strong>Receive a one-time deletion code.</strong> This code is
            shown exactly once and shared with no one. It expires within a few
            minutes.
          </li>
          <li>
            <strong>Confirm.</strong> Before you confirm, the app shows exactly
            what will be removed and what will stay.
          </li>
        </ul>
        <p>
          Deletion is permanent and cannot be undone. Make sure you no longer
          need anything on the account before you confirm.
        </p>
      </>
    ),
  },
  {
    id: "two-types-of-deletion",
    number: "03",
    title: "Two types of deletion",
    body: (
      <>
        <p>Which deletion applies to you is decided by the server:</p>
        <ul>
          <li>
            <strong>Professional surface only (PRO_PROFILE).</strong> When the
            same phone number also has a customer account, only the
            professional side is removed. Your customer account and phone
            number keep working, and you can continue booking services as a
            customer.
          </li>
          <li>
            <strong>Entire identity (FULL_ACCOUNT).</strong> When the account
            exists only as a professional, the complete Samona identity is
            removed — including your phone number — from both apps. After that,
            the number can be registered again as a brand-new account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-is-removed",
    number: "04",
    title: "What is removed",
    body: (
      <>
        <p>Depending on the scope above, deletion removes:</p>
        <ul>
          <li>your professional profile and its details;</li>
          <li>the services and skills you listed;</li>
          <li>uploaded verification documents and your profile photo;</li>
          <li>
            your saved notification token, so you stop receiving notifications
            from Samona;
          </li>
          <li>job alerts;</li>
          <li>job offers and declines linked to your professional side; and</li>
          <li>
            the files tied to your professional side, such as your selfie or
            verification documents, from the storage service that holds them.
          </li>
        </ul>
        <p>
          This happens across our database and storage, and is carried out by
          our servers on your behalf.
        </p>
      </>
    ),
  },
  {
    id: "what-stays-on-file",
    number: "05",
    title: "What stays on file",
    body: (
      <>
        <p>
          Some records are kept even after your account is deleted, because
          they are part of the safety and financial record of the people who
          booked you:
        </p>
        <ul>
          <li>
            your jobs — including the job history that records who did what,
            when, and at what price;
          </li>
          <li>chat messages about those jobs;</li>
          <li>your earnings record;</li>
          <li>reviews and ratings you received; and</li>
          <li>an audit record of the deletion itself.</li>
        </ul>
        <p>
          Your name and personal details are removed from these records and
          replaced with a neutral marker (&ldquo;Deleted Professional&rdquo;).
          Files that belong to a customer&rsquo;s booking (such as job photos)
          are not part of your account and stay. To understand how long
          different categories of data are kept, see Section 13 of our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "timing",
    number: "06",
    title: "Timing and what to expect",
    body: (
      <>
        <p>
          Most deletions finish in a few minutes, with one important exception:
        </p>
        <ul>
          <li>
            <strong>If you have jobs in progress</strong> — accepted,
            travelling, arrived, or in progress — deletion is{" "}
            <strong>deferred</strong>. You finish those jobs, while matching,
            new offers, and new job accepts stop the moment you confirm.
            Deletion completes automatically as soon as your active jobs end.
          </li>
          <li>
            <strong>While a request awaits confirmation</strong>, it expires
            after a few minutes. You can simply start again.
          </li>
          <li>
            <strong>If deletion hits a problem</strong> it cannot fix
            automatically, the app tells you to contact support and we will
            complete the deletion for you.
          </li>
        </ul>
        <p>
          Whether your deletion was accepted immediately or deferred, the app
          keeps you informed until it is complete.
        </p>
      </>
    ),
  },
  {
    id: "customer-accounts",
    number: "07",
    title: "Booking customers (customer app)",
    body: (
      <>
        <p>
          People who use the customer app can also delete their account. There
          is no delete button inside the customer app today, so to delete a
          customer account, contact Samona support at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
          Tell us you want to delete your account and we will guide you through
          it and complete the deletion for you.
        </p>
      </>
    ),
  },
  {
    id: "questions-and-help",
    number: "08",
    title: "Questions and help",
    body: (
      <>
        <p>
          For anything on this page, contact us at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
          Grievances may be addressed to our Grievance Officer,{" "}
          {LEGAL.grievanceOfficer}, at the same email or the registered address
          set out in these Terms.
        </p>
      </>
    ),
  },
];