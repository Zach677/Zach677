import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  // Providers configs
  github: {
    login: 'Ssttar',
    type: 'user',
  },

  afdian: {
    userId: '4fa7430ed24011ee92c052540025c377',
    exechangeRate: 7,
    includePurchases: true,
    purchaseEffectivity: 30,
    // ...
  },
  includePastSponsors: true,
  includePrivate: true,
  force: true,
  providers: ['afdian', 'github'],
  filter: (sponsor) => {
    if (
      sponsor.provider === 'afdian' &&
      sponsor.raw?.current_plan?.plan_id === '08eb414c930711ec8d4d52540025c377'
    )
      return false
    return true
  },

  // Rendering configs
  width: 800,
  formats: ['json', 'svg', 'png'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    // Default tier
    {
      title: 'Backers',
      preset: tierPresets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
})
