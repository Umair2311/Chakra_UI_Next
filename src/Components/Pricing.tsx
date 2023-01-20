import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { PricingIcon } from "@/Icons/Icons";

function ListItems(props: StackProps) {
  const { children, ...rest } = props;

  const listData = [
    "International calling and messaging API",
    "Additional phone numbers",
    "Automated messages via Zapier",
    "24/7 support and consulting",
  ];
  return (
    <>
      {listData.map((data, index) => {
        return (
          <HStack key={"Price" + index} as="li" {...rest} spacing="20px">
            <Icon as={PricingIcon} w="22px" h="22px" />
            <Text>{data}</Text>
          </HStack>
        );
      })}
    </>
  );
}

function Pricing() {
  return (
    <Box
      maxW={{ sm: "90%", lg: "994px" }}
      m="auto"
      mt="-256px"
      borderRadius={"12px"}
      overflow="hidden"
      background={"white"}
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    >
      <Flex flexDirection={{ sm: "column", md: "row" }}>
        <Box
          bg="rgba(101, 44, 211, 0.1)"
          textAlign={"center"}
          p={{ sm: "20px", lg: "60px" }}
        >
          <Text fontSize={"24px"} fontWeight="800">
            Premium PRO
          </Text>
          <Heading
            fontSize={{ sm: "48px", lg: "60px" }}
            fontWeight="800"
            mt={"16px"}
          >
            $329
          </Heading>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            color={"#171923"}
            mt="8px"
            mb="24px"
          >
            billed just once
          </Text>
          <Button
            colorScheme={"purple"}
            size="lg"
            w="282px"
            textTransform="capitalize"
          >
            get started
          </Button>
        </Box>
        <Box
          p={{ sm: "20px", lg: "60px" }}
          fontSize={"18px"}
          fontWeight="400"
          color={"#2D3748"}
          bg="white"
          fontFamily={"Inter"}
        >
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing={"20px"} pt="24px">
            <ListItems />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Pricing;
