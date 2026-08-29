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

export const locationOptions: string[] = [
  "Alluri Sitharama Raju",
  "Anakapalli",
  "Ananthapuramu (Anantapur)",
  "Annamayya",
  "Bapatla",
  "Chittoor",
  "Dr. B.R. Ambedkar Konaseema",
  "East Godavari",
  "Eluru",
  "Guntur",
  "Kakinada",
  "Krishna",
  "Kurnool",
  "Markapuram",
  "Nandyal",
  "NTR",
  "Palnadu",
  "Parvathipuram Manyam",
  "Polavaram",
  "Prakasam",
  "Sri Potti Sriramulu Nellore (Nellore)",
  "Sri Sathya Sai",
  "Srikakulam",
  "Tirupati",
  "Visakhapatnam",
  "Vizianagaram",
  "YSR Kadapa",
];
