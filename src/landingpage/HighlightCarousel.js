import React from 'react'
import Carousel from '../carousel/Carousel'
 function HighlightCarousel(props) {
     const highLightReel = props.content.TitleRows[0].Titles.slice(0,4)
    return (
        <Carousel main={true} content={highLightReel} slidesToShow={1} slidesToScroll={1} />
    )
}
export default HighlightCarousel