import type { LegalSection } from "@/components/legal/legal-page";
import { LEGAL } from "@/lib/site";

/**
 * Account deletion guidance content.
 * Describes the verified in-app flow (Profile settings → Delete account) in
 * both the Pro and customer apps, the server-decided deletion scope
 * (PRO_PROFILE vs CUSTOMER_PROFILE vs FULL_ACCOUNT), and what is removed
 * versus kept, matching each app's own copy and the backend
 * (`account-deletion.service.ts`). Support remains the fallback when an
 * automatic deletion cannot finish.
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
    title: "How deletion works in the app",
    body: (
      <>
        <p>
          You start deletion from <strong>Profile settings → Delete account</strong>{" "}
          — the same path in both the Samona Pro app and the customer app. From
          there:
        </p>
        <ul>
          <li>
            <strong>Confirm it is really you.</strong> For your safety, when
            your current session is not fresh enough we ask you to verify your
            phone with a one-time password (OTP) sent by SMS. An existing login
            session alone may not be enough.
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
    title: "Which deletion applies to you",
    body: (
      <>
        <p>Which deletion applies to you is decided by the server:</p>
        <ul>
          <li>
            <strong>Professional surface only (PRO_PROFILE).</strong> When the
            same phone number also has a customer account, deleting from the Pro
            app removes only the professional side. Your customer account and
            phone number keep working, and you can continue booking services as
            a customer.
          </li>
          <li>
            <strong>Customer surface only (CUSTOMER_PROFILE).</strong> When the
            same phone number also has a professional account, deleting from the
            customer app removes only the customer side. Your professional
            account and phone number keep working.
          </li>
          <li>
            <strong>Entire identity (FULL_ACCOUNT).</strong> When the account
            exists only as one surface, deleting it removes the complete Samona
            identity — including your phone number — from both apps. After
            that, the number can be registered again as a brand-new account.
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
          <li>
            <strong>Professional surface</strong> — your professional profile
            and its details, the services and skills you listed, uploaded
            verification documents and your profile photo, job alerts, job
            offers and declines linked to your professional side, and your saved
            notification token;
          </li>
          <li>
            <strong>Customer surface</strong> — your customer profile and its
            details, your profile photo, your saved addresses, and your saved
            notification token; and
          </li>
          <li>
            <strong>Entire identity</strong> — everything above, plus your
            phone number and sign-in, so the number no longer signs in to either
            app.
          </li>
        </ul>
        <p>
          This happens across our database and storage, and is carried out by
          our servers on your behalf. That includes the files tied to the
          deleting surface — such as a selfie, verification documents, or a
          profile photo — from the storage service that holds them.
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
          they are part of the safety and financial record of the people you
          dealt with:
        </p>
        <ul>
          <li>
            your jobs — including the job history that records who did what,
            when, and at what price;
          </li>
          <li>chat messages about those jobs;</li>
          <li>your earnings record;</li>
          <li>reviews and ratings you received;</li>
          <li>
            for a deleted customer, the booking history you placed; and
          </li>
          <li>an audit record of the deletion itself.</li>
        </ul>
        <p>
          Your name and personal details are removed from these records and
          replaced with a neutral marker — &ldquo;Deleted Professional&rdquo;
          or &ldquo;Deleted Customer&rdquo; depending on the surface. Files that
          belong to someone else&rsquo;s booking (such as job photos) are not
          part of your account and stay. To understand how long different
          categories of data are kept, see Section 13 of our{" "}
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
            <strong>If you have bookings in progress</strong> — accepted,
            travelling, arrived, or in progress — deletion is{" "}
            <strong>deferred</strong>. You finish those bookings, while new
            bookings, matching, offers, and new job accepts stop the moment you
            confirm. Deletion completes automatically as soon as your active
            bookings end.
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
    id: "questions-and-help",
    number: "07",
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