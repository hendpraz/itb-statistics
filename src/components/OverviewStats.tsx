import { OverallStatistics } from "../data/itbStatistics";

interface OverviewStatsProps {
  stats: OverallStatistics;
}

export function OverviewStats({ stats }: OverviewStatsProps) {
  const statusCards = [
    {
      label: "Lulus",
      value: stats.statusBreakdown.lulus,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      label: "Aktif",
      value: stats.statusBreakdown.aktif,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      label: "Undur Diri",
      value: stats.statusBreakdown.undurDiri,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      label: "Dikeluarkan",
      value: stats.statusBreakdown.dikeluarkan,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      label: "Cuti",
      value: stats.statusBreakdown.cuti,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
    {
      label: "Lainnya",
      value: stats.statusBreakdown.other,
      color: "bg-gray-500",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {statusCards.map((card) => (
        <div
          key={card.label}
          className={`${card.bgColor} rounded-xl p-4 shadow-sm border border-gray-100`}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${card.color}`} />
            <span className={`text-sm font-medium ${card.textColor}`}>
              {card.label}
            </span>
          </div>
          <p className={`text-2xl font-bold ${card.textColor}`}>
            {card.value.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {((card.value / stats.totalStudents) * 100).toFixed(1)}%
          </p>
        </div>
      ))}
    </div>
  );
}
