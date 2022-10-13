import { Center, Container, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>meatup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b33c44" />
        <meta name="msapplication-TileColor" content="#b33c44" />
        <meta name="theme-color" content="#b33c44"></meta>
      </Head>

      <Container>
        <Center h="7xl">
          <Heading>meatup</Heading>
        </Center>
      </Container>
    </>
  )
}

export default Home
