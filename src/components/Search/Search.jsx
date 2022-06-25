import { URL_API, API_KEY } from "../../Constants/Constants"
import { useState, useEffect } from "react";
import { Input, InputGroup, InputRightElement, Box, Flex, HStack, IconButton, Heading, Text, ScaleFade, Button, } from "@chakra-ui/react";
import { SearchIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { PopularMovies } from "../PopularMovies/PopularMovies";
import { CardMovie } from "../CardMovie/CardMovie";
import { Rating } from "../Rating/Rating";

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [resultSearch, setResultSearch] = useState([])
    const stars = [0, 2, 4, 6, 8, 10]
    const [rating, setRating] =useState(0)
    const [page, setPage] = useState(1)
    const [ isOpen, setIsOpen ] = useState(false)
    useEffect(() => {
      if(inputValue !== ''){
        const getSearch= async ()=>{
        const response = await fetch(
          `${URL_API}/search/movie?api_key=${API_KEY}&languaje=en-ES&query=${inputValue}&page=1&include_adult=false`
        );
        const moviesData = await response.json()
        setResultSearch(moviesData.results)
      }
        getSearch()
        setIsOpen(false)
      }
    }, [inputValue]);
    
    const handleClickRating = (num)=>{
      setRating(num)
      setPage(1)
    }
    const handlePage =(op)=>{
      if(op==='+'){
        setPage(page+1)
        window.scrollTo({top: 0})
      } else {
        setPage(page-1)
      }
    }
    const handleInput=(e)=>{
        setInputValue(e.target.value)
        setPage(1)
    }
    const ScaleFadeRating=()=> {
      return (
        <>
          <Button colorScheme='teal' onClick={()=>{setIsOpen(!isOpen)
            setInputValue('')}}>Rating Filter</Button>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <HStack p='2' bgColor='gray.400' w='fit-content' borderRadius='10px' h='2em'>
              {stars.map(number=><Rating key={number} number={number} handleClickRating={handleClickRating} rating={rating}/>)}
            </HStack>
          </ScaleFade>
        </>
      )
    }
    const render=()=>{
      if(inputValue !== ''){ 
          return <>
            <Box>       
              <Flex wrap='wrap' w='70%' justify='space-around' mx='auto' my='2'>
                {resultSearch.map(item=><CardMovie key={item.id} item={item} stars={stars}/>)}

              </Flex>
            </Box>
          </>} else return <PopularMovies rating={rating} page={page}/> 
    }

    return(
      <> 
        <Box  m='10' display='block' >
          <Heading fontSize='6xl' m='2'>Movie night?</Heading>
          <Text fontSize='2xl'>Find the most popular movies.. or search for your favorite!</Text>
        </Box>
        <Flex direction='column' align='center' justify='center' wrap='wrap' w='50%' mx='auto'>
          <InputGroup w='60%' mx='3' my='10' borderColor='red' > 
            <Input focusBorderColor='pink.400' placeholder='Search' _placeholder={{ color: 'inherit' }} value={inputValue} onChange={handleInput} />
            <InputRightElement children={<IconButton variant='ghost' pointerEvents='none' aria-label='Search button' icon={<SearchIcon/>}/>}/>
          </InputGroup>
          <Text>Or Filter by rating!</Text>
          {ScaleFadeRating()}
        </Flex>
        {render()}
        <HStack spacing='24px' mx='auto' w='14em' pb='4em'>
          <IconButton icon={<ArrowLeftIcon/>} colorScheme='cyan' variant='outline' isDisabled={page===1} onClick={()=>handlePage('-')}/>
          <Text color='white'>{page}</Text>set
          <IconButton icon={<ArrowRightIcon/>} colorScheme='cyan' variant='outline' onClick={()=>handlePage('+')}/>
        </HStack>
      </>
    )
}

export { Search }