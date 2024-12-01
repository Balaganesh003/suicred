export function CircularProgress({ value, maxValue }) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="relative w-16 h-16">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="stroke-gray-700 fill-none"
          strokeWidth="8"
          cx="50"
          cy="50"
          r="45"
        />
        {/* Progress circle */}
        <circle
          className="stroke-red-500/80 fill-none transform -rotate-90 origin-center"
          strokeWidth="8"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={`${percentage * 2.827} 282.7`}
        />
        <text
          x="50"
          y="50"
          className="fill-white text-2xl font-bold"
          dominantBaseline="middle"
          textAnchor="middle">
          {value}
        </text>
      </svg>
    </div>
  );
}
