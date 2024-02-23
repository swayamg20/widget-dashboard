import { Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Main from "./Main";

export default function Dashboard() {
  return (
    <>
      <Flex>
        <Flex height={"100vh"} borderRight={"1px"} borderColor={"#EAECF0"}>
          <SideBar />
        </Flex>
        <Flex flexDir={"column"} width={"100%"}>
          <Navbar />
          <Main />
        </Flex>
      </Flex>
    </>
  );
}
