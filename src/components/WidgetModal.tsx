import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Image,
  Text,
  Flex,
  Textarea,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Divider,
  Box,
} from "@chakra-ui/react";
import TableWidget from "./widgets/Table";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const dataTable = {
  headers: ["PRODUCT", "Q1-23", "Q2-23"],
  rows: [
    ["Reusable", 30, "4%"],
    ["Natural", 25, "4%"],
    ["Compost", 35, "4%"],
    ["Reusable Stuff", 35, "4%"],
  ],
  total: ["Total", "4%", "4%"],
};

const WidgetModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("transparent");

  return (
    <Modal size={"5xl"} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        overflow={"hidden"}
        height={"700px"}
        width={"70vw"}
        borderRadius="15px"
      >
        <ModalCloseButton />
        <Flex
          left="5%"
          mt={"-11vh"}
          ml={"-15vh"}
          height={"40vh"}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex
            flexDir={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Flex>
              <Image
                src="Background pattern decorative.svg"
                objectFit="cover"
              />
            </Flex>{" "}
            <Flex ml={"-15vh"} flexDir={"column"}>
              <Flex>
                <Text color="#5E5ADB" fontSize={"22px"} fontWeight={"600"}>
                  Create Widget
                </Text>
              </Flex>
              <Flex>
                <Text color="#888891" fontSize={"14px"} fontWeight={"400"}>
                  Manage the glossary of terms of your Database.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex maxH={"4vh"}>
            <InputGroup borderRadius={"10px"} size="sm" mr={6}>
              <Input
                borderRadius={"5px"}
                width={"18vw"}
                placeholder="Reusability Scores"
              />
              <InputRightElement>X</InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>

        <ModalBody mb={"5vh"} height={"fit-content"}>
          <Flex mt={"-10vh"} flexDir={"column"}>
            <Divider />
            <Flex flexDir={"row"} height={"500px"}>
              <Flex
                backgroundImage="url('modalBg.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                mt={"2vh"}
                width={"60%"}
                height={"100%"}
                borderWidth={"1px"}
                justifyContent="center"
                alignItems="center"
                borderRadius={"5px"}
                position="relative"
              >
                <Box position="absolute" top="0" left="0" mt={3} ml={3}>
                  <Text fontWeight={"600"} fontSize={"18px"} color={"#5E5ADB"}>
                    {" "}
                    1 X 1
                  </Text>
                </Box>

                <Box position="absolute" top="0" right="0" mt={3} mr={3}>
                  <Flex
                    bg={"#FFF"}
                    width={"8vw"}
                    height={"4vh"}
                    alignItems={"center"}
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    p={2}
                    border="1px solid #E1E1E1 "
                  >
                    <Box
                      height={"2.5vh"}
                      bg="rgba(237, 237, 237, 0.2)"
                      border="1px solid #E1E1E1"
                      width={"3vw"}
                      //   ml={1}
                    >
                      {" "}
                      <Text
                        fontWeight={"400"}
                        fontSize={"13px"}
                        color={"rgba(123, 123, 123, 1)"}
                      >
                        100%
                      </Text>
                    </Box>
                    <Image src="zoom-in.svg" /> <Image src="divider.svg" />{" "}
                    <Image src="zoom-out.svg" />
                  </Flex>
                </Box>

                <Box
                  position="absolute"
                  bottom="0"
                  textAlign="center"
                  width="100%"
                >
                  <Circle
                    color="rgba(40, 40, 40, 1)"
                    selectedColor={backgroundColor}
                    onClick={() => setBackgroundColor("rgba(40, 40, 40, 1)")}
                  />
                  <Circle
                    color="rgba(255, 255, 255, 1) "
                    selectedColor={backgroundColor}
                    onClick={() => setBackgroundColor("#FFF")}
                  />
                  <Circle
                    color="rgba(94, 90, 219, 1)"
                    selectedColor={backgroundColor}
                    onClick={() => setBackgroundColor("rgba(94, 90, 219, 1)")}
                  />
                </Box>

                <Box
                  width="12vw"
                  mb={"2vh"}
                  height="22vh"
                  bg={backgroundColor}
                  textAlign="center"
                  borderWidth={"1px"}
                  borderRadius={"8px"}
                  transition="background-color 0.3s ease"
                  onClick={() => setBackgroundColor("transparent")}
                >
                  <Box
                    mt={2}
                    height={"3vh"}
                    bg={backgroundColor}
                    style={{
                      borderColor:
                        backgroundColor === "#FFF"
                          ? "#E1E1E1"
                          : backgroundColor === "#5E5ADB"
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
                                backgroundColor === "#FFF"
                                  ? "#5E5ADB"
                                  : backgroundColor === "#5E5ADB"
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
                      </Flex>
                      <Flex mr={3} mt={0} p={0}>
                        <BsThreeDots
                          size="3vh"
                          style={{
                            color:
                              backgroundColor === "#FFF"
                                ? "#D9D9D9"
                                : backgroundColor === "#5E5ADB"
                                ? "#EAEAEA"
                                : "#ECECEC",
                            padding: "0",
                          }}
                        />
                      </Flex>
                    </Flex>
                  </Box>
                  <TableWidget bgColor={backgroundColor} data={dataTable} />
                </Box>
              </Flex>
              <Flex
                mt={"2vh"}
                width={"40%"}
                ml={3}
                flexDir={"column"}
                justifyContent={"space-between"}
              >
                <Flex flexDir={"column"}>
                  <Text
                    mb={3}
                    fontSize={"13px"}
                    fontWeight={"500"}
                    color="rgba(43, 43, 43, 0.35)"
                  >
                    COMPONENTS
                  </Text>
                  <Box
                    mb={3}
                    p={3}
                    height={"9vh"}
                    borderRadius={"8px"}
                    borderColor={"rgba(228, 228, 231, 1)"}
                    borderWidth={"1px"}
                    style={{
                      filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25))",
                    }}
                    _hover={{
                      borderColor: "rgba(94, 90, 219, 1)",
                      transition: "0.3s",
                    }}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight={"500"}
                      color="rgba(88, 88, 88, 1)"
                    >
                      Data
                    </Text>
                    <Text
                      fontSize={"12.8px"}
                      fontWeight={"400"}
                      color="rgba(136, 136, 145, 1)"
                    >
                      Random Description
                    </Text>
                  </Box>
                  <Box
                    mb={3}
                    p={3}
                    height={"15vh"}
                    borderRadius={"8px"}
                    borderColor={"rgba(228, 228, 231, 1)"}
                    style={{
                      filter: "drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25))",
                    }}
                    borderWidth={"1px"}
                    _hover={{
                      borderColor: "rgba(94, 90, 219, 1)",
                      transition: "0.3s",
                    }}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight={"500"}
                      color="rgba(88, 88, 88, 1)"
                    >
                      Graph
                    </Text>
                    <Text
                      fontSize={"12.8px"}
                      fontWeight={"400"}
                      color="rgba(136, 136, 145, 1)"
                    >
                      Random Description
                    </Text>
                    <Box mt={1} width={"13vw"} bg={"rgba(244, 244, 245, 1)"}>
                      <Button
                        width={"4vw"}
                        height={"3vh"}
                        bg={"transparent"}
                        mr={1}
                      >
                        <Image src="Complete.svg" />
                      </Button>
                      <Button
                        width={"4vw"}
                        height={"3vh"}
                        bg={"transparent"}
                        mr={1}
                      >
                        <Image src="Complete.svg" />
                      </Button>
                      <Button width={"4vw"} height={"3vh"} bg={"#fff"} mr={1}>
                        <Image src="Complete.svg" />
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    mb={3}
                    p={3}
                    height={"9vh"}
                    borderRadius={"8px"}
                    borderColor={"rgba(228, 228, 231, 1)"}
                    style={{
                      filter: "drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25))",
                    }}
                    borderWidth={"1px"}
                    _hover={{
                      borderColor: "rgba(94, 90, 219, 1)",
                      transition: "0.3s",
                    }}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight={"500"}
                      color="rgba(88, 88, 88, 1)"
                    >
                      Summary
                    </Text>
                    <Text
                      fontSize={"12.8px"}
                      fontWeight={"400"}
                      color="rgba(136, 136, 145, 1)"
                    >
                      Random Description
                    </Text>
                  </Box>
                </Flex>
                <Flex>
                  <Flex width={"20%"}>
                    <Button
                      border="1px solid rgba(224, 223, 248, 1)"
                      bg={"rgba(248, 248, 255, 1)"}
                      width={"100%"}
                    >
                      <Image src="counter-clockwise-clock.svg" />
                    </Button>
                  </Flex>
                  <Flex width={"40%"} ml={2} mr={2}>
                    <Button
                      borderWidth={"1px"}
                      bg="#FFF"
                      borderColor={"rgba(228, 228, 231, 1)"}
                      onClick={onClose}
                      width={"100%"}
                    >
                      <Text color="rgba(159, 159, 159, 1)" fontWeight={"500"}>
                        {" "}
                        Cancel
                      </Text>
                    </Button>
                  </Flex>
                  <Flex width={"40%"}>
                    <Button
                      color="#FFF"
                      bg="rgba(94, 90, 219, 1)"
                      width={"100%"}
                    >
                      Save
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
const Circle: React.FC<{
  color: string;
  selectedColor: string;
  onClick: () => void;
}> = ({ color, selectedColor, onClick }) => {
  return (
    <Box
      as="span"
      display="inline-block"
      width="20px"
      height="20px"
      borderRadius="50%"
      backgroundColor={color}
      marginX="5px"
      cursor="pointer"
      border={color === selectedColor ? "2px solid gray" : undefined}
      onClick={onClick}
    />
  );
};

export default WidgetModal;
