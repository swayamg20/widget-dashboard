import React from "react";
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const WidgetModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal size={"5xl"} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        overflow={"hidden"}
        height={"fit-content"}
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

        <ModalBody mb={"5vh"}>
          <Flex mt={"-10vh"} flexDir={"column"}>
            <Divider />
            <Flex flexDir={"row"} height={"40vh"}>
              <Flex mt={"2vh"} width={"60%"} borderWidth={"1px"}>
                BG
              </Flex>
              <Flex mt={"2vh"} width={"40%"} ml={3} flexDir={"column"}>
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
                    <Button width={"4vw"} height={"3vh"} bg={"transparent"} mr={1}>
                      <Image src="Complete.svg" />
                    </Button>
                    <Button width={"4vw"} height={"3vh"} bg={"transparent"} mr={1}>
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
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WidgetModal;
