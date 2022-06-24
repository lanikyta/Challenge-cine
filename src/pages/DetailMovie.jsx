import { Box, Heading, HStack, Image, ListItem, Stack, Tag, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { API_KEY, URL_API } from "../Constants/Constants"

const DetailMovie = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getMovie= async ()=>{
        const response = await fetch(`${URL_API}/movie/${movieId}?api_key=${API_KEY}&languaje=en-ES`)
        const movieData = await response.json(); 
        setMovie(movieData)
        setIsLoading(false)
      }
        getMovie()
      }, [movieId])
      
   
      if(isLoading){
        return <Text>load</Text>
      }
    return(
        <VStack backgroundImage={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`} backgroundSize='cover' backgroundAttachment='fixed' backgroundPosition='center' minH='92vh' color='gray.400'>
            <Stack direction={['column', null, null, null, 'row']} w='70%' my='3em' mx='auto' p='3' alignItems='center'>
                <Box w='30%'  boxSize='sm' m='1em' >
                    <Image className='box' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} maxH='96' mx='auto'/>
                </Box>
                <Box className='box' w='70%' textAlign='left' backgroundColor='rgba(82, 11, 22, 0.644)' px='2em'>
                    <HStack><Heading  fontSize='45px'>{movie.title} <Tag fontFamily='body'>{movie.release_date.slice(0, -6)}</Tag></Heading></HStack>
                    <Text fontSize='2xl' m='4'>{movie.overview}</Text>
                    
                    <Heading fontFamily='body' as='h2' size='md' m='4'>Generos</Heading>
                    <UnorderedList>
                        {movie.genres.map(elem=><ListItem key={elem.id}>{elem.name}</ListItem>)}
                    </UnorderedList>
                </Box>
            </Stack>
        </VStack>
    )
}

export { DetailMovie }