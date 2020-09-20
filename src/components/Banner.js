import React, { Component } from 'react';
import axios from 'axios'
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { bannerimg: ''}
    }
    componentDidMount() {
         axios.get("https://mosesapi77.azurewebsites.net/recipes")
             .then(response => {
                this.setState({bannerimg: response.data[Math.floor(Math.random() * response.data.length -1)]})
                console.log(this.state.bannerimg)
            })
            .catch(error => {
            console.log(error)
        })
    }


    render() { 
        const myimg = this.state.bannerimg;
        return ( 
            <div className="banner"
                style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(${myimg.imgUrl})`
                }}>
                <section className="banner-item">
                     <h3>{myimg.name}</h3>
                </section>
            </div>
         );
    }
}
 
export default Banner;
