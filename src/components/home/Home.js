import React from 'react'
import Book from './Book'
import Carousel from "./Carousel"
import About from './About'
import Rooms from './Rooms'
import Service from "./Service"


const Home = () => {
    return (
        <div>
            <Carousel />
            <Book />
            <About />
            <Rooms />
            <Service />
        </div>
    )
}

export default Home