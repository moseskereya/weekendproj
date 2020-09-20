import React, { Component } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] }
    }

    componentDidMount() {
        axios.get("https://mosesapi77.azurewebsites.net/recipes")
            .then(response => {
                this.setState({ recipes: response.data})
            })
            .catch(error => {
            console.log(error, "There might no any data in your database")
        })
    }

    render() { 
        const mydata = this.state.recipes
        if (mydata === undefined || mydata.length === 0) {
            return (
                <dvi className="loading">
                     <div className="spin"></div>
                 </dvi>
            )
        } else {
             return ( 
              <div className="items">
                {mydata.map(recipe => (
                    <div key={recipe.name} className="item">
                            <img src={recipe.imgUrl} alt="recipe" />
                        <div className="contents">
                            <div className="content1">
                                <h4>{recipe.name}</h4>
                               <span>{recipe.price}Tsh</span>
                            </div>
                            <div className="content2">
                                <p>{recipe.description}</p>
                                <a href={recipe.link}>Read More</a>
                            </div>
                        </div>
                        
                    </div>
                ))}
             </div>       
         );
        }
  
    }
}
 
export default Recipe;