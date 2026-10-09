/** Single place to configure the production site URL (used for canonical URLs / metadataBase). */
export const SITE_URL = "https://samona.in";

/**
 * Confirmed business details from Samona's Udyam Registration Certificate.
 * Contact email and Grievance Officer are confirmed; keep this file in sync
 * with the legal documents if they change.
 */
export const LEGAL = {
  name: "SAMONA",
  structure: "Sole Proprietorship",
  proprietor: "Nangana Mohanrao",
  udyamNumber: "UDYAM-AP-20-0114242",
  addressLines: [
    "D No. 32-9-2/1, Amaravati Foundation Office",
    "Madhu Gardens, Dasari Lingiah Street",
    "Vijayawada, NTR District, Andhra Pradesh – 520010, India",
  ],
  contactEmail: "samona.official9@gmail.com",
  contactPhone: "+91 8143 92 9696",
  contactPhoneHref: "tel:+918143929696",
  supportHours: "9:00 AM – 6:00 PM IST, Mon–Sat",
  responseTime: "Within 48 hours",
  grievanceOfficer: "Nangana Mohanrao (registered proprietor)",
} as const;
