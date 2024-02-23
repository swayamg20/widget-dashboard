// LineChart.tsx
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const formatYAxisTick = (tick: number) => `${tick / 1000}k`;
interface ChartData {
  [key: string]: string | number;
}

const colors = ["#FB8181", "#5E5ADB", "#54D787", "#82D1DB", "#F0AB24"];
export default function LineChartComponent({
  data,
  row,
}: {
  data: ChartData[];
  row: number;
}) {
  const maxUV = Math.max(...data.map((item) => Number(item.uv)));
  const yDomain = [0, Math.ceil(maxUV / 10000) * 10000];
  const yInterval = 10000;
  const yAxisTicks = [];
  for (let i = 0; i <= yDomain[1]; i += yInterval) {
    yAxisTicks.push(i);
  }
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name");

  return (
    <>
      <ResponsiveContainer width="100%" height={row > 1 ? "50%" : "95%"}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: -10,
            bottom: 40,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis
            dataKey="name"
            angle={-90}
            axisLine={false}
            tickLine={false}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 11, fontWeight: 500, fill: "#D0D0D0" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={yDomain}
            tick={{ fill: "#47474766", fontSize: "11px", strokeWidth: "1px" }}
            ticks={yAxisTicks}
            tickFormatter={formatYAxisTick}
          />
          {dataKeys.map((key, index) => (
            <Line
              key={index}
              type="monotone"
              connectNulls={true}
              dot={false}
              strokeWidth={2}
              dataKey={key}
              stroke={colors[index]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      {row > 1 ? (
        <>
          <Flex width={"100%"}>
            <Divider m={4} />
          </Flex>
          <Flex width={"100%"} flexDir={"column"} pl={5} mb={2}>
            {data.map((entry, index) => {
              // Exclude the 'name' property and calculate the sum of all other fields' values
              const sum = Object.keys(entry)
                .filter((key) => key !== "name")
                .reduce((acc, key) => acc + Number(entry[key]), 0);
              return (
                <Flex
                  key={index}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  mb={1}
                >
                  <Flex
                    w={"0.25vw"}
                    bg={colors[index]}
                    h="4vh"
                    mr={2}
                    borderRadius={"1px"}
                  />
                  <Flex flexDir={"column"}>
                    <Text
                      fontSize={"10px"}
                      fontWeight={"500"}
                      color={"#AFAFAF"}
                    >
                      {entry.name}
                    </Text>
                    <Text fontSize={"14px"} fontWeight={"400"}>
                      {sum}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </>
      ) : null}
    </>
  );
}
