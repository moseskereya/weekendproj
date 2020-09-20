import React from 'react'
import Nav from "./Nav"
import Banner from './Banner'
import Recipe from "./Recipe"
import About from '../About'
import Footer from '../Footer'

function Home() {
    return (
        <div>
             <Nav />
             <Banner />
             <About/>
            <Recipe />
            <Footer/>
        </div>
    )
}

export default Home
