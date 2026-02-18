import { useMemo } from "react";
import { ProdiStatistics } from "../data/itbStatistics";

interface ProdiSelectorProps {
  prodiCodes: string[];
  selectedProdi: string;
  onSelectProdi: (code: string) => void;
  getProdiStats: (code: string) => ProdiStatistics | null;
}

export function ProdiSelector({
  prodiCodes,
  selectedProdi,
  onSelectProdi,
  getProdiStats,
}: ProdiSelectorProps) {
  // Get prodi list with names and sort by total students
  const prodiList = useMemo(() => {
    return prodiCodes
      .map((code) => {
        const stats = getProdiStats(code);
        return stats
          ? { code, name: stats.prodiName, total: stats.total }
          : null;
      })
      .filter(Boolean)
      .filter((p) => p!.name !== "Unknown Prodi" && p!.total > 50)
      .sort((a, b) => b!.total - a!.total) as {
      code: string;
      name: string;
      total: number;
    }[];
  }, [prodiCodes, getProdiStats]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <label
        htmlFor="prodi-select"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Pilih Program Studi
      </label>
      <select
        id="prodi-select"
        value={selectedProdi}
        onChange={(e) => onSelectProdi(e.target.value)}
        className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        {prodiList.map((prodi) => (
          <option key={prodi.code} value={prodi.code}>
            {prodi.name} ({prodi.total.toLocaleString()} mahasiswa)
          </option>
        ))}
      </select>
    </div>
  );
}
