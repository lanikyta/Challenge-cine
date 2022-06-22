import { URL_API, API_KEY } from "../Constants/Constants"
import { useState, useEffect } from "react";
import { Input, InputGroup, InputRightElement, Button, Box, Flex, Image, HStack, Link } from "@chakra-ui/react";
import { PopularMovies } from "../PopularMovies/PopularMovies";
import { CardMovie } from "../CardMovie/CardMovie";
import { Rating } from "../Rating/Rating";

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [resultSearch, setResultSearch] = useState([])
    let stars = [0, 2, 4, 6, 8, 10]
    const [rating, setRating] =useState(0)
    useEffect(() => {
      inputValue !== '' && getSearch()
    }, [inputValue]);
    
    const handleClickRating = (num)=>{
      setRating(num)
    }
    const getSearch= async ()=>{
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API_KEY}&languaje=en-ES&query=${inputValue}&page=1&include_adult=false`
      );
      
      const moviesData = await response.json()
      setResultSearch(moviesData.results)
    }
    
    const handleInput=(e)=>{
        setInputValue(e.target.value)
      }
    const render=()=>{
      if(inputValue !== ''){ 
          return <Box>       
            <Flex wrap='wrap' w='70%' justify='space-around' mx='auto' my='2'>
              {resultSearch.map(item=><CardMovie key={item.id} item={item}/>)}

            </Flex>
          </Box>} else return <PopularMovies rating={rating}/> 
    }
    return(
      <> 
        <Flex direction='row' align='center' justify='center' wrap='wrap' w='50%' mx='auto'>
          <InputGroup w='60%' mx='3' my='10'> 
            <Input placeholder='Búsqueda' value={inputValue} onChange={handleInput}></Input>
            <InputRightElement><Button >O</Button></InputRightElement>
          </InputGroup>
          <HStack p='2' bgColor='gray.400' w='fit-content' borderRadius='10px' h='2em'>
            {stars.map(number=><Rating key={number} number={number} handleClickRating={handleClickRating} rating={rating}/>)}
          </HStack>
        </Flex>
        {render()}
      </>
    )
}

export { Search }