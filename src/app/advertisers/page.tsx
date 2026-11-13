import { InfoPage } from '@/components/landing/InfoPage'
import { PublicPageShell } from '@/components/landing/PublicPageShell'

export default function AdvertisersPage() {
  return (
    <PublicPageShell>
      <InfoPage
        title="Reach your audience"
        description="Plan and manage advertising campaigns with clear controls for your goals."
        benefits={[
          { title: 'Audience targeting', description: 'Set campaign targeting around the audience you want to reach.' },
          { title: 'Budget control', description: 'Choose a budget that fits your campaign before it goes live.' },
          { title: 'Campaign reporting', description: 'Review campaign activity and results in one place.' },
        ]}
        steps={['Sign up', 'Create campaign', 'Set budget and targeting', 'Track results']}
      />
    </PublicPageShell>
  )
}
