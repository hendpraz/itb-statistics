import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  //   Tooltip,
} from "recharts";
import { GenderCount } from "../data/itbStatistics";

interface GenderChartProps {
  genderBreakdown: GenderCount;
}

const COLORS = ["#3b82f6", "#ec4899"];

export function GenderChart({ genderBreakdown }: GenderChartProps) {
  const data = [
    { name: "Laki-laki", value: genderBreakdown.male },
    { name: "Perempuan", value: genderBreakdown.female },
  ];

  const total = genderBreakdown.male + genderBreakdown.female;

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            // label={({ name, percent }) =>
            //   `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`
            // }
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Tooltip
            formatter={(value: number) => [value.toLocaleString(), "Jumlah"]}
          /> */}
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-8 mt-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Laki-laki</p>
          <p className="text-xl font-bold text-blue-600">
            {genderBreakdown.male.toLocaleString()}
          </p>
          <p className="text-xs text-gray-400">
            {((genderBreakdown.male / total) * 100).toFixed(1)}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Perempuan</p>
          <p className="text-xl font-bold text-pink-600">
            {genderBreakdown.female.toLocaleString()}
          </p>
          <p className="text-xs text-gray-400">
            {((genderBreakdown.female / total) * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}
