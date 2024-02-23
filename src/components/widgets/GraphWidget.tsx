import React from "react";
import { Bar } from "react-chartjs-2";
// import BarChart from "../charts/BarChart";
import BarChartComponent from "../charts/BarChart";
import PieChartComponent from "../charts/PieChartComponent";
import LineChartComponent from "../charts/LineChartComponent";
interface ChartData {
  [key: string]: string | number;
}
export default function GraphWidget({
  graphType,
  data,
  row
}: {
  graphType: string;
  data: ChartData[];
  row: number;
}) {
  return (
    <>
      {graphType === "bar" ? <BarChartComponent data={data} /> : null}
      {graphType === "pie" ? <PieChartComponent data={data} /> : null}
      {graphType === "line" ? <LineChartComponent data={data} row={row} /> : null}
    </>
  );
}
