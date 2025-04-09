import { pricingTiers } from "../constants/pricing"
import PricingCard from "./PricingCard"

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl w-[550px] text-white/80 pb-[1.5em] mx-auto font-bold">
        Get started with our pricing plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </div>
    </div>
  )
}
