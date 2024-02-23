import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function SummaryWidget() {
  return (
    <Flex>
      <Text fontSize={"12px"} lineHeight={"18px"} p={4}>
        Based on the provided data, the most effective hour of the day to send
        an email across all stores for all time, with the highest engagement
        after opening, is at 15:00(3 PM), with a total of 5041 emails opened.
        The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785
        emails opened respectively. There is a noticeable drop in{" "}
      </Text>
    </Flex>
  );
}
