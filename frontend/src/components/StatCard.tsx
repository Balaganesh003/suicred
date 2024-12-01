export function StatCard({ title, description, value, unit }: { title: string, description: string, value: string, unit: string }) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 border border-gray-700/50">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-emerald-400 font-mono text-xl">{value}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <p className="text-sm text-gray-400">{description}</p>
          <span className="text-gray-400 text-sm">{unit}</span>
        </div>
      </div>
    );
  }
  