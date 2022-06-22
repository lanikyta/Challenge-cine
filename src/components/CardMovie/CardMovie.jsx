
import { Heading, Image,  Text, Link, VStack } from "@chakra-ui/react"
import { DetailMovie } from "../DetailMovie/DetailMovie"
const CardMovie = ({item}) => {
    const { title, vote_average, poster_path, id } = item
    return(
        <>
        <VStack h='320' w='60' m='1' >
            <Link href={`/movie/${id}`} as='button' onClick={DetailMovie}><Image src={`https://image.tmdb.org/t/p/original${poster_path}`}  alt={title} h='60'/></Link>
            <Heading as='h1' size='2'>{title}</Heading>
            <Text size='1'>Rating</Text>
        </VStack>
        </>
    )
}

export { CardMovie }