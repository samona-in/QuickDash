import type { LegalSection } from "@/components/legal/legal-page";
import { LEGAL } from "@/lib/site";

/**
 * Privacy Policy content.
 * Only data practices verified from the product are described. Storage
 * providers and regions were verified from the backend infrastructure
 * (Supabase + AWS, hosted outside India). Account deletion (§15) reflects the
 * verified in-app flow for Professionals, including legal-hold preservation.
 * Retention periods in Section 13 are the approved schedule behind the
 * automatic retention engine. Contact details (email and Grievance Officer)
 * are confirmed in Section 20.
 */
export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    body: (
      <>
        <p>
          This Privacy Policy explains how {LEGAL.name}
          ({LEGAL.structure}, Udyam Registration Number {LEGAL.udyamNumber},
          registered proprietor {LEGAL.proprietor}) — &ldquo;Samona&rdquo;,
          &ldquo;we&rdquo;, or &ldquo;us&rdquo; — collects, uses, shares, and
          protects personal information in connection with the Samona website,
          customer application, and Samona Pro application (together, the
          &ldquo;Platform&rdquo;).
        </p>
        <p>
          We are a &ldquo;Data Fiduciary&rdquo; under the Digital Personal Data
          Protection Act, 2023 (India) and the rules made under it. You are the
          &ldquo;Data Principal&rdquo; whose information we handle. We process
          personal data in accordance with this Policy, our{" "}
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>, and
          applicable Indian law.
        </p>
        <p>
          Please read this Policy carefully. It covers both Customers and
          independent service Professionals, and explains the choices and
          rights available to you. Where we refer to &ldquo;you&rdquo;, we mean
          the person whose personal data we process, whether you are a
          Customer, a Professional, or a visitor to our website.
        </p>
      </>
    ),
  },
  {
    id: "customer-information",
    number: "02",
    title: "Information we collect from Customers",
    body: (
      <>
        <p>When you use the Samona customer app, we may collect:</p>
        <ul>
          <li>
            <strong>Account information</strong> — your name, mobile number,
            email address, and password or login details;
          </li>
          <li>
            <strong>Service request details</strong> — descriptions of the job
            you need, photos or notes you add, preferred timing, service
            address, and any instructions you share with a Professional;
          </li>
          <li>
            <strong>Location</strong> — your device location as described in
            Section 5, used to find nearby Professionals and route them to you;
          </li>
          <li>
            <strong>Communications</strong> — messages, ratings, reviews, and
            support requests you send through the Platform; and
          </li>
          <li>
            <strong>Transaction records of completed bookings</strong> — job
            history and status. Payments for services are made by you directly
            to the Professional in cash; we do not collect card or bank
            payment details for service payments.
          </li>
        </ul>
        <p>
          On our website, if you join the waitlist, we collect the name, email
          address, and phone number you submit. Waitlist submissions are stored
          for us by Supabase, a third-party cloud database provider (see
          Section 11).
        </p>
      </>
    ),
  },
  {
    id: "professional-information",
    number: "03",
    title: "Information we collect from service Professionals",
    body: (
      <>
        <p>When you register and use the Samona Pro app, we may collect:</p>
        <ul>
          <li>
            <strong>Account and profile information</strong> — your name,
            mobile number, email address, trade or skills, years of experience,
            profile photo, and a short description of your services;
          </li>
          <li>
            <strong>Verification information</strong> — identity documents and
            details submitted for verification, as described in Section 4;
          </li>
          <li>
            <strong>Service area and availability</strong> — the areas you
            cover, the categories of jobs you accept, and the times you are
            available;
          </li>
          <li>
            <strong>Job records</strong> — requests you accept or decline,
            jobs completed, agreed and final job amounts, ratings and reviews
            from Customers; and
          </li>
          <li>
            <strong>Location</strong> — your device location as described in
            Section 5, used to send you nearby job requests and confirm when
            you arrive at a job.
          </li>
        </ul>
        <p>
          Professionals are independent service providers, not employees of
          Samona. We collect this information to operate the marketplace, not
          to manage your employment.
        </p>
      </>
    ),
  },
  {
    id: "verification-documents",
    number: "04",
    title: "Personal information and identity verification documents",
    body: (
      <>
        <p>
          As part of Professional onboarding, we may ask for identity and
          address documents (for example, an Aadhaar card, PAN card, driving
          licence, or other accepted proof), documents supporting payouts or
          trade licences and certificates, and a photograph for verification.
          Documents are uploaded from the device as PDF, JPEG, or PNG files
          and stored in original form — we do not apply any masking, redaction,
          or blurring to the documents themselves.
        </p>
        <p>
          We request only what we reasonably need to verify identity, deter
          fraud, and build trust between strangers transacting through the
          Platform. Verification documents are used for verification and
          fraud-prevention purposes and are not displayed publicly on your
          profile.
        </p>
        <p>
          Because identity documents can constitute sensitive personal data, we
          strictly control who can access them. Documents are stored in a
          private bucket with no public URL. They are accessible only to you
          and to Samona&rsquo;s authorised administrators (for example, when
          manually reviewing a verification submission), through short-lived,
          expiring links rather than permanent addresses. We do not log or
          record every document access.
        </p>
        <p>
          Professionals review their own documents through the app while they
          remain active. Please be aware that the contents of a document are
          not masked in any automated way at this time.
        </p>
        <p>
          When a Professional deletes their account as described in Section 15,
          their uploaded verification documents are deleted as part of that
          process.
        </p>
        <p>
          Customers are not required to submit identity documents to use the
          customer app, and cannot view a Professional&rsquo;s verification
          documents.
        </p>
      </>
    ),
  },
  {
    id: "location-data",
    number: "05",
    title: "Location data",
    body: (
      <>
        <p>
          Location is central to how Samona works. We collect device location
          only in the <strong>foreground</strong> — while you are actively using
          the app. The apps do not request or use background location.
        </p>
        <h3>Foreground location</h3>
        <p>
          While the app is open and in use, we access your device&rsquo;s
          location to:
        </p>
        <ul>
          <li>show nearby Professionals to Customers;</li>
          <li>match Customers with Professionals in the relevant area;</li>
          <li>let Professionals set and adjust their service area;</li>
          <li>
            verify a Professional&rsquo;s arrival at a job (the app sends a
            position check when the Professional reports they have arrived);
            and
          </li>
          <li>
            let Professionals view their own position on a map while working on
            a job.
          </li>
        </ul>
        <h3>No background location</h3>
        <p>
          We do not use background location, and we do not collect your
          location while the app is closed or in the background. Device
          permission prompts ask for location access only while the app is in
          use (iOS: &ldquo;While Using the App&rdquo;; Android: &ldquo;While using
          the app&rdquo;).
        </p>
        <p>
          Turning off location access — which you can do at any time in your
          device settings — may reduce or prevent you from receiving nearby job
          requests, but it will not affect other parts of the app. We do not use
          location to track you for purposes unrelated to providing the
          Platform.
        </p>
      </>
    ),
  },
  {
    id: "camera-photos-documents",
    number: "06",
    title: "Camera, photos, and uploaded documents",
    body: (
      <>
        <p>
          With your permission, the apps access your device camera and photo
          library so that you can:
        </p>
        <ul>
          <li>
            add a profile photo (Customers and Professionals);
          </li>
          <li>
            attach photos to a service request, for example pictures of a
            leaking tap or a broken appliance, so the Professional can
            understand the job before attending;
          </li>
          <li>
            capture or upload photos of completed work, where relevant to a
            job; and
          </li>
          <li>
            upload identity or other documents during Professional onboarding
            or verification.
          </li>
        </ul>
        <p>
          Photos and documents you upload are stored with your account and are
          shared with the other party to a booking only as needed to deliver the
          service (for example, job photos are visible to the Professional who
          accepted your request). You can delete photos you have uploaded from
          your content where the app allows it, or by contacting us.
        </p>
        <p>
          The apps do not access your camera or photo library except when you
          choose to use a feature that requires it.
        </p>
      </>
    ),
  },
  {
    id: "device-information",
    number: "07",
    title: "Device information and push notification tokens",
    body: (
      <>
        <p>When you use the apps, we collect technical information such as:</p>
        <ul>
          <li>device type, operating system, and app version;</li>
          <li>the type of notification token linked to your device; and</li>
          <li>language and time zone, where needed to operate the app.</li>
        </ul>
        <p>
          We collect <strong>push notification tokens</strong> — unique
          identifiers issued by Apple or Google to your device — so we can send
          you job alerts, booking updates, and service notifications. You can
          disable push notifications at any time from your device settings;
          doing so may mean you miss booking-related updates.
        </p>
        <p>
          This technical information helps us keep the Platform reliable,
          diagnose problems, and understand which app versions are in use. We
          do not collect advertising identifiers, we do not use device
          identifiers to build advertising profiles, and we do not sell device
          data.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    number: "08",
    title: "How we use the information we collect",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>create and manage your account;</li>
          <li>
            match Customers with nearby, available Professionals and deliver
            bookings;
          </li>
          <li>
            verify Professional identity and maintain trust and safety on the
            Platform;
          </li>
          <li>
            enable communication between Customers and Professionals about a
            booking;
          </li>
          <li>
            send service-related notifications, such as booking confirmations
            and job alerts;
          </li>
          <li>
            display profiles, ratings, and reviews to help users make informed
            choices;
          </li>
          <li>
            detect, investigate, and prevent fraud, misuse, and safety
            incidents;
          </li>
          <li>
            provide customer support and respond to your requests, including
            account deletion requests;
          </li>
          <li>
            understand how the Platform is used, debug issues, and improve
            features and reliability; and
          </li>
          <li>
            comply with legal obligations and respond to lawful requests from
            authorities.
          </li>
        </ul>
        <p>
          We do not use your personal information for purposes unrelated to the
          Platform without telling you, and where the law requires, without your
          consent.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis-consent",
    number: "09",
    title: "Legal basis and consent",
    body: (
      <>
        <p>
          Under the Digital Personal Data Protection Act, 2023, we process
          personal data on the basis of your consent, or on the basis of certain
          legitimate uses recognised by the Act (for example, processing
          necessary to provide the service you have asked for, or processing
          permitted by law).
        </p>
        <p>
          When we ask for consent — for example, for location access, camera
          access, or notifications — we present the purpose at the time of the
          request, through the app&rsquo;s permission prompts and this Policy.
          You may refuse consent for optional permissions without losing access
          to core features, except where that permission is essential to the
          service (such as location for matching nearby jobs).
        </p>
        <p>
          You have the right to withdraw any consent you have given, at any
          time, in the manner described in Section 14. Withdrawal of consent
          does not affect the lawfulness of processing carried out before the
          withdrawal.
        </p>
        <p>
          Consent that is withdrawn, or permissions that are revoked, may
          prevent us from continuing to provide parts of the service that
          depend on them — for example, a Professional who disables location
          may stop receiving nearby job requests.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "10",
    title: "Sharing information between Customers and Professionals",
    body: (
      <>
        <p>
          Samona is built on direct transactions between Customers and
          Professionals. Some personal information must be shared between the
          two parties for a booking to work:
        </p>
        <h3>Shared with the Professional (once a request is accepted)</h3>
        <ul>
          <li>your name and contact number;</li>
          <li>the service address and approximate location for the job; and</li>
          <li>the job description, photos, notes, and timing you provided.</li>
        </ul>
        <h3>Shared with the Customer (once a request is accepted)</h3>
        <ul>
          <li>the Professional&rsquo;s name and contact number;</li>
          <li>their profile photo, trade, ratings, and reviews; and</li>
          <li>
            job updates such as when the Professional is on the way or has
            arrived.
          </li>
        </ul>
        <p>
          We do not sell your personal information to anyone. Beyond the
          sharing described above and in Section 11, we disclose personal
          information only where required by law or to protect the rights and
          safety of users and the public.
        </p>
        <p>
          Users are asked to use the other party&rsquo;s information only for
          the booking at hand, and not to misuse it for unsolicited contact,
          marketing, or harassment.
        </p>
      </>
    ),
  },
  {
    id: "third-party-providers",
    number: "11",
    title: "Third-party service providers",
    body: (
      <>
        <p>
          We use a small number of third-party providers to operate the
          Platform. They process information on our behalf, under contractual
          obligations to protect it. These include:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — cloud authentication, database, and
            object-storage services. App accounts, app data, uploaded files,
            and website waitlist submissions are handled by Supabase;
          </li>
          <li>
            <strong>Amazon Web Services (AWS)</strong> — cloud hosting and
            object-storage infrastructure on which the Platform and its data
            run;
          </li>
          <li>
            <strong>Push notification services</strong> — Apple&rsquo;s Push
            Notification service and Google&rsquo;s Firebase Cloud Messaging,
            which deliver notification tokens to your device;
          </li>
          <li>
            <strong>Expo</strong> — the development tooling and push-delivery
            service used by our mobile apps; and
          </li>
          <li>
            <strong>OpenStreetMap (Nominatim)</strong> — a mapping and address
            lookup service used for geocoding service locations; address
            queries are sent to this service through our own servers.
          </li>
        </ul>
        <p>
          The apps do not currently embed third-party analytics or
          advertising-tracker SDKs. We may also disclose information to
          advisers, auditors, or authorities where required by law. Our
          providers are not permitted to use your information for their own
          purposes.
        </p>
      </>
    ),
  },
  {
    id: "storage-security",
    number: "12",
    title: "Data storage and security",
    body: (
      <>
        <p>
          Personal data collected through the Platform is processed and stored
          on cloud infrastructure located outside India (see Section 19 for
          the verified locations of our providers).
        </p>
        <p>
          We protect personal data with a combination of technical and
          organisational measures appropriate to the risks, including:
        </p>
        <ul>
          <li>encryption of data in transit (HTTPS/TLS);</li>
          <li>encryption of files at rest in object storage;</li>
          <li>
            access controls, so that only authorised personnel can reach data
            that requires it;
          </li>
          <li>credential handling through established authentication services;</li>
          <li>short-lived, expiring links for access to stored documents; and</li>
          <li>periodic review of our practices as the Platform evolves.</li>
        </ul>
        <p>
          No method of transmission or storage is completely secure. While we
          work to protect your information, we cannot guarantee that the
          Platform will be free of unauthorised access, loss, or misuse, and
          users should likewise safeguard their own devices and credentials.
        </p>
      </>
    ),
  },
  {
    id: "retention-deletion",
    number: "13",
    title: "Data retention and deletion",
    body: (
      <>
        <p>
          We retain personal data only for as long as it is needed for the
          purposes described in this Policy, including:
        </p>
        <ul>
          <li>
            to provide the service and operate your account while it remains
            active;
          </li>
          <li>
            to maintain booking and verification records that may be needed for
            support, dispute handling, or fraud prevention; and
          </li>
          <li>
            to meet legal, tax, accounting, or regulatory obligations that
            require certain records to be kept.
          </li>
        </ul>
        <p>
          We apply the following retention periods to the affected categories.
          Where the clock is measured from account deletion, it starts on the
          day the account is deleted:
        </p>
        <ul>
          <li>
            Professional verification documents — deleted after 5 years from
            account deletion;
          </li>
          <li>
            verification selfies — deleted after 90 days from account
            deletion;
          </li>
          <li>
            Professional profile photos — deleted after 30 days from account
            deletion;
          </li>
          <li>
            job images older than 90 days that no booking references — deleted
            once no job row names them;
          </li>
          <li>
            Professional notification records — deleted 90 days after they are
            created;
          </li>
          <li>
            customer notification records — deleted 90 days after they are
            created;
          </li>
          <li>
            service and skill listings of a deleted account — deleted after
            30 days from account deletion; and
          </li>
          <li>
            job declines and job offers — deleted 180 days after they are
            created, once the job they relate to is no longer active.
          </li>
        </ul>
        <p>
          Deletion is carried out by an automated data-retention engine and is
          strictly gated: a category is deleted only when its retention setting
          is enabled and its approved period has elapsed. Records tied to a job
          that is still being worked are never aged out. Each automatic
          deletion is recorded in a cleanup audit log, and stored files are
          removed before the records that point to them.
        </p>
        <p>
          The only records that may ever be deleted automatically are limited
          to Professional verification documents, verification and profile
          photos, notification records, service and skill listings, job
          declines and job offers belonging to closed or non-active accounts,
          and job images that no booking references. Records tied to a job that
          is still being worked are never aged out. Each automatic deletion is
          recorded in a cleanup audit log, and stored files are removed before
          the records that point to them.
        </p>
        <p>
          Some records are never deleted automatically, even by configuration
          error: customer avatars, saved addresses, chat messages, completed
          and cancelled job records, and the audit record of an account
          deletion. These are another user&rsquo;s record or the historical
          record a marketplace must keep.
        </p>
        <p>
          When you request account deletion, however, the process is
          automated: verification documents, profile and verification photos,
          and other Professional profile data are deleted as part of the
          deletion flow described in Section 15. Job records, chat messages,
          earnings records and reviews are retained as the other party&rsquo;s
          record of the transaction. Backup copies are cycled out on the backup
          schedule of our hosting providers.
        </p>
      </>
    ),
  },
  {
    id: "user-rights",
    number: "14",
    title: "Your rights and privacy controls",
    body: (
      <>
        <p>
          Subject to applicable law, including the Digital Personal Data
          Protection Act, 2023, you have the right to:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — request a summary of the personal data we
            hold about you;
          </li>
          <li>
            <strong>Correction and completion</strong> — request that inaccurate
            data be corrected, or incomplete data be completed;
          </li>
          <li>
            <strong>Erasure</strong> — request deletion of your personal data,
            subject to legal and operational retention needs;
          </li>
          <li>
            <strong>Withdraw consent</strong> — withdraw any consent previously
            given, including for permissions such as location, camera, and
            notifications;
          </li>
          <li>
            <strong>Grievance redressal</strong> — raise a complaint with us,
            and with the Data Protection Board of India where applicable; and
          </li>
          <li>
            <strong>Nominate</strong> — have another individual exercise your
            rights on your behalf, in circumstances permitted by law.
          </li>
        </ul>
        <p>
          You can exercise several of these controls directly in the apps —
          for example by editing your profile, revoking device permissions in
          your phone&rsquo;s settings, deleting verification documents you
          have submitted, or (for Professionals) deleting your account through
          the Pro app as described in Section 15. For anything else, contact
          us using the details in Section 20. We may need to verify your
          identity before acting on a request.
        </p>
      </>
    ),
  },
  {
    id: "account-deletion",
    number: "15",
    title: "Account deletion requests",
    body: (
      <>
        <p>
          <strong>Professionals</strong> can request deletion of their account
          directly in the Samona Pro app (Profile → Delete account). The flow
          requires you to sign in with a fresh one-time code to confirm it is
          really you, and then to confirm with a single-use deletion code.
        </p>
        <p>
          What is deleted depends on your account, and is decided by our
          servers, not by any setting you choose:
        </p>
        <ul>
          <li>
            <strong>Professional profile only.</strong> If your mobile number is
            also registered as a customer account, only the professional side
            is removed: your professional profile, skills, services, documents,
            profile and verification photos, and job alerts. Your customer
            account and phone number continue to work as before.
          </li>
          <li>
            <strong>Entire account.</strong> If your mobile number is not
            registered as a customer account, the deletion removes your entire
            Samona identity — including your phone number and sign-in — from
            both the Samona and Samona Pro apps. Because one phone identity
            signs into both apps, deleting the account means that phone number
            can no longer sign in to either.
          </li>
        </ul>
        <p>
          <strong>Timing.</strong> Deletion normally completes within a few
          minutes. If you have active jobs, deletion waits until those jobs are
          finished and then completes automatically. We will keep you
          reasonably informed of progress in the app, and where deletion cannot
          be completed automatically you will be asked to contact us to finish
          it.
        </p>
        <p>
          <strong>Exceptions.</strong> Some records are retained where required
          by law, or where reasonably necessary for legitimate purposes such as
          dispute resolution, fraud prevention, or complying with tax and
          accounting obligations — for example, records of completed bookings,
          chat messages, earnings records, and reviews are kept as the other
          party&rsquo;s record of the transaction. Retained records are limited
          to what is necessary and are not used for new purposes.
        </p>
        <p>
          Where an active legal hold is in place — for example, during a
          dispute, a fraud investigation, or a legal or regulatory obligation —
          the records covered by the hold are preserved from deletion, even if
          they are the Professional&rsquo;s own documents or profile data. The
          rest of the deletion still proceeds, and the held records are
          deleted once the hold is released. In all cases, an audit record of
          the deletion is retained.
        </p>
        <p>
          <strong>Customers</strong> do not currently have a self-service
          deletion option in the customer app. If you only use the customer
          app, you may request account deletion at any time by contacting us
          at the address in Section 20, and we will process your request
          through the same deletion procedures.
        </p>
      </>
    ),
  },
  {
    id: "cookies-analytics",
    number: "16",
    title: "Cookies and website analytics",
    body: (
      <>
        <p>
          Our website currently uses only the storage strictly necessary to
          operate it. It does not set advertising cookies, and it does not
          embed third-party analytics or tracking pixels. Server logs
          (containing IP address, browser type, and requested pages) are
          retained by our hosting provider for security and operations.
        </p>
        <p>
          If we add analytics or other non-essential technologies to the
          website in the future, we will update this Policy and, where
          required, ask for your consent before they are used.
        </p>
        <p>
          The mobile apps do not use website cookies. Any in-app storage used to
          keep you logged in or remember preferences is functional, not
          advertising-related.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "17",
    title: "Children's privacy",
    body: (
      <>
        <p>
          The Platform is not directed at children under 18 years of age, and we
          do not knowingly collect personal data from children.
        </p>
        <p>
          If we learn that we have collected personal data from a person below
          the age of 18 without the verifiable consent of a parent or lawful
          guardian, we will take steps to delete that information promptly.
        </p>
        <p>
          Parents or guardians who believe a child has provided us with
          personal data can contact us at the address in Section 20, and we
          will investigate and act on the request.
        </p>
      </>
    ),
  },
  {
    id: "data-breach",
    number: "18",
    title: "Data breach handling",
    body: (
      <>
        <p>
          We maintain procedures to detect, investigate, and respond to personal
          data breaches. These include:
        </p>
        <ul>
          <li>
            identifying and containing the breach, and limiting any further
            loss or unauthorised access;
          </li>
          <li>
            assessing the nature and scope of the breach, including the data
            affected and the individuals concerned;
          </li>
          <li>
            remediating the cause and strengthening relevant safeguards; and
          </li>
          <li>
            notifying affected Data Principals and the Data Protection Board of
            India, in the manner and within the timelines required under the
            Digital Personal Data Protection Act, 2023 and its rules, where the
            law requires such notification.
          </li>
        </ul>
        <p>
          If we become aware of a breach that affects your data, we will
          communicate with you through the Platform, by email, SMS, or other
          reasonable means, along with steps you can take to protect yourself.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    number: "19",
    title: "International data transfers",
    body: (
      <>
        <p>
          At present, data collected through the Platform is processed and
          stored on cloud infrastructure located <strong>outside India</strong>.
          Our Supabase database and object storage run in the Asia-Pacific
          (Singapore) region, and our AWS infrastructure is provisioned in the
          United States (us-east-1). We do not currently store personal data in
          India.
        </p>
        <p>
          Because personal data is therefore transferred outside India, such
          transfers will be carried out in accordance with the Digital Personal
          Data Protection Act, 2023 and the rules made under it, including any
          restrictions on transfer to certain restricted territories notified
          by the Central Government.
        </p>
        <p>
          We assess our providers&rsquo; processing locations as part of our
          vendor review, and we update this Policy if our storage or processing
          footprint changes materially.
        </p>
      </>
    ),
  },
  {
    id: "updates-contact",
    number: "20",
    title: "Policy updates and contact information",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, technology, or the law. The
          &ldquo;Last updated&rdquo; date at the top of this page shows when it
          was last revised. For material changes, we will provide additional
          notice through the Platform or by other reasonable means before the
          changes take effect.
        </p>
        <p>
          If you have questions about this Policy or how we handle your
          personal data — or if you wish to exercise your rights under Section
          14, including requesting account deletion — contact us at:
        </p>
        <p className="not-italic">
          <strong>{LEGAL.name}</strong>
          <br />
          {LEGAL.structure} (Udyam Registration Number {LEGAL.udyamNumber})
          <br />
          Registered proprietor: {LEGAL.proprietor}
          <br />
          {LEGAL.addressLines.map((line) => (
            <span key={line}>
              <br />
              {line}
            </span>
          ))}
          <br />
          Email: <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>
        </p>
        <p>
          Complaints and grievances may be addressed to our Grievance Officer,{" "}
          {LEGAL.grievanceOfficer}, at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a> or
          at the registered address set out above. You also have the right to
          file a complaint with the Data Protection Board of India in accordance
          with the Act.
        </p>
        <p>
          For the terms that govern your use of the Platform, please see our{" "}
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>.
        </p>
      </>
    ),
  },
];
