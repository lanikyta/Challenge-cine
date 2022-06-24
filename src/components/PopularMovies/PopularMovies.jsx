import { URL_API, API_KEY } from "../../Constants/Constants"
import { useState, useEffect } from "react";
import { CardMovie } from "../CardMovie/CardMovie";
import { Box, Flex, Heading, } from "@chakra-ui/react";


const PopularMovies = ({rating, page }) => {
  
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const getDatos= async ()=>{
    const response = await fetch(`${URL_API}/discover/movie?api_key=${API_KEY}&languaje=en-ES&sort_by=popularity.desc${rating !== 0 ? `&vote_average.gte=${rating-2}&vote_average.lte=${rating}&vote_count.gte=30` : ''}&page=${page}`)
    const moviesData = await response.json();
    setMovies(moviesData.results)
  }  
    getDatos()
    }, [rating, page])

  
    
    return(
      <Box >       
        <Heading fontFamily='heading' size='xl' m='2'>Most Popular Movies</Heading>
        <Flex wrap='wrap' w='70%' align='stretch' justify='space-around' my='2' mx='auto'>
          {movies.map(item=><CardMovie key={item.id} item={item}/>)}

        </Flex>
      </Box>
    )
}

export { PopularMovies }