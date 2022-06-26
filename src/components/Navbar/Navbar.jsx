import './Navbar.css'
import { Heading, IconButton, Spacer, Flex, Link, Button, Image, LinkBox, LinkOverlay, Box, Menu, MenuButton, MenuList, MenuItem, useMediaQuery } from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons'
import logotmdb from '../../assets/tmdb.svg'
const Navbar = () => {
    const [menu] = useMediaQuery('(min-width: 460px)')
    
return(
    <>
        <Flex  direction='row' align='center' bgGradient='linear(to-r, red.900, pink.900)' className='navbar'>
            {menu ?
                <>
                    <LinkBox>
                        <LinkOverlay href='https://www.themoviedb.org/' isExternal><Image  ml='3' src={logotmdb} w='30px'/></LinkOverlay>
                    </LinkBox>
                    <Heading p='2' m='1' fontSize='2xl' color='pink.700'>Movies</Heading>
                    <Link fontSize='xl' href='/' color='pink'>Popular!</Link>
                        
                    <Spacer></Spacer>
                    <Box fontSize='md'>
                        <Link color='white' m='1'>Login</Link>
                        <Button color='gray.700' bgColor='whiteAlpha.500' m='1' size='sm'>Sign Up</Button>
                    </Box>    
                </>
                : 
                <Flex m='1' direction='row' alignItems='center' w='100%'>
                    <Menu >
                        <MenuButton
                            colorScheme='red'
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem >
                            Sign Up
                            </MenuItem>
                            <MenuItem >
                            Log in
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Link mx='2' fontSize='xl' href='/' color='pink'>Popular!</Link>
                    <Spacer></Spacer>
                    <LinkBox>
                        <LinkOverlay href='https://www.themoviedb.org/' isExternal><Image  ml='3' src={logotmdb} w='30px'/></LinkOverlay>
                    </LinkBox>
                </Flex>
            }
        </Flex>
    </>
)
}

export { Navbar }