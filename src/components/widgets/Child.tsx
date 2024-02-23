import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import TableWidget from "./Table";
import SummaryWidget from "./SummaryWidget";
import GraphWidget from "./GraphWidget";
import { BsThreeDots } from "react-icons/bs";
import { IoChevronDownSharp } from "react-icons/io5";
import AllWidget from "./AllWidget";

interface ChartData {
  [key: string]: string | number;
}
export default function Child({
  bgColor,
  daysType,
  dataType,
  direction,
  graphType,
  dataTable,
  row,
}: {
  bgColor: string;
  daysType: string;
  dataType: string;
  direction: string;
  graphType: string;
  dataTable: {
    headers: string[];
    rows: (string | number)[][];
    chartData: ChartData[];
    total: string[];
  };
  row: number;
}) {
  return (
    <>
      {dataType === "all" ? null : (
        <Box
          mt={2}
          height={"3vh"}
          bg={bgColor}
          style={{
            borderColor:
              bgColor === "#FFF"
                ? "#E1E1E1"
                : bgColor === "#5E5ADB"
                ? "#9290DE"
                : "#727272",
          }}
          borderBottom={"1px"}
        >
          <Flex
            fontSize={"11px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex>
              {daysType === "today" ? (
                <Flex ml={1}>
                  Today{" "}
                  <IoChevronDownSharp
                    style={{ marginTop: "0.5vh", marginLeft: "0.25vw" }}
                  />
                </Flex>
              ) : (
                <Flex>
                  <Box
                    pr={3}
                    pl={2}
                    m={0}
                    
                    bg="transparent"
                    h="3vh"
                    borderBottom={"2px"}
                    style={{
                      borderColor:
                        bgColor === "#FFF"
                          ? "#5E5ADB"
                          : bgColor === "#5E5ADB"
                          ? "#FFF"
                          : "#FFF",
                    }}
                  >
                    7d
                  </Box>
                  <Box pr={3} pl={2} m={0} bg="transparent" h="3vh">
                    14d
                  </Box>
                  <Box pr={3} pl={2} m={0} bg="transparent" h="3vh">
                    30d
                  </Box>
                </Flex>
              )}
            </Flex>
            <Flex mr={3} mt={0} p={0}>
              <BsThreeDots
                size="3vh"
                style={{
                  color:
                    bgColor === "#FFF"
                      ? "#D9D9D9"
                      : bgColor === "#5E5ADB"
                      ? "#EAEAEA"
                      : "#ECECEC",
                  padding: "0",
                }}
              />
            </Flex>
          </Flex>
        </Box>
      )}

      {dataType === "table" ? (
        <>
          <TableWidget data={dataTable} bgColor={bgColor} />
        </>
      ) : null}
      {dataType === "summary" ? (
        <>
          <SummaryWidget />
        </>
      ) : null}
      {dataType === "graph" ? (
        <>
          <GraphWidget
            graphType={graphType}
            data={dataTable.chartData}
            row={row}
          />
        </>
      ) : null}

      {dataType === "all" ? (
        <>
          <AllWidget data={dataTable} bgColor={bgColor} />
        </>
      ) : null}
    </>
  );
}
