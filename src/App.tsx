import { useState, useMemo } from "react";
import {
  getOverallStatistics,
  getAvailableBatches,
  getAvailableProdiCodes,
  getProdiStatistics,
  getBatchStatistics,
} from "./data/itbStatistics";
import { OverviewStats } from "./components/OverviewStats";
import { BatchChart } from "./components/BatchChart";
import { ProdiSelector } from "./components/ProdiSelector";
import { ProdiStats } from "./components/ProdiStats";
import { GenderChart } from "./components/GenderChart";

function App() {
  const stats = useMemo(() => getOverallStatistics(), []);
  const batches = useMemo(() => getAvailableBatches(), []);
  const prodiCodes = useMemo(() => getAvailableProdiCodes(), []);

  const [selectedProdi, setSelectedProdi] = useState<string>("135"); // Default to Teknik Informatika
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null);

  const selectedProdiStats = useMemo(() => {
    return selectedProdi ? getProdiStatistics(selectedProdi) : null;
  }, [selectedProdi]);

  // const _selectedBatchStats = useMemo(() => {
  //   return selectedBatch ? getBatchStatistics(selectedBatch) : null;
  // }, [selectedBatch]);

  // Filter batches to reasonable range (2000-2025)
  const filteredBatches = useMemo(() => {
    return batches.filter((b) => b >= 2000 && b <= 2025);
  }, [batches]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            📊 ITB Mahasiswa Statistics
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Data dari {stats.totalStudents.toLocaleString()} record (
            {stats.uniqueStudents.toLocaleString()} mahasiswa unik)
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Overview Stats */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Overview Keseluruhan
          </h2>
          <OverviewStats stats={stats} />
        </section>

        {/* Charts Row */}
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Status Mahasiswa per Batch
            </h3>
            <BatchChart
              batches={filteredBatches}
              getBatchStats={getBatchStatistics}
            />
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Distribusi Gender
            </h3>
            <GenderChart genderBreakdown={stats.genderBreakdown} />
          </div>
        </section>

        {/* Prodi Selection */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Statistik per Program Studi
          </h2>
          <ProdiSelector
            prodiCodes={prodiCodes}
            selectedProdi={selectedProdi}
            onSelectProdi={setSelectedProdi}
            getProdiStats={getProdiStatistics}
          />
        </section>

        {/* Prodi Stats */}
        {selectedProdiStats && (
          <section className="mb-8">
            <ProdiStats
              prodi={selectedProdiStats}
              selectedBatch={selectedBatch}
              onSelectBatch={setSelectedBatch}
            />
          </section>
        )}

        {/* Batch Selector */}
        {selectedProdiStats && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Filter Batch untuk {selectedProdiStats.prodiName}
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBatch(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedBatch === null
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                Semua Batch
              </button>
              {Object.keys(selectedProdiStats.byBatch)
                .map(Number)
                .filter((b) => b >= 2000 && b <= 2025)
                .sort((a, b) => b - a)
                .slice(0, 15)
                .map((batch) => (
                  <button
                    key={batch}
                    onClick={() => setSelectedBatch(batch)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedBatch === batch
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {batch}
                  </button>
                ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            ITB Statistics Dashboard - Data dari DIKTI 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
