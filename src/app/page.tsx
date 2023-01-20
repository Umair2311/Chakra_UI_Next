"use client";
import { ChakraProvider } from '@chakra-ui/react'
import Features from '@/Components/Features';
import Header from '@/Components/Header';
import Pricing from '@/Components/Pricing';
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({
  fonts: {
    body: `'Inter'`,
  },
  breakpoints
})


export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}
