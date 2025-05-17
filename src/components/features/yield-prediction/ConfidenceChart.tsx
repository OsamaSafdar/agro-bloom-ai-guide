
import { RadialBarChart, RadialBar, PolarGrid, ResponsiveContainer } from "recharts";

interface ConfidenceChartProps {
  confidenceLevel: number;
}

export default function ConfidenceChart({ confidenceLevel }: ConfidenceChartProps) {
  const confidenceData = [
    {
      name: "Confidence",
      value: confidenceLevel,
      fill: "#2E7D32",
    },
  ];

  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="60%" 
          outerRadius="80%" 
          barSize={10} 
          data={confidenceData} 
          startAngle={90} 
          endAngle={-270}
        >
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            fill="#2E7D32"
          />
          <PolarGrid />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xl font-bold"
            fill="#2E7D32"
          >
            {confidenceLevel}%
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
