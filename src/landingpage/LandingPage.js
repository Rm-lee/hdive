import React from 'react'
import Carousel from '../carousel/Carousel'
import HighlightCarousel from './HighlightCarousel'
import data from '../data/catalog.json'
import './landing.css'
function LandingPage() {
    return (
        <div className="landing-main">
            <HighlightCarousel content={data} />
        </div>
    )
}
export default LandingPage
