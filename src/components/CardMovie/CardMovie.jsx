
import { Image,  Text, Link, VStack, HStack } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
const CardMovie = ({item}) => {
    const { title, vote_average, poster_path, id } = item
    let stars = [ 2, 4, 6, 8, 10]
    return(
        <>
        <VStack h='320' w='60' m='5' justify='space-between'>
            <Link href={`/details/${id}`} ><Image src={`https://image.tmdb.org/t/p/original${poster_path}`}  alt={title} h='60'/></Link>
            <VStack justify='space-between' color='blue.300'><Text as='h1' size='2'>{title}</Text>
            <HStack >{stars.map(elem=><StarIcon key={elem} color={elem <= vote_average+2 ? 'yellow' : 'gray'}/>)}
            </HStack></VStack>   
        </VStack>
        </>
    )
}

export { CardMovie }