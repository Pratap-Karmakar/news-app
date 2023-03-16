import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Sppinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



// props can't be change if we want too change props then we need to create a state over the props the we can change the state, so state can be change and props are can be read only.

export class News extends Component {

    // in class based components propsTypes and defaultProps are written by using static
    static defaultProps = {
        country: "in",
        pageSize: 5,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    // as we are using props in (doocument.title= this.props.category) here that's why we need to take props here
    constructor(props) {
        // as we took props in the constructon that's why we need to take props in the super too
        super(props);
        console.log('constructor')
        this.state = {
            // articles need a empty array to get stored
            articles: [],
            // we are setting loading as true to show the spinner while the page will loading new category at the top
            loading: true,
            // this will be the initial page
            page: 1,
            totalResults: 0
        }
        // to change the title according to the news category and by using capitalizeFirsttLetter function we make the first letter of the title capital
        document.title = `${this.capitalizeFirsttLetter(this.props.category)} - NewsMonkey`
    }

    // to capitalxize the first letter of a string
    capitalizeFirsttLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {
        // by setting this setProgress by 10 means the Loadingbar will visible 10% instantly the afte a moment it will go to 100%
        this.props.setProgress(20)
        // this link is the page 1
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page}&pageSize=${this.props.pageSize}`
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
        // we are setting this setProgress by 100 means the Loadingbar will go to the 100%
        this.props.setProgress(100);
    }

    // react lifecycle
    // componentDidMount will run after the render function run
    // async function can wait in his own function body to get resolve some promises
    async componentDidMount() {
        // this link is the page 1
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2691ca327b3040bb9c679811844591fe&page=1&pageSize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // // here we are using fetch api, fetch api will take url as an argument and return a promise
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // // it means we want to set the data of the state article by parsedData article means we want the parsed articles by the news api app in our articles
        // // and totalResults means the total number of the articles parsed by the news api app
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });


        this.updateNews();
    }




    handleNextClick = async () => {
        console.log('next')

        // Math.ceil means it will return the neext heighst number like if the value is 4.6 then Math.ceil will pass number 5 as the value
        // we can easily get the number of pages to show the total articles, that's why we divided the totalResults by this.props.pageSize which is the number of articles of per page we want 


        // this condition means, 
        // (this.state.page + 1) => means we want to increase the page number by one to view the next articles
        // (Math.ceil(this.state.totalResults / this.props.pageSize)) => means we want to know the total page numbers to view all the articles 
        // now the condition is we can't generate new pages if the  (Math.ceil(this.state.totalResults / this.props.pageSize))) this is exceding, means (Math.ceil(this.state.totalResults / this.props.pageSize))) =>  if by this function we get the page number 3 so we can't generate page numbers more than 3 (3>=3 )

        // code

        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

        //     // now this page will be updated by plus 1, and pageSize = this.props.pageSize means we want the page size which can be set in the App.js as we've set that as props
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        //     // here loading : true, means here we are getting new articles are comming from the news api
        //     this.setState({ loading: true });
        //     // here we are using fetch api, fetch api will take url as an argument and return a promise
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     console.log(parsedData);
        //     this.setState({ loading: false })
        //     this.setState({
        //         page: this.state.page + 1,
        //         // it means we want to set the data of the stae article by parsedData article
        //         articles: parsedData.articles,
        //         // here loading : true, meas here we've recived the new articles from the news api
        //         loading: false
        //     })
        // }


        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }



    // as we are using class based components thats why we don't need to use const or let
    handlePreviousClick = async () => {
        console.log("prev")
        // now this page will be updated by minus 1
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        // // here we are using fetch api, fetch api will take url as an argument and return a promise
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     // it means we want to set the data of the stae article by parsedData article
        //     articles: parsedData.articles,
        //     loading: false
        // })

        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }

    fetchMoreData = async () => {
        // we need to set the page+1 otherwise 1st page of news will come twise in the app
        this.setState({ page: this.state.page + 1 })

        // page=${this.state.page +1} we need to set the page+1 otherwise 1st page of news will come twise in the app
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2691ca327b3040bb9c679811844591fe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // it means we want to set the data of the state article by parsedData article means we want the parsed articles by the news api app in our articles
        // and totalResults means the total number of the articles parsed by the news api app
        this.setState({
            // we need to concat the parsedData articles with the state articles otherwise the new news will not appear
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,

        });
    }


    render() {
        console.log('render')

        return (

            <div>
                
                    {/* (this.props.category) this will show the category of the news by using capitalizeFirsttLetter function we make the first letter of the title capital */}
                    <h2 className='text-center my-3'>NewsMonkey - Top {this.capitalizeFirsttLetter(this.props.category)} Headlines</h2>
                

                {/* this syntax means if loading (above line no:15) is true then only the Spinner will be visible at the top to show the spinner while the page will loading new category*/}
                {this.state.loading && <Sppinner />}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Sppinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    // col-md-4 means it will take 4 columns in medium devices out of 12 grids given by bootstrap 
                                    // key={element.url} => here key use to load more about a particular news in the actual link thus we've setted the key where we have use element ehich is
                                    <div className="col-md-4" key={element.url} >
                                        {/* slice(0,44) means it will shoe the title from 0th character to the 44th character only and same goes for the description as well */}
                                        {/* !element.title means if not of element.title */}
                                        {/* <NewsItem title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl={element.url} /> */}

                                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "Unknown"} source={element.source.name ? element.source.name : "Unknown"} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>



                {/* button */}
                {/* <div className="container d-flex justify-content-between border-top border-dark my-5"> */}
                {/* &larr; will show the left arrow (search previous on google and you will get it) and same for &rarr; */}
                {/* as we are using class based components thats why we need to use 
                        this.handlePreviousClick */}
                {/* this.state.page<=1 means if the page cont is not more than 1 then the previous whitch will be disabled */}
                {/* <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-5" onClick={this.handlePreviousClick}>&larr; Previous</button> */}

                {/* disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} means disabled the next button if this condition is true */}
                {/* <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark my-5" onClick={this.handleNextClick}>Next &rarr;</button> */}

                {/* </div> */}


            </div>
        )
    }
}

export default News




