import React, { Component } from 'react';
import axios from 'axios'
class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = { images: [] }
    }

    componentDidMount() {
       const API_KEY = 'fa1875db1f08a7d5f9887db721a0a94e'
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=2`)
            .then(reponse => {
            console.log(reponse.data)
            })
            .catch(eror => {
            console.log(eror)
        })
    }

    render() { 
        return ( 
            <div>
                 hello moses
            </div>
         );
    }
}
 
export default Photos;