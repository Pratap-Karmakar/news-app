import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl}=this.props
        return (
            <div className='my-4'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* ... means after 44th character(setted in NewsItem page) of title show ... */}
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        {/* target="_blank" will open the newsUrl in the new tab whenever we click on Read more */}
                        <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
