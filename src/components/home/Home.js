import React from 'react'
import Book from './Book'
import Carousel from "./Carousel"
import About from './About'


const Home = () => {
    return (
        <div>
            <Carousel />
            <Book />
            <About />
        </div>
    )
}

export default Home