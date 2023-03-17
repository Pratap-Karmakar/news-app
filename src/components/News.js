import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Sppinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



// props can't be change if we want too change props then we need to create a state over the props the we can change the state, so state can be change and props are can be read only.

const News = (props) => {



    // articles need a empty array to get stored
    const [articles, setArticles] = useState([]);

    // we are setting loading as true to show the spinner while the page will loading new category at the top
    const [loading, setLoading] = useState(true);

    // this will be the initial page
    const [page, setPage] = useState(1);

    const [totalResults, setTotalResults] = useState(0);

    // document.title = `${capitalizeFirsttLetter(props.category)} - NewsMonkey`

    // to capitalxize the first letter of a string
    const capitalizeFirsttLetter = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1));
    }

    const updateNews = async () => {
        // by setting this setProgress by 10 means the Loadingbar will visible 10% instantly the afte a moment it will go to 100%
        props.setProgress(20)
        // this link is the page 1
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        // it means we want to set the data of the state article by parsedData article means we want the parsed articles by the news api app in our articles
        setArticles(parsedData.articles);

        // and totalResults means the total number of the articles parsed by the news api app
        setTotalResults(parsedData.totalResults);

        setLoading(false)

        // we are setting this setProgress by 100 means the Loadingbar will go to the 100%
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews()
    }, [])



    // const handleNextClick = async () => {
    //     console.log('next')
    //     setPage(page + 1);
    //     updateNews();
    // }


    // const handlePreviousClick = async () => {
    //     console.log("prev")
    //     setPage(page - 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        // we need to set the page+1 otherwise 1st page of news will come twise in the app
        setPage(page + 1)

        // page=${page +1} we need to set the page+1 otherwise 1st page of news will come twise in the app
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        // here we are using fetch api, fetch api will take url as an argument and return a promise
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // it means we want to set the data of the state article by parsedData article means we want the parsed articles by the news api app in our articles
        // and totalResults means the total number of the articles parsed by the news api app

        // we need to concat the parsedData articles with the state articles otherwise the new news will not appear
        setArticles(articles.concat(parsedData.articles));

        setTotalResults(parsedData.totalResults);
    }


    return (

        <div>

            {/* (props.category) this will show the category of the news by using capitalizeFirsttLetter function we make the first letter of the title capital */}
            <h2 className='text-center my-3'>NewsMonkey - Top {capitalizeFirsttLetter(props.category)} Headlines</h2>

            {loading && <Sppinner />}


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Sppinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
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
        </div>
    )
}


// in class based components propsTypes and defaultProps are written by using static
News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News

