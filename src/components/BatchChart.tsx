import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BatchStatistics } from "../data/itbStatistics";

interface BatchChartProps {
  batches: number[];
  getBatchStats: (batch: number) => BatchStatistics | null;
}

export function BatchChart({ batches, getBatchStats }: BatchChartProps) {
  const chartData = useMemo(() => {
    return batches
      .filter((b) => b >= 2010 && b <= 2024)
      .map((batch) => {
        const stats = getBatchStats(batch);
        if (!stats) return null;
        return {
          batch: batch.toString(),
          Lulus: stats.statusBreakdown.lulus,
          Aktif: stats.statusBreakdown.aktif,
          "Undur Diri": stats.statusBreakdown.undurDiri,
          Dikeluarkan: stats.statusBreakdown.dikeluarkan,
        };
      })
      .filter(Boolean);
  }, [batches, getBatchStats]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="batch" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Lulus" stackId="a" fill="#22c55e" />
        <Bar dataKey="Aktif" stackId="a" fill="#3b82f6" />
        <Bar dataKey="Undur Diri" stackId="a" fill="#eab308" />
        <Bar dataKey="Dikeluarkan" stackId="a" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
}
