"use client";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Banner from '@/Components/Banner';
import Notes from '@/Components/Notes';


export default function Home() {
  return (
    <ChakraProvider>
      <Banner />
      <Notes />
    </ChakraProvider>
  )
}
