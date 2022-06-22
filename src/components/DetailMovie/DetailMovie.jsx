import { Box, Heading, HStack, Image, ListItem, Tag, Text, UnorderedList } from "@chakra-ui/react"
import bgImage from '../../assets/bg1.jpg';

const DetailMovie = () => {
    return(
        <Box backgroundImage={`url(${bgImage})`} backgroundSize='100%'>
            <HStack spacing={8} direction='row' w='70%' m='3em auto' p='3'>
                <Box w='30%'  boxSize='sm' m='1em'>
                    <Image src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2016/12/harry-potter-piedra-filosofal.jpg?itok=gIl44_Ir' alt='' maxH='96'/>
                </Box>
                <Box w='70%' textAlign='left'>
                    <HStack><Heading as='h1' size='2xl'>Titulo <Tag>2014</Tag></Heading></HStack>
                    <Heading as='h2' size='md'>Description</Heading>
                    <Text> Harry Potter y la piedra filosofal bla bla Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sapiente voluptatum laborum fuga ipsam aspernatur, soluta perspiciatis facilis necessitatibus. Exercitationem ullam ea non soluta. Repellat sit neque perferendis non aut?</Text>
                    <Heading as='h2' size='md'>Generos</Heading>
                    <UnorderedList>
                        <ListItem>Hola</ListItem>
                        <ListItem>asdasd</ListItem>
                    </UnorderedList>
                </Box>
            </HStack>
        </Box>
    )
}

export { DetailMovie }