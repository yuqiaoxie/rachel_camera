export const siteContent = {
  metadata: {
    title: "Rachel Camera | Travel Portrait Photography in Switzerland",
    description:
      "Affordable natural travel portraits across Switzerland's most beautiful destinations."
  },

  brand: {
    name: "Rachel Camera"
  },

  header: {
    cta: "Request a Date"
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Book", href: "/#booking" },
    { label: "Contact", href: "/#contact" }
  ],

  hero: {
    eyebrow: "Affordable travel portraits in Switzerland",
    title: "Capture Your Swiss Memories",
    description:
      "Warm and relaxed portrait sessions across Switzerland's most beautiful destinations.",
    primaryButton: "Book a Session",
    secondaryButton: "View Gallery",
    imageAlt: "Natural travel portrait photography in Switzerland",
    noteTitle: "Relaxed and natural.",
    noteDescription:
      "Photos are guided gently, edited warmly, and kept true to the moment."
  },

  gallerySection: {
    eyebrow: "Gallery",
    title: "Natural Portraits across Switzerland",
    description:
      "A relaxed photography style for travelers who want real memories in beautiful Swiss locations",
    button: "Open Full Gallery"
  },

  galleryPage: {
    eyebrow: "Photo Gallery",
    title: "Warm travel portraits in Swiss locations",
    description:
      "A relaxed visual style for visitors, couples, families, and solo travelers Switzerland's most beautiful destinations",
    button: "Request a Session"
  },

  galleryImages: [
    {
      src: "/images/travel-portrait-01.svg",
      alt: "Natural Portrait session on a quiet Swiss mountain path",
      title: "Mountain Light",
      location: "Grindelwald"
    },
    {
      src: "/images/travel-portrait-02.svg",
      alt: "Relaxed couple portrait session in a Swiss city street",
      title: "Old Town Walk",
      location: "Geneva"
    },
    {
      src: "/images/travel-portrait-03.svg",
      alt: "Solo traveler portrait beside a calm Swiss lake",
      title: "Lake Moment",
      location: "Interlaken"
    },
    {
      src: "/images/travel-portrait-04.svg",
      alt: "Warm natural portrait session with Swiss mountain views",
      title: "Alpine Evening",
      location: "Zermatt"
    },
    {
      src: "/images/travel-portrait-05.svg",
      alt: "Relaxed family travel portrait session in Switzerland",
      title: "Family Travel Story",
      location: "Zurich"
    },
    {
      src: "/images/travel-portrait-06.svg",
      alt: "Natural travel portrait in a scenic nearby Swiss location",
      title: "Nearby Escape",
      location: "Swiss Nearby Areas"
    }
  ],

  pricing: {
    eyebrow: "Pricing",
    title: "Clear & Simple Pricing for Swiss Travel Portraits",
    description:
      "Choose a short portrait walk, a relaxed half-day session, or a full-day journey."
  },

  // Edit package names, prices, descriptions, and included features here.
  packages: [
    {
      name: "Wander Session",
      price: "50 CHF/Hour",
      description:
        "An introductory offer for simple, natural travel portraits.",
      priceLines: ["2 people: 70 CHF/h"],
      features: [
        "Best for short portrait sessions",
        "Ideal for Geneva or nearby areas",
        "Relaxed natural posing guidance",
        "A simple way to capture warm travel memories"
      ]
    },
    {
      name: "Story Session",
      price: "130 CHF/3 Hours",
      description:
        "A relaxed half-day portrait walk with more variety in locations, scenery, and backgrounds.",
      priceLines: ["2 people: 170 CHF"],
      features: [
        "Recommended for areas outside Geneva",
        "Suitable for Interlaken, Grindelwald, or similar routes",
        "More time for walking and changing backgrounds"
      ]
    },
    {
      name: "Daylight Journey",
      price: "230 CHF/ 7 Hours",
      description:
        "A full-day travel photo journey for longer sessions and destination-style shoots.",
      priceLines: ["2 people: 300 CHF"],
      features: [
        "Maximum session length: 7 hours",
        "Time starts from my departure time",
        "Best for longer travel photo sessions"
      ]
    }
  ],

  generalNotes: {
    title: "Good to Know",
    // Edit general service notes here.
    items: [
      "English and Chinese speaking.",
      "For areas outside Geneva, clients cover travel expenses and any required location or attraction entry tickets.",
      "Clients receive all usable original photos from the session.",
      "Edited photos are not included by default, but lightly edited photos can be requested as an add-on.",
      "Route planning is not included, but I am happy to suggest photo-friendly spots when possible.",
      "A 20% booking deposit is required in advance to confirm the session.",
      "A 5% thank-you discount is available for clients who are happy to share and tag my photography service on Facebook, Instagram, or TikTok."
    ]
  },

  gearNote: {
    title: "Camera Gear",
    description:
      "Sessions are photographed with a Canon R10 and 18-150mm and 100-400mm lenses."
  },

  booking: {
    eyebrow: "Booking Request",
    title: "Request your Switzerland portrait session.",
    description:
      "Share your travel dates, preferred Swiss location. Rachel will reply with availability, location ideas, and next steps.",
    successMessage:
      "Thank you. Rachel will review your Switzerland session request and reply with availability.",
    submitButton: "Send Booking Request",
    packagePlaceholder: "Choose a package",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name"
      },
      WHATSAPP: {
        label: "WhatsApp",
        placeholder: "+XX XXX XXXXXXX"
      },
      package: {
        label: "Session Type"
      },
      date: {
        label: "Preferred Date"
      },
      location: {
        label: "Location",
        placeholder: "Geneva, Grindelwald, Zermatt, Interlaken, Zurich, or nearby"
      },
      message: {
        label: "Message",
        placeholder:
          "Tell me your travel plan, preferred language, and the kind of natural photos you want."
      }
    },
    // Edit booking policies here when you add deposits, cancellation rules, or delivery timing.
    policy: {
      title: "Booking Policy",
      items: [
        "A 20% booking deposit is required to confirm the session.",
        "Cancellations within 48 hours of the session are non-refundable.",
        "Cancellations made more than 48 hours in advance are subject to a 10% cancellation fee.",
        "Date changes are free more than 48 hours before the session.",
        "Date changes within 48 hours of the session are subject to a 10% rescheduling fee.",
        "For outdoor sessions, if the weather makes shooting unsafe or clearly unsuitable, we can discuss rescheduling."
      ]
    }
  },

  contact: {
    eyebrow: "Contact",
    title:
      "Based in Geneva, available for travel sessions across Switzerland.",
    description:
      "Book an affordable and high-quality natural portrait session for your Switzerland trip.",
    // Edit contact details here.
    emailLabel: "Email:",
    email: "2417619910@qq.com",
    instaLabel: "Instagram:",
    instaHandle: "@camera_rachel",
    instagramUrl: "https://www.instagram.com/camera_rachel",
    WHATSAPPLabel: "WhatsApp:",
    WHATSAPP: "+41 78 2047859",
    whatsappUrl: "https://wa.me/41782047859",
    noteTitle: "Let's capture your Swiss memories together.",
    
  },

  footer: {
    description: "Natural travel portraits across Switzerland."
  },

  // General notes for future editing. These are not displayed on the website yet.
  notes: {
    locations:
      "Geneva, Grindelwald, Zermatt, Interlaken, Zurich, and nearby areas.",
    languages: "English and Chinese",
    style: "Natural, warm, relaxed, no over-editing."
  }
};
