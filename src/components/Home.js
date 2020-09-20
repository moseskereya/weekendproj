import React from 'react'
import Nav from "./Nav"
import Banner from './Banner'
import Recipe from "./Recipe"
import About from '../About'

function Home() {
    return (
        <div>
             <Nav />
             <Banner />
             <About/>
             <Recipe/>
        </div>
    )
}

export default Home
