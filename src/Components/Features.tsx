import { HassleFreeIcon, MoneyBackIcon, SubscriptionIcon } from "@/Icons/Icons";
import { Box, HStack, Icon, Image, StackProps, Text } from "@chakra-ui/react";
import React from "react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text fontSize={"18px"} fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box maxW={"1024px"} m="auto" pt="60px" pb="32px">
      <HStack>
        <Feature icon={MoneyBackIcon}>30 days money back Gurantee</Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={SubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
