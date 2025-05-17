
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface YieldChartProps {
  chartData: Array<{ year: string; yield: number }>;
}

export default function YieldChart({ chartData }: YieldChartProps) {
  // Custom component to render bars with different colors based on index
  const CustomBar = (props: any) => {
    const { fill, x, y, width, height, index } = props;
    const barFill = index === chartData.length - 1 ? "#2E7D32" : "#81C784";
    
    return <rect x={x} y={y} width={width} height={height} fill={barFill} />;
  };

  return (
    <div className="h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="yield" 
            name="Yield (t/ha)" 
            fill="#81C784"
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
