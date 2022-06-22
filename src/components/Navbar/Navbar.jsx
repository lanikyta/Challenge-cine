import { Box, Heading, Text, Spacer, Flex, Link, Button,  useColorMode } from '@chakra-ui/react';
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    
    return(
        <Flex direction='column'  alignContent='center'>
            <Flex  direction='row' align='center' >
                <Heading as='button' onClick={toggleColorMode} p='4' m='1' color='red.700'>Movies</Heading>
                <Spacer></Spacer>
                <Link color='white' p='4'>Login</Link>
                <Button color='gray.700' bgColor='whiteAlpha.500' m='3'>Sign Up</Button>
            </Flex>
            <Box  m='10' display='block' >
                <Heading fontSize='6xl' m='2'>Movie night?</Heading>
                <Text fontSize='2xl'>Find the most popular movies.. or search your favorite!</Text>
            </Box>
        </Flex>
    )
}

export { Navbar }