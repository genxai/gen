export type PricingTier = {
  name: string
  description: string
  price: {
    amount: number
    currency: string
    period: string
    billingNote: string
  }
  quota: string
  features: Array<{
    text: string
    hasInfo?: boolean
  }>
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    description:
      "Essential tools for individual creators starting their AI journey.",
    price: {
      amount: 22,
      currency: "€",
      period: "/month",
      billingNote: "Billed quarterly",
    },
    quota: "4.5K tokens/quarter",
    features: [
      {
        text: "Up to ~900 Image Generations/3 months",
        hasInfo: true,
      },
      {
        text: "Up to ~300 Video Generations/3 months",
        hasInfo: true,
      },
      {
        text: "General Commercial Terms",
      },
      {
        text: "Image Generations Visibility: Public",
      },
      {
        text: "4 concurrent Generations",
      },
    ],
  },
  {
    name: "Professional",
    description: "For teams and businesses looking to scale their AI usage.",
    price: {
      amount: 48,
      currency: "€",
      period: "/month",
      billingNote: "Billed quarterly",
    },
    quota: "9K tokens/quarter",
    features: [
      {
        text: "Up to ~1800 Image Generations/3 months",
        hasInfo: true,
      },
      {
        text: "Up to ~600 Video Generations/3 months",
        hasInfo: true,
      },
      {
        text: "General Commercial Terms",
      },
      {
        text: "Image Generations Visibility: Public",
      },
      {
        text: "4 concurrent Generations",
      },
    ],
  },
  {
    name: "Unlimited",
    description: "For teams and businesses looking to scale their AI usage.",
    price: {
      amount: 98,
      currency: "€",
      period: "/month",
      billingNote: "Billed quarterly",
    },
    quota: "Unlimited",
    features: [
      {
        text: "Unlimited Image Generations",
      },
      {
        text: "All styles and models",
      },
      {
        text: "Unlimited Video Generations",
      },
      {
        text: "General Commercial Terms",
      },
      {
        text: "Image Generations Visibility: Private",
      },
      {
        text: "Unlimited concurrent Generations",
      },
    ],
  },
]
