import { SiteNav } from '@/components/dough/site-nav'
import { ClientsPortfolio } from '@/components/dough/clients-portfolio'

export default function PortfolioPage() {
  return (
    <main className="bg-cream min-h-screen pt-20">
      <SiteNav />
      <ClientsPortfolio />
    </main>
  )
}
