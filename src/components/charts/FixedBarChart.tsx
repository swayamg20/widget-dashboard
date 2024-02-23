// BarChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Rectangle,
} from "recharts";

const formatYAxisTick = (tick: number) => `${tick / 1000}k`;
interface ChartData {
  [key: string]: string | number;
}
export default function FixedBarChart({ data }: { data: ChartData[] }) {
  const maxUV = Math.max(...data.map((item) => Number(item.value)));
  const yDomain = [0, Math.ceil(maxUV / 5000) * 5000];
  const yInterval = 5000;
  const yAxisTicks = [];
  for (let i = 0; i <= yDomain[1]; i += yInterval) {
    yAxisTicks.push(i);
  }

  return (
    <ResponsiveContainer >
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: -10,
          bottom: 10,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFF", fontSize: "11px", strokeWidth: "1px" }}
          domain={yDomain}
          ticks={yAxisTicks}
          tickFormatter={formatYAxisTick}
        />
        <Bar dataKey="value" barSize={5} radius={[5, 5, 0, 0]}>
          {data.map((entry) => (
            <>
              <Cell key={entry.name} fill={entry.color.toString()} />
            </>
          ))}
          <Rectangle isAnimationActive={false} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
