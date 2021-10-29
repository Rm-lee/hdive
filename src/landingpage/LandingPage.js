import React from 'react'
import ListCarousel from '../carousel/ListCarousel'
import HighlightCarousel from './HighlightCarousel'
import data from '../data/catalog.json'
import './landing.css'
function LandingPage() {
    return (
        <div className="landing-main">
            <HighlightCarousel content={data} />
            
            {data.TitleRows.map(content => (
                <div>
                    <h2 style={{color:"#969696"}}>{content.Name}</h2>
                      <ListCarousel content={content.Titles} slidesToShow={5} slidesToScroll={5} />

                </div>
            ))}
        </div>
    )
}
export default LandingPage
