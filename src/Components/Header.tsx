import { Box, Heading, Text } from "@chakra-ui/react"

function Header() {
  return (
    <Box as="section" pb="112px">
    <Box background="#6B46C1" color="white" textAlign="center"  pt={{ sm:"40px", lg:"88px" }} pb={{sm:"170px",lg:"198px"}}  >
        <Heading fontWeight={800} fontSize={{sm:"30px",md:"48px"}} mb={4} textAlign={{md:"center",sm:"left"}} p={"0px 23px"} >Simple pricing for your business</Heading>
        <Text fontSize={{sm:"18px",md:"24px"}} fontWeight={500} textAlign={{md:"center",sm:"left"}} p={"0px 23px"}>Plans that are carefully crafted to suit your business.</Text>
    </Box>
    </Box>
  )
}

export default Header