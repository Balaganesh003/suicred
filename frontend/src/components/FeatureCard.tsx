export default function FeatureCard({ icon, title, description }: { icon: any, title: any, description: any }) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 border border-gray-800">
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    )
  }
  