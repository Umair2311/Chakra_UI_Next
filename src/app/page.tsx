"use client";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Features from '@/Components/Features';
import Header from '@/Components/Header';


export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Features />
    </ChakraProvider>
  )
}
