import React, { Component } from 'react'
import NewsItem from './NewsItem'


// props can't be change if we want too change props then we need to create a state over the props the we can change the state, so state can be change and props are can be read only.

export class News extends Component {

    constructor() {
        super();
        this.state = {
            // articles need a empty array to get stored
            articles:[],
            loading: false
        }
    }
    // react lifecycle
    // componentDidMount will run after the render function run
    // async function can wait in his own function body to get resolve some promises
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2691ca327b3040bb9c679811844591fe"
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        let data= await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // it means we want to set the data of the stae article by parsedData article
        this.setState({articles: parsedData.articles});
    }
    render() {

        return (
            <div className='container my-3' >
                <h2>NewsMonkey Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            // col-md-4 means it will take 4 columns in medium devices out of 12 grids given by bootstrap 
                            <div className="col-md-4" key={element.url} >
                                {/* slice(0,44) means it will shoe the title from 0th character to the 44th character only and same goes for the description as well */}
                                {/* !element.title means if not of element.title */}
                                {/* <NewsItem title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl={element.url} /> */}

                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default News
