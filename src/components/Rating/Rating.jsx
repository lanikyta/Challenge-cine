import { Button, Image, Link, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";
import starfull from '../../assets/starfull.png'
import starempty from '../../assets/starempty.png'

const Rating = ({number, handleClickRating, rating}) => {

    return(
        <Button size='xs' colorScheme='purple' isDisabled={ rating === number } onClick={()=>handleClickRating(number)}>
            {number===0 ? <Tag colorScheme='red'>O</Tag> : <Image w='20px' src={number <= rating ? starfull : starempty} alt={number}/>}
        </Button>
    )
}

export { Rating }