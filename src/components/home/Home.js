import React from 'react'
import Book from './Book'
import Carousel from "./Carousel"
import About from './About'
import Rooms from './Rooms'
import Service from "./Service"
import Slider from "./Slider"


const Home = () => {
    return (
        <div>
            <Carousel />
            <Book />
            <About />
            <Rooms />
            <Service />
            <Slider />
        </div>
    )
}

export default Home