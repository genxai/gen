import { PricingTier } from "../constants/pricing"
import { Info } from "lucide-react"

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className="bg-[#151515] rounded-2xl border border-neutral-700/50 p-4 py-6 flex flex-col">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-white">{tier.name}</h2>
        <p className="text-white/70 text-sm">{tier.description}</p>
      </div>

      <div className="mt-6 space-y-1">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold">
            {tier.price.amount}
            {tier.price.currency}
          </span>
          <span className="text-white/70 text-sm mb-1">
            {tier.price.period}
          </span>
        </div>
        <p className="text-white/50 text-xs">{tier.price.billingNote}</p>
      </div>

      <div className="mt-3">
        <p className="text-white/90 text-sm font-medium">{tier.quota}</p>
      </div>

      <button className="mt-6 w-full bg-neutral-800 hover:bg-neutral-700/50 hover:cursor-pointer text-white rounded-lg py-2.5 text-sm font-medium">
        Get Started
      </button>

      <div className="mt-6">
        <p className="text-white text-sm font-medium pb-[2em]">
          What's included
        </p>
        <ul className="space-y-2.5">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-1.5 text-white/70">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="flex items-center gap-1.5 text-sm">
                {feature.text}
                {feature.hasInfo && (
                  <Info className="w-3.5 h-3.5 text-white/50" />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
