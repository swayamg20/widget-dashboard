import { Avatar, Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function SideBar() {
  return (
    <>
      <Flex
        flexDir={"column"}
        p={1}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex flexDir={"column"} alignItems={"center"}>
          <Box p={2} mt={3}>
            <Image src="L2493.svg" />
          </Box>
          <Box p={2}>
            <Button bg={"transparent"}>
              {" "}
              <Image src="Icon1.svg" mt={3} mb={3} />
            </Button>
          </Box>
          <Box p={2}>
            <Button bg={"transparent"}>
              <Image src="Icon2.svg" mt={3} mb={3} />
            </Button>
          </Box>
          <Box p={2}>
            <Button bg={"transparent"}>
              <Image src="Icon3.svg" mt={3} mb={3} />
            </Button>
          </Box>
          <Box p={2}>
            <Button bg={"transparent"}>
              {" "}
              <Image src="Icon4.svg" mt={3} mb={3} />
            </Button>
          </Box>
        </Flex>
        <Flex>
          <Avatar src="https://i.pravatar.cc/150?img=26" />
        </Flex>
      </Flex>
    </>
  );
}
