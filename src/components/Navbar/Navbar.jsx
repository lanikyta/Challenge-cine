import './Navbar.css';
import bgImage from '../../assets/bg1.jpg';
import { Box, Heading, Text, Spacer, Flex, Link, Button, InputRightElement, Input, InputGroup, useColorMode, useColorModeValue } from '@chakra-ui/react';
const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    return(
        <Flex direction='column' h='30em' backgroundImage={`url(${bgImage})`} alignContent='center'>
            <Flex  direction='row' align='center' >
                <Heading as='Button' onClick={toggleColorMode} p='4' m='1' color='red.700'>Movies</Heading>
                <Text color='white' p='4'>Discover</Text>
                <Spacer></Spacer>
                <Link color='white' p='4'>Login</Link>
                <Button color='gray.700' bgColor='whiteAlpha.500' m='3'>Sign Up</Button>
            </Flex>
            <Box m='10' display='block' >
                <Heading>Your favourite movie. Explained.</Heading>
                <Text>Figure out what happened. Then find out why.</Text>
                <InputGroup w='30%' mx='auto' my='10' >
                    <Input placeholder='Búsqueda'></Input>
                    <InputRightElement><Button >O</Button></InputRightElement>
                </InputGroup>
            </Box>
        </Flex>
    )
}

export { Navbar }