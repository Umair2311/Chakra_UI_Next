"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
    <Flex>Hello Chakra</Flex>
    </ChakraProvider>
  )
}
