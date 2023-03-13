import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='my-4'>
                <div className="card" >

                    {/* search : badge on bootstrap, to show the message at the top-right corner of every news card */}
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info"
                        // we've added this style to fix the badge on top-right corner of the news card
                        style={{ left: '90%', zIndex: '1' }}>{source}
                    </span>

                    {/* if any news has no image to show then our app will show a default image to the user */}
                    <img src={!imageUrl ? "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* target="_blank" will open the newsUrl in the new tab whenever we click on Read more */}
                        {/* {new Date(date).toGMTString()} => here first we create an onject named Date and the passed the {date} as an object item the change it to toGMTString() */}
                        <p className='card-text'><small className='text-info'>By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsItem
