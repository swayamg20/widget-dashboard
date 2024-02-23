// PieChart.tsx
import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

interface ChartData {
  [key: string]: string | number;
}
export default function PieChartComponent({ data }: { data: ChartData[] }) {
  return (
    <ResponsiveContainer width="100%" height={"80%"}>
      <PieChart>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#000"
          fontSize="15px"
          fontWeight="400"
        >
          89,000
        </text>
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#BBBBBB"
          fontSize="9px"
          fontWeight="500"
        >
          Orders
        </text>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          paddingAngle={5}
          innerRadius={40}
          outerRadius={55}
          fill="#8884d8"
        >
          {data.map((entry) => (
            <>
              <Cell key={entry.name} fill={entry.color.toString()} />
            </>
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
