import { Center, Link, Text } from "@chakra-ui/react"
import './Footer.css'
const Footer = () => {
    return(
        <Center className="footer" h='3em' mt='3' bgGradient='linear(to-l, red.900, pink.900)'>
            <Text color='blue.400'>Hecho por{' '}
                <Link color='pink.200' href='https://www.linkedin.com/feed/'>Aylen ♥</Link>
            </Text>
        </Center>
    )
}

export { Footer }