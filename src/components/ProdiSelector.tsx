import { useMemo, useState, useRef, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // Filter prodi list based on search term
  const filteredProdiList = useMemo(() => {
    if (!searchTerm.trim()) return prodiList;
    const lowerSearch = searchTerm.toLowerCase();
    return prodiList.filter(
      (prodi) =>
        prodi.name.toLowerCase().includes(lowerSearch) ||
        prodi.code.includes(searchTerm),
    );
  }, [prodiList, searchTerm]);

  // Get selected prodi name
  const selectedProdiName = useMemo(() => {
    const prodi = prodiList.find((p) => p.code === selectedProdi);
    return prodi
      ? `${prodi.name} - ${prodi.code} (${prodi.total.toLocaleString()} mahasiswa)`
      : "";
  }, [prodiList, selectedProdi]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchTerm("");
    } else if (e.key === "Enter" && filteredProdiList.length > 0) {
      onSelectProdi(filteredProdiList[0].code);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6" ref={containerRef}>
      <label
        htmlFor="prodi-search"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Pilih Program Studi
      </label>
      <div className="relative">
        {/* Search Input */}
        <div className="relative">
          <input
            ref={inputRef}
            id="prodi-search"
            type="text"
            placeholder={
              isOpen
                ? "Ketik untuk mencari..."
                : selectedProdiName || "Pilih program studi..."
            }
            value={isOpen ? searchTerm : ""}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            className="block w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Selected value display when not searching */}
        {!isOpen && selectedProdiName && (
          <div
            onClick={() => {
              setIsOpen(true);
              inputRef.current?.focus();
            }}
            className="absolute inset-0 flex items-center px-4 cursor-pointer"
          >
            <span className="text-gray-900 truncate pr-10">
              {selectedProdiName}
            </span>
          </div>
        )}

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredProdiList.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-sm">
                Tidak ada program studi yang cocok
              </div>
            ) : (
              filteredProdiList.map((prodi) => (
                <button
                  key={prodi.code}
                  onClick={() => {
                    onSelectProdi(prodi.code);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors ${
                    prodi.code === selectedProdi
                      ? "bg-indigo-100 text-indigo-900"
                      : "text-gray-900"
                  }`}
                >
                  <span className="font-medium">{prodi.name}</span>
                  <span className="text-gray-400 ml-1">- {prodi.code}</span>
                  <span className="text-gray-500 ml-2 text-sm">
                    ({prodi.total.toLocaleString()} mahasiswa)
                  </span>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
