// ---------------------------------------------------------------------------
// Everything you'll want to edit lives here. Change a value, commit, and
// Netlify rebuilds the site automatically.
// ---------------------------------------------------------------------------
export const site = {
  name: "Lumera Leisure Carts",
  domain: "lumeraleisurecarts.com",
  email: "info@lumeraleisurecarts.com",
  phone: "(321) 464-6983",

  status: "Stock arriving soon",

  headlineTop: "Fully loaded,",
  headlineAccent: "ready to ride.",

  lede:
    "Six-passenger carts built to our own spec and loaded as standard — no stripped-down base model, no options list to climb. Every Lumera leaves the floor ready to ride, so there is no build queue and no months of waiting.",

  // The four proof points under the hero.
  specs: ["Six-passenger", "Fully loaded", "Lumera-built", "Ready to ride"],

  // "What you get" cards.
  pillars: [
    {
      title: "Six passengers",
      body: "Room for the whole group — not four seats and an apology to whoever drew the short straw.",
    },
    {
      title: "Loaded as standard",
      body: "The options that actually matter come fitted. There is no base model here to talk you out of.",
    },
    {
      title: "Built to our spec",
      body: "Our own build, made to our standard — not a rebadged bargain cart with a sticker on it.",
    },
    {
      title: "Ready to ride",
      body: "No build queue and no waiting on a factory slot. It leaves the floor ready to drive.",
    },
  ],


  // ---------------------------------------------------------------------------
  // The two models we're stocking this round. Rename freely — `name` is the only
  // thing customers see. `factory` is our internal reference, never shown.
  // Specs are converted from the manufacturer spec sheet; imperial for customers.
  // ---------------------------------------------------------------------------
  models: [
    {
      slug: "cruiser",
      name: "Lumera Cruiser",
      factory: "Shark B — 6 seat",
      image: "/carts/cruiser.webp",
      tagline: "Six forward-facing seats, in a row",
      blurb:
        "The long one. Three rows, everybody facing forward, nobody riding backwards. Built for hauling the whole group to dinner or down to the dock without anyone drawing the short straw.",
      specs: [
        ["Seats", "6, forward-facing"],
        ["Range", "50–62 miles"],
        ["Length", "13 ft 0 in"],
        ["Curb weight", "1,367 lb"],
        ["Charge time", "6–8 hours"],
        ["Ground clearance", "5.9 in"],
      ],
    },
    {
      slug: "trail",
      name: "Lumera Trail",
      factory: "Shark D — 4+2 seat",
      image: "/carts/trail.webp",
      tagline: "Four forward, two rear-facing",
      blurb:
        "The short, lifted one. Same six seats in a footprint three feet shorter, with a raised stance and a heavier front end. Easier to park, easier to turn, happier off the pavement.",
      specs: [
        ["Seats", "4 forward + 2 rear-facing"],
        ["Range", "37–62 miles"],
        ["Length", "9 ft 4 in"],
        ["Curb weight", "1,168 lb"],
        ["Charge time", "6–8 hours"],
        ["Body", "Steel frame, molded panels"],
      ],
    },
  ],

  // Shared across both models — stated once so we're not repeating ourselves.
  sharedSpecs: [
    "AC motor, 3.5–7.5 kW options",
    "60V lead-acid standard, lithium optional",
    "Front disc / rear drum hydraulic brakes",
    "Independent front suspension",
    "Top speed 19–22 mph, adjustable",
  ],

  // Service area.
  areas: ["Sarasota area", "Orlando area"],
  deliveryNote:
    "We deliver anywhere in Florida for an additional charge based on distance — tell us your town in the form and we'll quote it with the cart.",
};
