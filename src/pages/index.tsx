import { Box, Center, Container, Heading, HStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Icon = () => (
  <svg width="24px" height="24px" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>oniku</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="oniku" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="Rectangle-2" fill="#D8D8D8" transform="translate(161.388348, 165.388348) rotate(-45.000000) translate(-161.388348, -165.388348) " x="118.388348" y="83.3883476" width="86" height="164" rx="43"></rect>
        <ellipse id="Oval" fill="#DC7C34" transform="translate(249.989899, 253.989899) rotate(45.000000) translate(-249.989899, -253.989899) " cx="249.989899" cy="253.989899" rx="151" ry="129"></ellipse>
        <ellipse id="Oval-2" fill="#F4A047" transform="translate(324.237590, 322.237590) rotate(-45.000000) translate(-324.237590, -322.237590) " cx="324.23759" cy="322.23759" rx="97.5" ry="48.5"></ellipse>
        <ellipse id="Oval-2" fill="#B33D44" transform="translate(325.338095, 323.338095) rotate(-45.000000) translate(-325.338095, -323.338095) " cx="325.338095" cy="323.338095" rx="88" ry="44"></ellipse>
        <circle id="Oval-3" fill="#D8D8D8" cx="131" cy="104" r="30"></circle>
        <circle id="Oval-3" fill="#D8D8D8" cx="103" cy="135" r="30"></circle>
        <path d="M352.504305,314.166648 L352.504305,314.166648 C372.035349,315.439706 388.143467,329.943531 391.451089,349.234513 L392.133658,353.215451 C395.077987,370.387612 383.544051,386.695249 366.37189,389.639578 C364.610885,389.941519 362.827413,390.093308 361.04071,390.093308 L351.472655,390.093308 C331.657392,390.093308 315.593947,374.029863 315.593947,354.2146 C315.593947,353.156349 315.640767,352.098617 315.73427,351.044505 L316.248956,345.242138 C317.888708,326.756227 333.98511,312.959544 352.504305,314.166648 Z" id="Rectangle-2" fill="#D8D8D8" transform="translate(354.093217, 352.093217) rotate(-45.000000) translate(-354.093217, -352.093217) "></path>
        <circle id="Oval-3" fill="#D8D8D8" cx="398" cy="368" r="30"></circle>
        <circle id="Oval-3" fill="#D8D8D8" cx="370" cy="396" r="30"></circle>
    </g>
</svg>
)

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

      <Box border="0.4vh solid" borderColor="brand.100" m="1vh" h="98vh" overflowY="scroll" borderRadius="4px">

        <Container>
          <Center h="94vh">
            <Heading>meatup</Heading>
            <a href="https://twitter.com/hashtag/meatup2019" target="_blank" rel="noreferrer"><Text fontSize="sm" letterSpacing="-1px" ml="2px" display="flex">Any want meat?<Icon/></Text></a>
          </Center>
        </Container>

        <Container>
          <Center h="94vh">
            Contact - <a href="https://twitter.com/ksyunnnn" target="_blank" rel="noreferrer">@ksyunnnn</a>
          </Center>
        </Container>

      </Box>
    </>
  )
}

export default Home
