import Navbar from '../components/Navbar';
import { CircularProgress } from '../components/CircularProgress';
import { HighlightCard } from '../components/HighlightCard';
import { TokenRow } from '../components/TokenRow';
import { StatCard } from '../components/StatCard';

const stats = [
  {
    title: 'Deployed contracts',
    description: 'Amount of deployed smart-contracts',
    value: 0,
    unit: 'ETH',
  },
  {
    title: 'Native balance',
    description: 'Wallet native token balance',
    value: 0,
    unit: 'ETH',
  },
  {
    title: 'Native balance USD',
    description: 'Wallet native token balance',
    value: 0,
    unit: 'USD',
  },
  {
    title: 'Hold tokens balance USD',
    description: 'Wallet hold tokens total balance',
    value: 0,
    unit: 'USD',
  },
  {
    title: 'Wallet turnover',
    description: 'The movement of funds on the wallet',
    value: 0,
    unit: 'ETH',
  },
  {
    title: 'Wallet turnover USD',
    description: 'The movement of funds on the wallet',
    value: 0,
    unit: 'USD',
  },
  {
    title: 'Balance change in last month',
    description: 'The balance change value in the last month',
    value: 0,
    unit: 'ETH',
  },
  {
    title: 'Balance change in last year',
    description: 'The balance change value in the last year',
    value: 0,
    unit: 'ETH',
  },
  {
    title: 'Wallet age',
    description: 'Wallet age (from the first transaction)',
    value: 0,
    unit: 'months',
  },
  {
    title: 'Total transactions',
    description: 'Total transactions on wallet',
    value: 0,
    unit: '',
  },
  {
    title: 'Total rejected transactions',
    description: 'Total rejected transactions on wallet',
    value: 0,
    unit: '',
  },
  {
    title: 'Average transaction interval time',
    description: 'Average time interval between transactions',
    value: 0,
    unit: 'hours',
  },
];

export default function ReputationPage() {
  return (
    <div className="min-h-screen bg-black text-white ">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 max-w-[1080px]">
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-6">Highlights</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <HighlightCard
              title="Nomis Scroll Score"
              description="The overall Scroll score is 0.00/100"
              className="bg-red-900/20">
              <CircularProgress value={0} maxValue={100} />
            </HighlightCard>

            <HighlightCard
              title="Wallet Pulse"
              description="This is the wallet's onchain activity on Scroll ecosystem">
              <div className="h-16 flex items-center">
                {/* Placeholder for wallet pulse visualization */}
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-0 h-full bg-blue-500 rounded-full" />
                </div>
              </div>
            </HighlightCard>

            <HighlightCard
              title="Little Activity"
              description="This wallet has total spendings of less than $1">
              <div className="w-16 h-16 relative">
                <img
                  src="/placeholder.svg"
                  alt="Activity Icon"
                  fill
                  className="rounded-full"
                />
              </div>
            </HighlightCard>
          </div>
        </section>

        <section className="py-8">
          <div className="flex items-baseline gap-3 mb-6">
            <h2 className="text-3xl font-bold">Tokens</h2>
            <span className="text-green-400 text-2xl font-semibold">$0.00</span>
          </div>

          <div className="space-y-4">
            <TokenRow
              symbol="ETH"
              balance={0}
              value={0}
              iconUrl="/placeholder.svg"
            />
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Stats</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                description={stat.description}
                value={stat.value}
                unit={stat.unit}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
