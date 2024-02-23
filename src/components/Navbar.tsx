import {
  Box,
  Flex,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import WidgetModal from "./WidgetModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Flex
        p={5}
        pb={2}
        pt={2}
        justifyContent={"space-between"}
        borderBottom={"1px"}
        borderColor={"#EAECF0"}
        alignItems={"center"}
      >
        <Flex>
          <Image src="home.svg" />

          <Tag
            color="#8D8D8D"
            borderWidth={"1px"}
            borderColor={"#F3F2FC"}
            borderRadius={"10px"}
            p={3}
            pl={4}
            w={"max-content"}
            ml={2}
            mr={2}
            pr={6}
            bg="#fff"
          >
            <TagLabel>Overview</TagLabel>
          </Tag>
          <Tag
            color="#5E5ADB"
            borderWidth={"1px"}
            borderColor={"#E1DFF8"}
            borderRadius={"10px"}
            p={3}
            pl={3}
            bg="#F7F6FD"
            w={"max-content"}
            mr={2}
            pr={6}
            alignItems={"center"}
          >
            <TagLabel>Customers</TagLabel>
            <TagRightIcon>
              <RxCross2 size="30px" />{" "}
            </TagRightIcon>
          </Tag>
          <Tag
            color="#8D8D8D"
            bg="#fff"
            borderWidth={"1px"}
            borderColor={"#F3F2FC"}
            borderRadius={"10px"}
            p={3}
            pl={4}
            w={"max-content"}
            mr={2}
            pr={6}
          >
            Products
          </Tag>
          <Tag
            color="#8D8D8D"
            bg="#fff"
            borderWidth={"1px"}
            borderColor={"#F3F2FC"}
            borderRadius={"10px"}
            p={3}
            pl={4}
            pr={6}
            w={"max-content"}
            mr={2}
          >
            Settings
          </Tag>
          <Tag
            color="#5E5ADB"
            borderWidth={"1px"}
            borderColor={"#E1DFF8"}
            bg="#F7F6FD"
            borderRadius={"10px"}
            p={3}
            // pl={4}
            // pr={6}
            w={"max-content"}
            mr={2}
          >
            <GoPlus size="20px" />
          </Tag>
        </Flex>
        <Flex>
          <Tag
            color="#5E5ADB"
            borderWidth={"1px"}
            borderColor={"#E1DFF8"}
            borderRadius={"10px"}
            p={3}
            pl={3}
            bg="#F7F6FD"
            w={"10vw"}
            mr={"2vw"}
            alignItems={"center"}
            onClick={handleOpen}
          >
            <TagLeftIcon as={Image} src="Plus.svg" />
            <TagLabel>Add Widget</TagLabel>
            <WidgetModal isOpen={isOpen} onClose={handleClose} />
          </Tag>
          <Image mr={"2vw"} src="setting.svg" />
        </Flex>
      </Flex>
    </>
  );
}
