import { InfoPage } from '@/components/landing/InfoPage'
import { PublicPageShell } from '@/components/landing/PublicPageShell'

export default function PublishersPage() {
  return (
    <PublicPageShell>
      <InfoPage
        title="Monetize your website"
        description="Get started with ad placements and keep track of your publisher activity."
        benefits={[
          { title: 'Add a website', description: 'Submit your website to set up a publisher account.' },
          { title: 'Place ads', description: 'Add ad placements to your pages using the provided ad code.' },
          { title: 'Track earnings', description: 'View your earnings information from your publisher account.' },
        ]}
        steps={['Sign up', 'Add website', 'Get ad code', 'Get paid']}
      />
    </PublicPageShell>
  )
}
