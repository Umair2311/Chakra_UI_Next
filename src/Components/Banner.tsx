import { Box, Heading, Text } from "@chakra-ui/react"

function Banner() {
  return (
    <Box background="#6B46C1" color="white" textAlign="center" pt={88} pb={198}  >
        <Heading fontWeight={800} fontSize={48} mb={4}>Simple pricing for your business</Heading>
        <Text fontSize={24} fontWeight={500}>Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}

export default Banner