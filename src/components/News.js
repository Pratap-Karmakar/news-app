import React, { Component } from 'react'
import NewsItem from './NewsItem'


// props can't be change if we want too change props then we need to create a state over the props the we can change the state, so state can be change and props are can be read only.

export class News extends Component {

    constructor() {
        super();
        this.state = {
            // articles need a empty array to get stored
            articles: [],
            loading: false,
            // this will be the initial page
            page: 1
        }
    }
    // react lifecycle
    // componentDidMount will run after the render function run
    // async function can wait in his own function body to get resolve some promises
    async componentDidMount() {
        // this link is the page 1
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2691ca327b3040bb9c679811844591fe&page=1&pageSize=20"
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // it means we want to set the data of the state article by parsedData article means we want the parsed articles by the news api app in our articles
        // and totalResults means the total number of the articles parsed by the news api app
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }




    handleNextClick = async () => {
        console.log('next')

        // Math.ceil means it will return the neext heighst number like if the value is 4.6 then Math.ceil will pass number 5 as the value
        // we can easily get the number of pages to show the total articles, that's why we divided the totalResults by 20 which is the number of articles of per page we want 


        // this condition means, 
        // (this.state.page + 1) => means we want to increase the page number by one to view the next articles
        // (Math.ceil(this.state.totalResults / 20)) => means we want to know the total page numbers to view all the articles 
        // now the condition is we can't generate new pages if the  (Math.ceil(this.state.totalResults / 20))) this is exceding, means (Math.ceil(this.state.totalResults / 20))) =>  if by this function we get the page number 3 so we can't generate page numbers more than 3 (3>=3 )
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }

        else {

            // now this page will be updated by plus 1, and pageSize=20 means we want 20 articles per page
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page + 1}&pageSize=20`
            // here we are using fetch api, fetch api will take url as an argument and return a promise
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                // it means we want to set the data of the stae article by parsedData article
                articles: parsedData.articles
            })

        }
    }



    // as we are using class based components thats why we don't need to use const or let
    handlePreviousClick = async () => {
        console.log("prev")
        // now this page will be updated by minus 1
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page - 1}&pageSize=20`
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            // it means we want to set the data of the stae article by parsedData article
            articles: parsedData.articles
        })
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

                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}
                    <div className="container d-flex justify-content-between border-top border-dark">
                        {/* &larr; will show the left arrow (search previous on google and you will get it) and same for &rarr; */}
                        {/* as we are using class based components thats why we need to use 
                        this.handlePreviousClick */}
                        {/* this.state.page<=1 means if the page cont is not more than 1 then the previous whitch will be disabled */}
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-3" onClick={this.handlePreviousClick}>&larr; Previous</button>

                        <button type="button" className="btn btn-dark my-3" onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>

                </div>
            </div>
        )
    }
}

export default News
