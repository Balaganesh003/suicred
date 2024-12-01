export function HighlightCard({ title, description, children, className }: { title: string, description: string, children: React.ReactNode, className: string }) {
    return (
      <div
        className={`rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 border border-gray-800  ${className}`}>
        <div className="mb-4">{children}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    );
  }
  