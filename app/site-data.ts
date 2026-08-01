export const site = {
  name: "RHE Auto",
  url: "https://rheauto.com",
  owner: {
    name: "Hughes R.",
    title: "CEO",
    focus: "Electric",
  },
  address: {
    street: "2778 Cleveland Ave",
    city: "Columbus",
    region: "Ohio",
    postalCode: "43224",
    display: "2778 Cleveland Ave, Columbus, Ohio 43224",
  },
  email: "rheauto@gmail.com",
  phones: [
    {
      label: "Work",
      display: "(614) 321-7743",
      href: "tel:+16143217743",
    },
    {
      label: "Cell",
      display: "(614) 493-7361",
      href: "tel:+16144937361",
    },
  ],
  links: {
    directions:
      "https://maps.google.com/?q=2778%20Cleveland%20Ave%20Columbus%20Ohio%2043224",
    payment: "https://www.paypal.me/hughesroc",
    appointment: "https://calendly.com/rheauto",
    whatsapp: "https://api.whatsapp.com/send?phone=16143217743",
    linkedin: "https://www.linkedin.com/in/rhe-auto-632a001b9",
    facebook: "https://www.facebook.com/rheauto",
  },
} as const;

export const certifications = [
  "I-CAR",
  "PPG",
  "EPA",
  "MACS",
  "Professional Technician Society",
] as const;

export const pricedServices = [
  {
    number: "01",
    name: "Diagnostic",
    price: "$215",
    description:
      "A focused diagnostic session to identify faults, warning lights, and the next practical step for your vehicle.",
  },
  {
    number: "02",
    name: "Service Call",
    price: "$80",
    description:
      "Start with a direct service call when you need help understanding the issue and arranging the right visit.",
  },
  {
    number: "03",
    name: "Service Check",
    price: "$53",
    description:
      "A straightforward vehicle check for a specific concern before deciding how to move forward.",
  },
] as const;

export const otherServices = [
  {
    name: "Used vehicles",
    description:
      "Call for current vehicle availability and arrange a time to see what is on the lot.",
  },
  {
    name: "Key programming",
    description:
      "Ask about compatibility and scheduling for a replacement or spare vehicle key.",
  },
  {
    name: "Electric",
    description:
      "Electric is part of the RHE Auto service focus. Call with your vehicle details before visiting.",
  },
] as const;

