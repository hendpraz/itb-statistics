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
  LineChart,
  Line,
} from "recharts";
import { ProdiStatistics } from "../data/itbStatistics";

interface ProdiStatsProps {
  prodi: ProdiStatistics;
  selectedBatch: number | null;
  onSelectBatch: (batch: number | null) => void;
}

export function ProdiStats({ prodi, selectedBatch }: ProdiStatsProps) {
  // Get batch data for charts
  const batchChartData = useMemo(() => {
    return Object.entries(prodi.byBatch)
      .map(([batch, stats]) => ({
        batch: parseInt(batch),
        total: stats.total,
        lulus: stats.statusBreakdown.lulus,
        aktif: stats.statusBreakdown.aktif,
        undurDiri: stats.statusBreakdown.undurDiri,
        dikeluarkan: stats.statusBreakdown.dikeluarkan,
        male: stats.genderBreakdown.male,
        female: stats.genderBreakdown.female,
      }))
      .filter((d) => d.batch >= 2010 && d.batch <= 2024)
      .sort((a, b) => a.batch - b.batch);
  }, [prodi]);

  // Get graduation data for selected batch or all batches
  const graduationData = useMemo(() => {
    if (selectedBatch && prodi.byBatch[selectedBatch]) {
      const gradYears = prodi.byBatch[selectedBatch].graduationYears;
      return Object.entries(gradYears)
        .map(([years, count]) => ({
          years: `${years} tahun`,
          count,
        }))
        .sort((a, b) => parseInt(a.years) - parseInt(b.years));
    }

    // Aggregate graduation years across all batches
    const aggregated: Record<number, number> = {};
    Object.values(prodi.byBatch).forEach((batchStats) => {
      Object.entries(batchStats.graduationYears).forEach(([years, count]) => {
        const y = parseInt(years);
        aggregated[y] = (aggregated[y] || 0) + count;
      });
    });

    return Object.entries(aggregated)
      .map(([years, count]) => ({
        years: `${years} tahun`,
        count,
      }))
      .sort((a, b) => parseInt(a.years) - parseInt(b.years));
  }, [prodi, selectedBatch]);

  // Gender ratio per batch
  const genderRatioData = useMemo(() => {
    return batchChartData.map((d) => ({
      batch: d.batch.toString(),
      "% Laki-laki": Math.round((d.male / d.total) * 100),
      "% Perempuan": Math.round((d.female / d.total) * 100),
    }));
  }, [batchChartData]);

  // Selected batch stats summary
  const selectedBatchStats = selectedBatch ? prodi.byBatch[selectedBatch] : null;

  return (
    <div className="space-y-6">
      {/* Prodi Overview */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {prodi.prodiName}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="text-sm text-indigo-600 font-medium">Total</p>
            <p className="text-2xl font-bold text-indigo-900">
              {prodi.total.toLocaleString()}
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-600 font-medium">Lulus</p>
            <p className="text-2xl font-bold text-green-900">
              {prodi.statusBreakdown.lulus.toLocaleString()}
            </p>
            <p className="text-xs text-green-600">
              {((prodi.statusBreakdown.lulus / prodi.total) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-600 font-medium">Laki-laki</p>
            <p className="text-2xl font-bold text-blue-900">
              {prodi.genderBreakdown.male.toLocaleString()}
            </p>
            <p className="text-xs text-blue-600">
              {((prodi.genderBreakdown.male / prodi.total) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="bg-pink-50 rounded-lg p-4">
            <p className="text-sm text-pink-600 font-medium">Perempuan</p>
            <p className="text-2xl font-bold text-pink-900">
              {prodi.genderBreakdown.female.toLocaleString()}
            </p>
            <p className="text-xs text-pink-600">
              {((prodi.genderBreakdown.female / prodi.total) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* Selected Batch Stats */}
      {selectedBatchStats && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Detail Batch {selectedBatch}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-lg font-bold text-gray-900">
                {selectedBatchStats.total}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-xs text-green-600">Lulus</p>
              <p className="text-lg font-bold text-green-900">
                {selectedBatchStats.statusBreakdown.lulus}
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-600">Aktif</p>
              <p className="text-lg font-bold text-blue-900">
                {selectedBatchStats.statusBreakdown.aktif}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 text-center">
              <p className="text-xs text-yellow-600">Undur Diri</p>
              <p className="text-lg font-bold text-yellow-900">
                {selectedBatchStats.statusBreakdown.undurDiri}
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 text-center">
              <p className="text-xs text-red-600">Dikeluarkan</p>
              <p className="text-lg font-bold text-red-900">
                {selectedBatchStats.statusBreakdown.dikeluarkan}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Students per Batch */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Jumlah Mahasiswa per Batch
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={batchChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="batch" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="lulus" name="Lulus" fill="#22c55e" stackId="a" />
              <Bar dataKey="aktif" name="Aktif" fill="#3b82f6" stackId="a" />
              <Bar
                dataKey="undurDiri"
                name="Undur Diri"
                fill="#eab308"
                stackId="a"
              />
              <Bar
                dataKey="dikeluarkan"
                name="Dikeluarkan"
                fill="#ef4444"
                stackId="a"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gender Ratio Trend */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Tren Rasio Gender per Batch
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={genderRatioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="batch" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="% Laki-laki"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="% Perempuan"
                stroke="#ec4899"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Graduation Time Distribution */}
      {graduationData.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Distribusi Waktu Kelulusan{" "}
            {selectedBatch ? `(Batch ${selectedBatch})` : "(Semua Batch)"}
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={graduationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="years" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" name="Jumlah" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 flex flex-wrap gap-2">
            {graduationData.map((d) => (
              <span
                key={d.years}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {d.years}: {d.count.toLocaleString()} mahasiswa
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
