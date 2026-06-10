export const siteContent = {
  metadata: {
    title: "Rachel Camera | Travel Portrait Photography in Switzerland",
    description:
      "Affordable natural travel portrait photography in Geneva, Grindelwald, Zermatt, Interlaken, Zurich, and nearby Switzerland locations."
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
    title: "Natural portraits for your Switzerland trip.",
    description:
      "Warm, relaxed portrait sessions in Geneva, Grindelwald, Zermatt, Interlaken, Zurich, and nearby areas. Available in English and Chinese, with natural editing and no stiff posing.",
    primaryButton: "Book a Session",
    secondaryButton: "View Gallery",
    imageAlt: "Natural travel portrait photography in Switzerland",
    noteTitle: "Relaxed and natural.",
    noteDescription:
      "Photos are guided gently, edited warmly, and kept true to the moment."
  },

  gallerySection: {
    eyebrow: "Gallery",
    title: "Natural portraits across Switzerland",
    description:
      "A warm, relaxed photography style for travelers who want real memories in beautiful Swiss locations without heavy editing or forced posing.",
    button: "Open Full Gallery"
  },

  galleryPage: {
    eyebrow: "Photo Gallery",
    title: "Warm travel portraits in Swiss locations",
    description:
      "A relaxed visual style for visitors, couples, families, and solo travelers in Geneva, Grindelwald, Zermatt, Interlaken, Zurich, and nearby areas.",
    button: "Request a Session"
  },

  galleryImages: [
    {
      src: "/images/travel-portrait-01.svg",
      alt: "Natural portrait session on a quiet Swiss mountain path",
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
    title: "Affordable sessions with flexible options",
    description:
      "Choose a simple city walk, a classic travel session, or a scenic destination shoot. Final pricing depends on location, route, and session length."
  },

  // Edit package names, prices, descriptions, and included features here.
  packages: [
    {
      name: "Essential Portrait Walk",
      price: "Affordable",
      description:
        "A simple, relaxed session for solo travelers or couples who want natural photos without a long shoot.",
      features: [
        "Short outdoor session",
        "1 easy-to-reach location",
        "Natural posing guidance",
        "Light, warm editing"
      ]
    },
    {
      name: "Classic Travel Session",
      price: "Most Popular",
      description:
        "A comfortable portrait experience with time for walking, scenery, and a fuller Switzerland travel story.",
      features: [
        "Ideal for Geneva, Zurich, or Interlaken",
        "Solo, couple, or small family portraits",
        "Warm natural color editing",
        "English or Chinese communication"
      ]
    },
    {
      name: "Scenic Destination Session",
      price: "Custom",
      description:
        "A flexible session for mountain towns and special routes such as Grindelwald, Zermatt, or nearby areas.",
      features: [
        "Location planning support",
        "Mountain, lake, or city routes",
        "Relaxed no-pressure shooting style",
        "No heavy retouching or over-editing"
      ]
    }
  ],

  booking: {
    eyebrow: "Booking Request",
    title: "Request your Switzerland portrait session.",
    description:
      "Share your travel dates, preferred Swiss location, and whether you prefer English or Chinese communication. Rachel will reply with availability, location ideas, and next steps.",
    successMessage:
      "Thank you. Rachel will review your Switzerland session request and reply with availability.",
    submitButton: "Send Booking Request",
    packagePlaceholder: "Choose a package",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name"
      },
      email: {
        label: "Email",
        placeholder: "you@example.com"
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
    policy:
      "Rachel will reply with availability, location ideas, and next steps."
  },

  contact: {
    eyebrow: "Contact",
    title:
      "Available in Geneva, Grindelwald, Zermatt, Interlaken, Zurich, and nearby areas.",
    description:
      "Book an affordable natural portrait session for your Switzerland trip. Sessions are relaxed, warm, and lightly edited so the photos still feel like you.",
    // Edit contact details here.
    emailLabel: "Email:",
    email: "hello@rachelcamera.com",
    languages: "Languages: English and Chinese.",
    style: "Style: natural, warm, relaxed, and no over-editing."
  },

  footer: {
    description: "Affordable natural travel portrait photography in Switzerland."
  },

  // General notes for future editing. These are not displayed on the website yet.
  notes: {
    locations:
      "Geneva, Grindelwald, Zermatt, Interlaken, Zurich, and nearby areas.",
    languages: "English and Chinese",
    style: "Natural, warm, relaxed, no over-editing."
  }
};
