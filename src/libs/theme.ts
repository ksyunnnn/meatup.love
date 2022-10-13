import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                color: 'gray.900',
            },
            a: {
                opacity: 0.96,
                _hover: {
                    opacity: 1,
                    textDecoration: 'underline',
                },
            },
        },
    },
    fonts: {
        heading: `'Lato', sans-serif`,
        body: `'Lato', sans-serif`,
    },
    colors: {
        brand: {
            100: "#b33c44",
            90: "#DC7C34"
        }
    }
})