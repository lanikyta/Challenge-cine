import { Button, Image, Text } from "@chakra-ui/react";
import starfull from '../../assets/starfull.png'
import starempty from '../../assets/starempty.png'

const Rating = ({number, handleClickRating, rating}) => {

    return(
        <Button size='xs' colorScheme='teal' isDisabled={ rating === number } onClick={()=>handleClickRating(number)}>
            {number===0 ? <Text color='white'>ALL</Text> : <Image w='20px' src={number <= rating ? starfull : starempty} alt={number}/>}
        </Button>
    )
}

export { Rating }