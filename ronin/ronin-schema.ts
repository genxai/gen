import { boolean, date, link, model, number, string, blob } from "ronin/schema"

export const UserModel = model({
  slug: "user",
  fields: {
    email: string({ required: true, unique: true }),
    token: string(),
    tokenCreatedAt: date(),
    name: string(),
    tokens: number({ required: true, defaultValue: 0 }),
    imageGenerationsUnlimitedUntil: date(),
    codeGenerationsUnlimitedUntil: date(),
    admin: boolean({ required: true, defaultValue: false }),
  },
})

// singleton to hold global generic state
export const GlobalModel = model({
  slug: "global",
  fields: {
    generalMaintenanceMessage: string(),
  },
})

export const ImageGenerationModel = model({
  slug: "imageGeneration",
  fields: {
    createdByUser: link({ target: "user", required: true }),
    prompt: string({ required: true }),
    modelUsed: string({ required: true }),
    status: string({ required: true }), // pending, generating, completed, failed
    generatedContent: blob(),
  },
})

export const OrderModel = model({
  slug: "order",
  fields: {
    fromUser: link({ target: "user", required: true }),
    paymentProvider: string({ required: true }), // stripe, solbond
    paymentProviderOrderId: string({ required: true }),
    costInUsdCents: number({ required: true }),
    paymentStatus: string(), // pending, paid, failed
    whatIsBought: string(), // tokens-20, image-generation-unlimited-1-day..
    paidAt: date(),
  },
})
