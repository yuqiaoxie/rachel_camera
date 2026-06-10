export type Language = "en" | "zh";

export const defaultLanguage: Language = "en";

export const languageOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" }
];

export const siteContent = {
  en: {
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
        startTime: {
          label: "Start Time"
        },
        endTime: {
          label: "End Time"
        },
        location: {
          label: "Location",
          placeholder:
            "Geneva, Grindelwald, Zermatt, Interlaken, Zurich, or nearby"
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
      noteTitle: "Let's capture your Swiss memories together."
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
  },

  zh: {
    metadata: {
      title: "Rachel Camera | 瑞士旅行人像摄影",
      description: "瑞士自然旅行人像摄影，覆盖日内瓦及瑞士热门目的地。"
    },

    brand: {
      name: "Rachel Camera"
    },

    header: {
      cta: "预约档期"
    },

    navigation: [
      { label: "首页", href: "/" },
      { label: "作品", href: "/gallery" },
      { label: "价格", href: "/#pricing" },
      { label: "预约", href: "/#booking" },
      { label: "联系", href: "/#contact" }
    ],

    hero: {
      eyebrow: "瑞士高性价比旅行人像摄影",
      title: "记录你的瑞士旅行回忆",
      description: "在瑞士美丽的城市、湖边和山景中，拍摄温暖、自然、轻松的人像照片。",
      primaryButton: "预约拍摄",
      secondaryButton: "查看作品",
      imageAlt: "瑞士自然旅行人像摄影",
      noteTitle: "轻松自然。",
      noteDescription: "拍摄过程会温和引导，照片色调自然温暖，尽量保留真实氛围。"
    },

    gallerySection: {
      eyebrow: "作品",
      title: "瑞士自然旅行人像",
      description: "适合想在瑞士留下真实旅行回忆的客人，风格轻松、自然、不过度修图。",
      button: "查看完整作品"
    },

    galleryPage: {
      eyebrow: "摄影作品",
      title: "瑞士旅行场景中的温暖人像",
      description: "适合游客、情侣、家庭和独自旅行者，在瑞士的城市、湖边和山景中留下自然照片。",
      button: "预约拍摄"
    },

    galleryImages: [
      {
        src: "/images/travel-portrait-01.svg",
        alt: "瑞士山间小路上的自然人像拍摄",
        title: "山间光线",
        location: "格林德瓦"
      },
      {
        src: "/images/travel-portrait-02.svg",
        alt: "瑞士城市街道中的轻松情侣人像",
        title: "老城漫步",
        location: "日内瓦"
      },
      {
        src: "/images/travel-portrait-03.svg",
        alt: "瑞士湖边的独自旅行者人像",
        title: "湖边时刻",
        location: "因特拉肯"
      },
      {
        src: "/images/travel-portrait-04.svg",
        alt: "瑞士山景中的温暖自然人像",
        title: "阿尔卑斯傍晚",
        location: "采尔马特"
      },
      {
        src: "/images/travel-portrait-05.svg",
        alt: "瑞士旅行中的家庭自然人像",
        title: "家庭旅行故事",
        location: "苏黎世"
      },
      {
        src: "/images/travel-portrait-06.svg",
        alt: "瑞士周边风景中的自然旅行人像",
        title: "周边小旅行",
        location: "瑞士周边地区"
      }
    ],

    pricing: {
      eyebrow: "价格",
      title: "清晰简单的瑞士旅行人像价格",
      description: "可以选择短时间人像漫步、轻松半日拍摄，或更完整的一日旅行拍摄。"
    },

    // 在这里修改套餐名称、价格、介绍和包含内容。
    packages: [
      {
        name: "Wander Session",
        price: "50 CHF/小时",
        description: "适合简单自然旅行人像的入门体验。",
        priceLines: ["2人：70 CHF/小时"],
        features: [
          "适合短时间人像拍摄",
          "适合日内瓦或附近地区",
          "提供轻松自然的拍摄引导",
          "用简单的方式记录温暖旅行回忆"
        ]
      },
      {
        name: "Story Session",
        price: "130 CHF/3小时",
        description: "轻松的半日人像漫步，可以拍到更多地点、风景和背景变化。",
        priceLines: ["2人：170 CHF"],
        features: [
          "推荐日内瓦以外地区",
          "适合因特拉肯、格林德瓦或类似路线",
          "有更多时间步行和更换背景"
        ]
      },
      {
        name: "Daylight Journey",
        price: "230 CHF/7小时",
        description: "适合更长时间旅行拍摄和目的地风格人像的一日拍摄。",
        priceLines: ["2人：300 CHF"],
        features: [
          "最长拍摄时长：7小时",
          "时间从我的出发时间开始计算",
          "适合更长时间的旅行照片拍摄"
        ]
      }
    ],

    generalNotes: {
      title: "拍摄须知",
      // 在这里修改通用服务说明。
      items: [
        "可使用英文或中文沟通。",
        "日内瓦以外地区，客人需承担交通费用，以及如有需要的景点或场地门票。",
        "客人会收到本次拍摄中所有可用的原片。",
        "默认不包含精修照片，如需轻微调色和简单修图，可以作为加购服务提出。",
        "路线规划不包含在服务内，但在条件允许时，我很乐意推荐适合拍照的地点。",
        "确认预约需要提前支付20%订金。",
        "如果客人愿意在 Facebook、Instagram 或 TikTok 分享并标记我的摄影服务，可享受5%感谢折扣。"
      ]
    },

    gearNote: {
      title: "摄影器材",
      description: "拍摄使用 Canon R10 相机，以及 18-150mm 和 100-400mm 镜头。"
    },

    booking: {
      eyebrow: "预约咨询",
      title: "预约你的瑞士人像拍摄。",
      description: "告诉我你的旅行日期和想拍摄的瑞士地点。Rachel 会回复档期、地点建议和下一步安排。",
      successMessage: "谢谢。Rachel 会查看你的瑞士拍摄需求，并回复可预约时间。",
      submitButton: "发送预约需求",
      packagePlaceholder: "选择套餐",
      fields: {
        name: {
          label: "姓名",
          placeholder: "你的姓名"
        },
        WHATSAPP: {
          label: "WhatsApp",
          placeholder: "+XX XXX XXXXXXX"
        },
        package: {
          label: "拍摄套餐"
        },
        date: {
          label: "希望日期"
        },
        startTime: {
          label: "开始时间"
        },
        endTime: {
          label: "结束时间"
        },
        location: {
          label: "拍摄地点",
          placeholder: "日内瓦、格林德瓦、采尔马特、因特拉肯、苏黎世或周边地区"
        },
        message: {
          label: "留言",
          placeholder: "告诉我你的旅行计划、偏好的沟通语言，以及想要的自然照片风格。"
        }
      },
      // 在这里修改订金、取消、改期或交付时间等预约政策。
      policy: {
        title: "预约政策",
        items: [
          "确认拍摄需要支付20%订金。",
          "拍摄前48小时内取消，订金不予退还。",
          "拍摄前48小时以上取消，将收取10%取消费用。",
          "拍摄前48小时以上改期免费。",
          "拍摄前48小时内改期，将收取10%改期费用。",
          "户外拍摄如遇天气明显不适合或存在安全风险，我们可以协商改期。"
        ]
      }
    },

    contact: {
      eyebrow: "联系",
      title: "常驻日内瓦，可在瑞士各地进行旅行人像拍摄。",
      description: "为你的瑞士旅行预约一组高性价比、高质量、自然风格的人像照片。",
      // 在这里修改联系方式。
      emailLabel: "邮箱：",
      email: "2417619910@qq.com",
      instaLabel: "Instagram：",
      instaHandle: "@camera_rachel",
      instagramUrl: "https://www.instagram.com/camera_rachel",
      WHATSAPPLabel: "WhatsApp：",
      WHATSAPP: "+41 78 2047859",
      whatsappUrl: "https://wa.me/41782047859",
      noteTitle: "一起记录你的瑞士旅行回忆。"
    },

    footer: {
      description: "瑞士自然旅行人像摄影。"
    },

    // 未来编辑备注。目前不会显示在网站页面上。
    notes: {
      locations: "日内瓦、格林德瓦、采尔马特、因特拉肯、苏黎世及周边地区。",
      languages: "英文和中文",
      style: "自然、温暖、轻松、不过度修图。"
    }
  }
} as const;

export type SiteContent = (typeof siteContent)[Language];
