import React from 'react'
import Book from './Book'
import Carousel from "./Carousel"
import About from './About'
import Rooms from './Rooms'


const Home = () => {
    return (
        <div>
            <Carousel />
            <Book />
            <About />
            <Rooms />
        </div>
    )
}

export default Home