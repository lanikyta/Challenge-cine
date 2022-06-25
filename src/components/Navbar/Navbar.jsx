import './Navbar.css'
import { Heading, Spacer, Flex, Link, Button, Image, LinkBox, LinkOverlay, Box } from '@chakra-ui/react';
import logotmdb from '../../assets/tmdb.svg'
const Navbar = () => {

    return(
        
            <Flex  direction='row' align='center' bgGradient='linear(to-r, red.900, pink.900)' className='navbar'>
                <LinkBox>
                    <LinkOverlay href='https://www.themoviedb.org/' isExternal><Image  ml='3' src={logotmdb} w='30px'/></LinkOverlay>
                </LinkBox>
                <Heading p='2' m='1' fontSize='4vh' color='pink.700'>Movies</Heading>
                <Link fontSize='3vh' href='/' color='pink'>Popular!</Link>
                
                <Spacer></Spacer>
                <Box fontSize='md'>
                    <Link color='white' m='1'>Login</Link>
                    <Button color='gray.700' bgColor='whiteAlpha.500' m='1' size='sm'>Sign Up</Button>
                </Box>
            </Flex>
        
    )
}

export { Navbar }