import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl}=this.props
        return (
            <div className='my-4'>
                <div className="card" style={{width: "18rem"}}>
                    {/* if any news has no image to show then our app will show a default image to the user */}
                    <img src={!imageUrl?"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* ... means after 44th character(setted in NewsItem page) of title show ... */}
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* target="_blank" will open the newsUrl in the new tab whenever we click on Read more */}
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
