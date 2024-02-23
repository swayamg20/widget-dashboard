import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import Child from "./widgets/Child";

interface Data {
  id: number;
  row: number;
  col: number;
  bgColor: string;
  direction: string;
  graphType: string;
  dataType: string;
  daysType: string;
  dataTable: {
    headers: string[];
    rows: (string | number)[][];
    chartData: ChartData[];
    total: string[];
  };
}
interface ChartData {
  [key: string]: string | number;
}
export default function Main() {
  const [cards, setCards] = useState<Data[]>([]);
  useEffect(() => {
    setCards(data as Data[]);
  }, []);

  return (
    <>
      <Grid
        h="100%"
        templateRows="repeat(4, 20vh)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        p={4}
      >
        {cards.map((e) => (
          <>
            <GridItem
              borderRadius={"10px"}
              rowSpan={e.row}
              minHeight="0"
              minWidth="0"
              // pt={1}
              overflow={"auto"}
              colSpan={e.col}
              bg={e.bgColor}
              color={e.bgColor === "#FFF" ? "black" : "white"}
              borderWidth={"1px"}
            >
              <Child
                daysType={e.daysType}
                graphType={e.graphType}
                dataType={e.dataType}
                bgColor={e.bgColor}
                direction={e.direction}
                dataTable={e.dataTable}
                row={e.row}
              />
            </GridItem>
          </>
        ))}
      </Grid>
    </>
  );
}
