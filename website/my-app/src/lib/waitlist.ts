export type Profession = { value: string; label: string };

/**
 * Profession options shown when a professional joins the waitlist.
 *
 * This is placeholder data — paste your real JSON here later. Each entry just
 * needs a stable `value` (stored in the DB) and a human `label` (shown in the UI).
 *
 * Example of replacing this with your JSON:
 *   export const professionOptions: Profession[] = myJson.map((p) => ({
 *     value: p.id,
 *     label: p.name,
 *   }));
 */
export const professionOptions: Profession[] = [
  { value: "tv-electronics", label: "TV & Electronics" },
  { value: "washing-machine", label: "Washing Machine" },
  { value: "refrigerator", label: "Refrigerator" },
  { value: "electrical", label: "Electrical" },
  { value: "plumbing", label: "Plumbing" },
  { value: "cleaning", label: "Cleaning" },
  { value: "carpentry", label: "Carpentry" },
  { value: "painting", label: "Painting" },
  { value: "mechanic", label: "Mechanic" },
  { value: "car-wash", label: "Car Wash" },
  { value: "other", label: "Other" },
];

/**
 * Hyderabad localities shown when someone joins the waitlist.
 *
 * Placeholder data — swap for your real list later. Values are stored in the
 * DB as-is, so keep them stable once you have submissions.
 */
export const locationOptions: string[] = [
  "Gachibowli",
  "Madhapur",
  "HITEC City",
  "Kondapur",
  "Miyapur",
  "Kukatpally",
  "Nizampet",
  "Bachupally",
  "Manikonda",
  "Puppalaguda",
  "Kokapet",
  "Narsingi",
  "Financial District",
  "Jubilee Hills",
  "Banjara Hills",
  "Film Nagar",
  "Ameerpet",
  "SR Nagar",
  "Panjagutta",
  "Begumpet",
  "Himayatnagar",
  "Secunderabad",
  "Marredpally",
  "Kompally",
  "Uppal",
  "LB Nagar",
  "Dilsukhnagar",
  "Kothapet",
  "Nagole",
  "Mehdipatnam",
  "Attapur",
  "Rajendranagar",
  "Shamshabad",
];

export function isKnownLocation(value: string): boolean {
  return locationOptions.includes(value);
}
