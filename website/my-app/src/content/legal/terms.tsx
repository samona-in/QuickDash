import type { LegalSection } from "@/components/legal/legal-page";
import { LEGAL } from "@/lib/site";

/**
 * Terms & Conditions content.
 * All sections are finalised to the extent information is available; no
 * placeholders remain.
 */
export const termsSections: LegalSection[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction and acceptance of terms",
    body: (
      <>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the
          Samona website, customer application, and related services
          (collectively, the &ldquo;Platform&rdquo;), operated by {LEGAL.name}, a{" "}
          {LEGAL.structure.toLowerCase()} registered in India (registration
          number {LEGAL.udyamNumber}), and your use of the Samona services made
          available through the Platform.
        </p>
        <p>
          Throughout these Terms, &ldquo;Samona&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to {LEGAL.name}.
          &ldquo;Customer&rdquo; refers to any person who requests a service
          through the customer application. &ldquo;Professional&rdquo; refers to
          an independent service professional who registers through the Samona
          Pro application. &ldquo;User&rdquo; refers to Customers and
          Professionals collectively.
        </p>
        <p>
          By creating an account, accessing, or using the Platform, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms and by our{" "}
          <a href="/privacy-policy">Privacy Policy</a>, which explains how we
          collect and handle personal information. If you do not agree with any
          part of these Terms, you must not use the Platform.
        </p>
        <p>
          The Platform is operated from India and is intended for use in India.
          If you access the Platform from outside India, you do so on your own
          initiative and are responsible for compliance with local laws.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    number: "02",
    title: "Eligibility and account registration",
    body: (
      <>
        <p>
          To use the Platform, you must:
        </p>
        <ul>
          <li>
            be at least 18 years of age, or the age of legal majority in your
            jurisdiction, whichever is higher;
          </li>
          <li>
            have the legal capacity to enter into a binding agreement under
            Indian law;
          </li>
          <li>
            be located in, and use the Platform for services performed in,
            India; and
          </li>
          <li>
            not have been previously suspended or removed from the Platform.
          </li>
        </ul>
        <p>
          When you register, you must provide accurate, complete, and current
          information, including a valid mobile number, and keep it up to date.
          You are responsible for all activity that occurs under your account
          and for keeping your login credentials confidential. Notify us
          promptly at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a> if
          you suspect any unauthorised use of your account.
        </p>
        <p>
          Accounts are personal and may not be transferred, sold, or shared.
          Profiles created by Professionals are maintained by the individual
          Professional and must reflect their genuine identity, skills, and
          experience.
        </p>
        <p>
          If you register on behalf of a business or other entity, you represent
          that you are authorised to bind that entity to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "services",
    number: "03",
    title: "Description of Samona services",
    body: (
      <>
        <p>
          Samona is a technology-enabled marketplace that connects customers
          seeking everyday repair, maintenance, cleaning, and related services
          with independent service professionals in their area.
        </p>
        <p>The Platform enables users to:</p>
        <ul>
          <li>
            <strong>Customers</strong> — describe the job they need, share
            location and details, and receive responses from nearby
            Professionals who choose to accept the request;
          </li>
          <li>
            <strong>Professionals</strong> — create a professional profile,
            define their skills, service area and availability, receive nearby
            job requests, and independently choose which requests to accept.
          </li>
        </ul>
        <p>
          Samona facilitates discovery, communication, and scheduling between
          Users. <strong>
            Samona is not a party to the service agreement between a Customer
            and a Professional
          </strong>
          , does not perform the services itself, and does not employ,
          supervise, or control the working methods of Professionals.
        </p>
        <p>
          Features described on the Platform, including verification steps and
          matching, are provided to help Users make informed decisions, but do
          not create guarantees beyond what is expressly stated in these Terms.
        </p>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    number: "04",
    title: "Customer responsibilities",
    body: (
      <>
        <p>As a Customer, you agree to:</p>
        <ul>
          <li>
            provide a clear and accurate description of the work required,
            including any known hazards, access restrictions, or relevant
            property details;
          </li>
          <li>
            ensure that the service location is safe, accessible, and that you
            have all necessary rights and permissions for the work to be
            performed there;
          </li>
          <li>
            be present or reasonably available at the agreed time, or arrange
            for someone authorised to do so;
          </li>
          <li>
            treat Professionals with respect and refrain from abusive,
            discriminatory, or harassing behaviour;
          </li>
          <li>
            pay the agreed amount directly to the Professional in cash upon
            completion of the service, as described in Section 8; and
          </li>
          <li>
            use the Platform only for lawful purposes and for services that are
            legal in your jurisdiction.
          </li>
        </ul>
        <p>
          You are responsible for checking that the service requested is
          appropriate for your circumstances, and for obtaining any permissions
          required for the work (for example, from a landlord or housing
          society) before a Professional attends.
        </p>
      </>
    ),
  },
  {
    id: "professional-responsibilities",
    number: "05",
    title: "Independent service professional responsibilities",
    body: (
      <>
        <p>As a Professional, you agree to:</p>
        <ul>
          <li>
            provide accurate information about your identity, skills,
            experience, and qualifications in your profile;
          </li>
          <li>
            hold and maintain any licences, registrations, or permissions
            required by applicable law for the services you offer;
          </li>
          <li>
            perform services with reasonable skill and care, in a professional
            and workmanlike manner;
          </li>
          <li>
            bring and maintain your own tools, equipment, and materials
            required for jobs, unless separately agreed with the Customer;
          </li>
          <li>
            communicate promptly with Customers about arrival times, estimates,
            and completion of work;
          </li>
          <li>
            behave honestly, respectfully, and non-discriminatorily towards all
            Users; and
          </li>
          <li>
            comply with all applicable laws, including labour, tax, and
            consumer-protection laws applicable to your work.
          </li>
        </ul>
        <p>
          You are solely responsible for the manner and means of performing
          accepted jobs, for your own tax obligations arising from your
          earnings, and for any equipment or insurance you choose to carry.
        </p>
      </>
    ),
  },
  {
    id: "independent-contractor",
    number: "06",
    title: "Independent contractor relationship",
    body: (
      <>
        <p>
          <strong>
            Professionals are independent service providers, not employees,
            agents, partners, or franchisees of Samona.
          </strong>{" "}
          Nothing in these Terms, in any communication from Samona, or in the
          operation of the Platform creates an employment relationship, a
          partnership, or a joint venture between Samona and any Professional.
        </p>
        <p>Professionals independently:</p>
        <ul>
          <li>choose their own working hours and availability;</li>
          <li>choose the service areas they cover;</li>
          <li>decide which job requests to accept or decline;</li>
          <li>determine their own prices, in agreement with Customers; and</li>
          <li>
            control the manner, method, and details of how services are
            performed.
          </li>
        </ul>
        <p>
          Professionals are not entitled to any salary, wages, leave, pension,
          provident fund, insurance, or other benefits from Samona, and are
          responsible for their own statutory obligations, if any, as
          independent workers. Samona does not supervise Professionals or
          direct how they perform accepted jobs.
        </p>
        <p>
          Customers and Professionals enter a direct service relationship with
          each other when a request is accepted. The contract for the service
          itself is between the Customer and the Professional.
        </p>
      </>
    ),
  },
  {
    id: "booking",
    number: "07",
    title: "Booking, acceptance, and service fulfillment",
    body: (
      <>
        <p>A typical booking on the Platform works as follows:</p>
        <ol>
          <li>
            The Customer submits a request describing the job, location, and
            preferred timing.
          </li>
          <li>
            Samona may share the request with verified Professionals who are
            available and operate in the relevant area, based on factors such
            as proximity, availability, and profile completeness.
          </li>
          <li>
            Each notified Professional may independently choose to accept or
            ignore the request. <strong>
              No Professional is obliged to accept any request
            </strong>
            , and Samona cannot guarantee that a request will be accepted, how
            quickly it will be accepted, or which Professional will accept it.
          </li>
          <li>
            Once a Professional accepts, the Customer and Professional
            communicate through the Platform to confirm timing, scope, and
            price.
          </li>
          <li>
            The Professional performs the service and marks the job complete;
            the Customer pays the Professional directly in cash.
          </li>
        </ol>
        <p>
          Users are encouraged to keep communications and arrangements within
          the Platform so that a record exists if support is later needed.
          Samona may, from time to time, send reminders, status updates, and
          service-related notifications.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    number: "08",
    title: "Service pricing and cash payments",
    body: (
      <>
        <p>
          <strong>
            Customers pay Professionals directly, in cash, after the service is
            completed.
          </strong>{" "}
          Samona does not currently process, collect, hold, or mediate payments
          between Customers and Professionals.
        </p>
        <p>
          Prices for services are determined by the Professional, or agreed
          between the Customer and the Professional (for example, an estimate
          given after inspecting the job). Any visit fee, estimate, or charge
          shown on the Platform is provided by the Professional. Samona does
          not set, verify, or guarantee prices.
        </p>
        <p>
          Customers and Professionals are solely responsible for agreeing,
          collecting, and accounting for payments, including any cash handling,
          change, or receipts. Samona has no obligation to refund, reverse, or
          arbitrate payments made directly between the parties.
        </p>
        <p>
          In the future, Samona may introduce additional payment methods, such
          as in-app digital payments, or charge platform fees to one or both
          sides of a transaction. Any such change will be communicated and will
          take effect only after these Terms are updated accordingly, and where
          required, after your consent.
        </p>
        <p>
          At present, Samona charges no platform fee to Customers or
          Professionals. Professionals collect their service fees directly from
          Customers at the time of service, offline and in cash.
        </p>
      </>
    ),
  },
  {
    id: "cancellation-disputes",
    number: "09",
    title: "Booking cancellation and disputes",
    body: (
      <>
        <p>
          Customers should cancel a booking as soon as plans change, through the
          Platform or by informing the Professional directly. Professionals may
          decline or cancel an accepted request for reasonable cause (for
          example, illness, equipment failure, or a request outside their
          skills) and should notify the Customer promptly.
        </p>
        <p>
          If a job is cancelled after a Professional has already travelled or
          begun work, any compensation for time or travel is a matter for
          agreement between the Customer and the Professional.
        </p>
        <p>
          If a dispute arises between a Customer and a Professional — for
          example, about quality, scope, damage, or payment — the parties should
          first attempt to resolve it directly and in good faith. Samona may,
          at its discretion, provide limited facilitation or support, but
          <strong>
            {" "}
            Samona is not obligated to mediate, adjudicate, or decide disputes
          </strong>{" "}
          between Users, and is not liable for the outcome of any service or
          dispute.
        </p>
        <p>
          Repeated or serious violations of these Terms — including fraudulent
          requests, abusive behaviour, or manipulation of the Platform — may
          result in account restriction or termination as described in Section
          14.
        </p>
      </>
    ),
  },
  {
    id: "verification",
    number: "10",
    title: "Professional verification and limitations",
    body: (
      <>
        <p>
          Before a Professional can receive job requests, Samona may verify
          their identity and profile — for example by checking government-issued
          identification or other documents they provide. Verification helps
          deter fraud and supports trust on the Platform.
        </p>
        <p>
          <strong>
            Verification is not an endorsement, certification, or guarantee.
          </strong>{" "}
          It does not confirm that a Professional is skilled, honest, safe,
          insured, or free of criminal history, and it does not amount to a
          recommendation by Samona. Verification checks are limited to the
          documents and information made available to us at the time.
        </p>
        <p>
          Customers must exercise their own judgement before letting anyone into
          their home or property, including checking the Professional&rsquo;s
          in-app profile, ratings, and reviews, and discussing the job scope
          and price in advance. Samona does not perform background checks,
          skill assessments, or on-site inspections of any Professional&rsquo;s
          work.
        </p>
        <p>
          Verification status may change over time, and Samona may re-request
          documents or withdraw verification where information expires,
          appears inconsistent, or cannot be confirmed.
        </p>
      </>
    ),
  },
  {
    id: "quality-safety-conduct",
    number: "11",
    title: "Service quality, safety, and user conduct",
    body: (
      <>
        <p>
          Samona aims to keep the Platform safe and respectful, but the quality
          and safety of any service depend on the individuals involved.
          Users agree to:
        </p>
        <ul>
          <li>
            perform or receive services honestly and with reasonable care;
          </li>
          <li>
            disclose relevant risks (for Customers: hazards, pets, fragile
            items, restricted areas; for Professionals: delays, limitations of
            the job, sub-contracting if ever agreed);
          </li>
          <li>
            avoid discriminatory behaviour based on religion, caste, gender,
            disability, or any other protected characteristic;
          </li>
          <li>
            respect property, privacy, and personal safety at all times; and
          </li>
          <li>
            report safety concerns, misconduct, or policy violations to Samona
            promptly.
          </li>
        </ul>
        <p>
          Professionals who bring assistants or sub-contractors to a job remain
          fully responsible for their conduct and work. Customers should not
          request services that are illegal, unsafe, or outside what a
          Professional reasonably offers on their profile.
        </p>
        <p>
          Ratings and reviews reflect the experience of individual Customers and
          are provided to help the community make informed choices. They are
          not warranties of future performance.
        </p>
      </>
    ),
  },
  {
    id: "prohibited",
    number: "12",
    title: "Prohibited activities",
    body: (
      <>
        <p>Users must not, and must not attempt to:</p>
        <ul>
          <li>
            provide false, misleading, or fraudulent information, including
            fake profiles, fake jobs, or doctored verification documents;
          </li>
          <li>
            impersonate another person or misrepresent affiliation with any
            person or entity;
          </li>
          <li>
            harass, abuse, threaten, stalk, or discriminate against any user or
            third party;
          </li>
          <li>
            solicit bookings or payments outside the Platform in a way that
            circumvents these Terms or any future platform fees;
          </li>
          <li>
            use the Platform for any illegal purpose, or for services that are
            unlawful, exploitative, or harmful;
          </li>
          <li>
            scrape, crawl, index, or copy Platform content or data by automated
            means without our prior written consent;
          </li>
          <li>
            reverse engineer, disrupt, overload, or interfere with the
            operation or security of the Platform;
          </li>
          <li>
            upload malware, or attempt to gain unauthorised access to any
            account, system, or data;
          </li>
          <li>
            create multiple accounts to manipulate ratings, requests, or
            verification; or
          </li>
          <li>
            harvest other users&rsquo; personal information for purposes outside
            the Platform.
          </li>
        </ul>
        <p>
          Breach of this section may result in immediate suspension or
          termination of the account and may be reported to law enforcement
          authorities.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "13",
    title: "Intellectual property",
    body: (
      <>
        <p>
          The Platform — including its software, design, logos, trademarks,
          text, graphics, and all underlying technology — is owned by Samona or
          its licensors and is protected by Indian and international
          intellectual property laws. You may not copy, modify, distribute,
          sell, or lease any part of the Platform, and you may not use our
          trademarks without prior written permission.
        </p>
        <p>
          You retain ownership of content you submit to the Platform — for
          example your name, profile details, photos, job descriptions, and
          reviews. By submitting content, you grant Samona a non-exclusive,
          worldwide, royalty-free licence to host, store, reproduce, adapt, and
          display that content as reasonably necessary to operate, improve, and
          promote the Platform, consistent with these Terms and our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. You can request removal
          of your content by contacting us, subject to our legal retention
          obligations.
        </p>
        <p>
          Feedback or suggestions you provide may be used by Samona
          unrestrictedly, without obligation or compensation to you.
        </p>
      </>
    ),
  },
  {
    id: "suspension-termination",
    number: "14",
    title: "Account suspension and termination",
    body: (
      <>
        <p>You may stop using the Platform at any time and may request account
          deletion as described in our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. Professionals can
          request deletion of their account directly in the Samona Pro app
          (Profile → Delete account), after verifying themselves with a fresh
          one-time code; details of what the deletion removes, and how to
          request deletion of a customer-only account, are set out in the
          Privacy Policy. The Privacy Policy also describes our automated
          data-retention cleanup and the records that may ever be deleted
          automatically.
        </p>
        <p>
          Samona may suspend or terminate your access to the Platform, with or
          without notice, if we reasonably believe that you:
        </p>
        <ul>
          <li>have violated these Terms or our Privacy Policy;</li>
          <li>
            pose a safety risk to other users, or are the subject of credible
            complaints or legal risk;
          </li>
          <li>provided false information during registration or verification;</li>
          <li>have been inactive for an extended period; or</li>
          <li>
            are required to be removed by applicable law or a lawful order of a
            competent authority.
          </li>
        </ul>
        <p>
          Where circumstances permit, we will notify you of the reason for
          suspension or termination and, where applicable, provide a way to
          respond or appeal at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>
          .
        </p>
        <p>
          Termination does not affect obligations that arose before it took
          effect. Sections that by their nature should survive termination —
          including intellectual property, disclaimers, limitations of
          liability, indemnification, and governing law — remain in force after
          your account closes.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: "15",
    title: "Third-party services",
    body: (
      <>
        <p>
          The Platform relies on third-party infrastructure to operate, such as
          cloud hosting and notification services (for example, Supabase, which
          currently powers storage of website waitlist submissions). These
          providers process data on our behalf under their own terms and
          security practices.
        </p>
        <p>
          The Platform may also contain links to third-party websites, tools,
          or content that are not owned or controlled by Samona. We are not
          responsible for the availability, accuracy, or practices of such
          third parties, and any interaction with them is at your own risk.
        </p>
        <p>
          Professionals may use their own third-party tools, parts, software,
          or materials in performing services. Their use of such resources is
          the Professional&rsquo;s responsibility, and Samona is not liable for
          products or services supplied by third parties.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    number: "16",
    title: "Disclaimers and limitations of liability",
    body: (
      <>
        <p>
          <strong>Disclaimer.</strong> The Platform is provided on an
          &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, to the
          fullest extent permitted by law. Samona expressly disclaims all
          warranties, whether express, implied, or statutory, including implied
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
        <p>Without limiting the above, Samona does not warrant that:</p>
        <ul>
          <li>
            the Platform will be uninterrupted, error-free, or available at all
            times;
          </li>
          <li>
            Professionals, profiles, reviews, or verification results are
            accurate, complete, or reliable;
          </li>
          <li>
            services will meet your expectations, be performed on time, or be
            free of defects, damage, or injury; or
          </li>
          <li>
            the Platform is free of viruses or other harmful components.
          </li>
        </ul>
        <p>
          <strong>Limitation of liability.</strong> To the maximum extent
          permitted by applicable law, Samona — including its proprietor,
          employees, and agents — shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or for loss
          of profits, data, goodwill, or business opportunity, arising out of
          or in connection with your use of the Platform or any service
          arranged through it.
        </p>
        <p>
          <strong>Independent Professionals.</strong> Services offered through
          the Platform are provided by independent Professionals who operate on
          their own account and are not employees of Samona. Professionals are
          responsible for the manner and quality of the services they provide,
          and Samona does not guarantee their performance, workmanship, or
          outcome. This Section does not exclude liability that Samona may have
          under applicable law for its own acts or omissions.
        </p>
        <p>
          Nothing in these Terms excludes or limits any liability that cannot be
          excluded or limited under applicable law, including liability for
          fraud or for death or personal injury caused by negligence, or any
          rights you may have under applicable consumer protection law,
          including the Consumer Protection Act, 2019.
        </p>
        <p>
          Professionals are responsible for claims relating to the services they
          provide, including quality, damage, or compensation, and you may raise
          such matters directly with the Professional concerned. Nothing in
          these Terms limits any claim you may have against Samona under
          applicable law, including for a breach of Samona&rsquo;s own
          obligations under these Terms.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: "17",
    title: "Indemnification",
    body: (
      <>
        <p>
          To the extent permitted by law, you agree to indemnify, defend, and
          hold harmless Samona and its proprietor, employees, and agents from
          and against any claims, damages, losses, liabilities, costs, and
          expenses (including reasonable legal fees) arising out of or related
          to:
        </p>
        <ul>
          <li>your use of the Platform;</li>
          <li>any service you request or perform through the Platform;</li>
          <li>your content or submissions;</li>
          <li>your violation of these Terms or the Privacy Policy; or</li>
          <li>
            your violation of any law or third-party rights, including
            intellectual property rights.
          </li>
        </ul>
        <p>
          This obligation survives termination of your account and your use of
          the Platform.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "18",
    title: "Governing law and dispute resolution",
    body: (
      <>
        <p>
          These Terms are governed by the laws of India, without regard to
          conflict-of-law principles. Any dispute arising out of or relating to
          these Terms or the Platform shall be subject to the exclusive
          jurisdiction of the courts of competent jurisdiction in India.
        </p>
        <p>
          If you have a concern or dispute, we encourage you to contact Samona
          support first so that we can try to resolve the matter informally.
        </p>
        <p>
          If the matter cannot be resolved informally, you may pursue the
          dispute before the courts of competent jurisdiction in India, or
          before any other forum that is legally competent to hear it, in
          accordance with applicable Indian law.
        </p>
        <p>
          Nothing in these Terms limits the rights you may have as a consumer
          under applicable consumer-protection law, including the right to
          approach consumer forums established under the Consumer Protection
          Act, 2019.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "19",
    title: "Changes to these terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time to reflect changes in our
          services, business model, or applicable law. When we do, we will
          revise the &ldquo;Last updated&rdquo; date at the top of this page.
        </p>
        <p>
          For material changes — for example, the introduction of platform fees
          or new payment methods — we will provide additional notice through
          the Platform or by other reasonable means, and where the law requires
          it, we will obtain your consent before the change takes effect.
        </p>
        <p>
          Your continued use of the Platform after an update becomes effective
          constitutes acceptance of the revised Terms. If you do not agree with
          the updated Terms, you must stop using the Platform and may request
          account deletion.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "20",
    title: "Contact information",
    body: (
      <>
        <p>
          These Terms are issued by:
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
        </p>
        <p>
          For questions about these Terms, your account, or to raise a concern,
          contact us at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
        </p>
        <p>
          Grievances may be addressed to our Grievance Officer,{" "}
          {LEGAL.grievanceOfficer}, at{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a> or
          at the registered address set out above.
        </p>
        <p>
          For how we handle personal information, including your rights and how
          to request account deletion, please see our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </>
    ),
  },
];
