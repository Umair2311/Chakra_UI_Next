import { HassleFreeIcon, MoneyBackIcon, SubscriptionIcon } from "@/Icons/Icons";
import { Box, HStack, Icon, Image, StackProps, Text } from "@chakra-ui/react";
import React, { ElementType } from "react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px" >
      <Icon as={icon} boxSize="48px" />
      <Text
        width={{sm:"100%",lg:"220px"}}
        textAlign="left"
        fontSize={"18px"}
        fontWeight="700"
      >
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box maxW={{sm:"90%",lg:"1024px"}} m="auto" pt={{sm:"38px",lg:"60px"}} pb="32px">
      <HStack px={{sm:"0px",lg:"48px"}} spacing={{sm:"0px",lg:"20px"}} alignItems={{sm:"flex-start",lg:"center"}} flexDirection={{sm:"column", lg:"row"}}>
        <Feature mb={{sm:"25px !important",lg:"0px"}} icon={MoneyBackIcon}>30 days money back Gurantee</Feature>
        <Feature mb={{sm:"25px !important",lg:"0px"}} icon={HassleFreeIcon}>
          No setup fees 100% hassle-free
        </Feature>
        <Feature mb={{sm:"25px !important",lg:"0px"}} icon={SubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
