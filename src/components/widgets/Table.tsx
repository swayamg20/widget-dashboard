import { Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function TableWidget({
  bgColor,
  data,
}: {
  bgColor: string;
  data: {
    headers: string[];
    rows: (string | number)[][];
    total: string[];
  };
}) {
  return (
    <>
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
                cellIndex !== row.length - 1 ? "1px solid #F6F6F612" : undefined
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
              index !== total.length - 1 ? "1px solid #F6F6F612" : undefined
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
    </>
  );
}
