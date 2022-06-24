import './Navbar.css'
import { Heading, Spacer, Flex, Link, Button, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import logotmdb from '../../assets/tmdb.svg'
const Navbar = () => {

    return(
        <Flex direction='column'  alignContent='center' bgGradient='linear(to-r, red.900, pink.900)' className='navbar'>
            <Flex  direction='row' align='center' >
                <LinkBox>
                    <LinkOverlay href='https://www.themoviedb.org/' isExternal><Image  ml='3' src={logotmdb} w='30px'/></LinkOverlay>
                    
                </LinkBox>
                <Heading p='2' m='1' color='pink.700'>Movies</Heading>
                <Link fontSize='2xl' href='/' color='pink'>Popular!</Link>
                
                <Spacer></Spacer>
                <Link color='white' p='4'>Login</Link>
                <Button color='gray.700' bgColor='whiteAlpha.500' m='3'>Sign Up</Button>
            </Flex>
        </Flex>
    )
}

export { Navbar }