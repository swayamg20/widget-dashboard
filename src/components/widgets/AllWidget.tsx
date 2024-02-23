import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import BarChartComponent from "../charts/BarChart";
import FixedBarChart from "../charts/FixedBarChart";
interface ChartData {
  [key: string]: string | number;
}
export default function AllWidget({
  bgColor,
  data,
}: {
  bgColor: string;
  data: {
    headers: string[];
    rows: (string | number)[][];
    chartData: ChartData[];
    total: string[];
  };
}) {
  return (
    <>
      <Flex minHeight={"100%"} m={0} p={0}>
        <Flex
          flexDir={"column"}
          width={"25%"}
          bg={"#282828"}
          minHeight={"100%"}
          borderRight={"1px"}
        >
          <Flex
            mt={2}
            borderBottom={"1px"}
            borderColor={"#363636"}
            fontSize={"11px"}
          >
            <Box
              pr={3}
              pl={2}
              m={0}
              bg="transparent"
              h="3vh"
              borderBottom={"2px"}
              style={{
                borderColor: "#FFF",
              }}
              color={"#FFF"}
            >
              7d
            </Box>
            <Box color={"#757575"} pr={3} pl={2} m={0} bg="transparent" h="3vh">
              14d
            </Box>
            <Box color={"#757575"} pr={3} pl={2} m={0} bg="transparent" h="3vh">
              30d
            </Box>
          </Flex>
          <Flex width="100%" height={"70%"}>
            <FixedBarChart data={data.chartData} />
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          width={"25%"}
          borderRight={"1px"}
          borderColor={"#E6E6E6"}
          minHeight={"100%"}
        >
          <Flex
            mt={2}
            borderBottom={"1px"}
            borderColor={"#E1E1E1"}
            fontSize={"11px"}
          >
            <Box
              pr={3}
              pl={2}
              m={0}
              bg="transparent"
              h="3vh"
              borderBottom={"2px"}
              style={{
                borderColor: "#5E5ADB",
              }}
              fontWeight={600}
              color={"#5E5ADB"}
            >
              7d
            </Box>
            <Box color={"#757575"} pr={3} pl={2} m={0} bg="transparent" h="3vh">
              14d
            </Box>
            <Box color={"#757575"} pr={3} pl={2} m={0} bg="transparent" h="3vh">
              30d
            </Box>
          </Flex>
          <Flex>
            {" "}
            <Grid
              templateColumns={`repeat(${data.headers.length + 1}, 1fr)`}
              gap={0}
              p={3}
            >
              {data.headers.map((header, index) => (
                <GridItem
                  alignItems={"center"}
                  colSpan={index === 0 ? 2 : 1}
                  rowSpan={1}
                  key={index}
                >
                  <Text
                    align={index === 0 ? "left" : "center"}
                    isTruncated
                    fontSize={index === 0 ? "11px" : "10px"}
                    fontWeight={index === 0 ? 700 : 600}
                    // color={index === 0 ? "#FFF" : "#F1F1F299"}
                    style={{
                      color:
                        index === 0
                          ? bgColor === "#FFF"
                            ? "#5E5ADB"
                            : bgColor === "#5E5ADB"
                            ? "#FFF"
                            : "#FFF"
                          : bgColor === "#FFF"
                          ? "#ABA8FF"
                          : bgColor === "#5E5ADB"
                          ? "#F1F1F299"
                          : "#F1F1F299",
                    }}
                  >
                    {header}
                  </Text>
                </GridItem>
              ))}
              {data.rows.map((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                  <GridItem
                    alignItems={"center"}
                    colSpan={cellIndex === 0 ? 2 : 1}
                    rowSpan={1}
                    key={cellIndex}
                    borderRight={
                      cellIndex !== row.length - 1
                        ? "1px solid #F6F6F612"
                        : undefined
                    }
                    pt={1}
                    pr={1}
                  >
                    <Text
                      align={cellIndex === 0 ? "left" : "center"}
                      isTruncated
                      fontSize={"11px"}
                      overflow={"hidden"}
                      fontWeight={400}
                      color="#"
                      style={{
                        color:
                          bgColor === "#FFF"
                            ? "#474747"
                            : bgColor === "#5E5ADB"
                            ? "#FFFFFFA6"
                            : "#FFFFFFA6",
                      }}
                    >
                      {cell}
                    </Text>
                  </GridItem>
                ))
              )}
              {data.total.map((total, index) => (
                <GridItem
                  alignItems={"center"}
                  colSpan={index === 0 ? 2 : 1}
                  rowSpan={1}
                  key={index}
                  pt={3}
                  borderRight={
                    index !== total.length - 1
                      ? "1px solid #F6F6F612"
                      : undefined
                  }
                  pr={1}
                >
                  <Text
                    align={index === 0 ? "left" : "center"}
                    isTruncated
                    fontSize={"12px"}
                    fontWeight={600}
                    style={{
                      color:
                        bgColor === "#FFF"
                          ? "#393939"
                          : bgColor === "#5E5ADB"
                          ? "#FFF"
                          : "#FFFFFFA6",
                    }}
                  >
                    {total}
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} width={"50%"} bg={"#FFF"} minHeight={"100%"}>
          <Flex
            mt={2}
            borderBottom={"1px"}
            borderColor={"#E1E1E1"}
            fontSize={"11px"}
          >
            <Box h="3vh" ml={1}>
              <Text
                style={{ display: "inline-block" }}
                fontWeight={"600"}
                color={"#5E5ADB"}
              >
                Today
              </Text>
              <Text style={{ display: "inline-block" }} color={"#5E5ADB"}>
                <IoChevronDownSharp
                  style={{ marginTop: "0.5vh", marginLeft: "0.25vw" }}
                />
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Text fontSize={"12px"} lineHeight={"18px"} p={4}>
              Based on the provided data, the most effective hour of the day to
              send an email across all stores for all time, with the highest
              engagement after opening, is at 15:00(3 PM), with a total of 5041
              emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5
              PM) with 5007 and 4785 emails opened respectively. There is a
              noticeable drop in{" "}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
