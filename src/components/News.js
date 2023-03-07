import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Sppinner from './Sppinner';


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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2691ca327b3040bb9c679811844591fe&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // it means we want to set the data of the state article by parsedData article means we want the parsed articles by the news api app in our articles
        // and totalResults means the total number of the articles parsed by the news api app
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }




    handleNextClick = async () => {
        console.log('next')

        // Math.ceil means it will return the neext heighst number like if the value is 4.6 then Math.ceil will pass number 5 as the value
        // we can easily get the number of pages to show the total articles, that's why we divided the totalResults by this.props.pageSize which is the number of articles of per page we want 


        // this condition means, 
        // (this.state.page + 1) => means we want to increase the page number by one to view the next articles
        // (Math.ceil(this.state.totalResults / this.props.pageSize)) => means we want to know the total page numbers to view all the articles 
        // now the condition is we can't generate new pages if the  (Math.ceil(this.state.totalResults / this.props.pageSize))) this is exceding, means (Math.ceil(this.state.totalResults / this.props.pageSize))) =>  if by this function we get the page number 3 so we can't generate page numbers more than 3 (3>=3 )
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

            // now this page will be updated by plus 1, and pageSize = this.props.pageSize means we want the page size which can be set in the App.js as we've set that as props
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            // here loading : true, means here we are getting new articles are comming from the news api
            this.setState({ loading: true });
            // here we are using fetch api, fetch api will take url as an argument and return a promise
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ loading: false })
            this.setState({
                page: this.state.page + 1,
                // it means we want to set the data of the stae article by parsedData article
                articles: parsedData.articles,
                // here loading : true, meas here we've recived the new articles from the news api
                loading: false
            })

        }
    }



    // as we are using class based components thats why we don't need to use const or let
    handlePreviousClick = async () => {
        console.log("prev")
        // now this page will be updated by minus 1
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            // it means we want to set the data of the stae article by parsedData article
            articles: parsedData.articles,
            loading: false
        })
    }




    render() {

        return (
            <div className='container my-3' >
                <div className="border-bottom border-dark">
                    <h2 className='text-center my-3'>NewsMonkey Top Headlines</h2>
                </div>

                {/* this syntax means if loading (above line no:15) is true then only the spinner will be visible */}
                {this.state.loading && <Sppinner />}

                <div className="row">
                    {/* !this.state.loading &&  means, if this.state.loading is false (means if loading:false) then only loading is visible and no content is visible */}
                    {!this.state.loading && this.state.articles.map((element) => {
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

                        {/* disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} means disabled the next button if this condition is true */}
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark my-3" onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>

                </div>
            </div>
        )
    }
}

export default News
