import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
   let {title,description,imageurl,newsurl,author,date}=this.props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imageurl?"https://dummyimage.com/600x400/000000/fff&text=No Image" : imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="sr-only">unread messages</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-danger">By {!author?'Unknown':author} on {new Date(date).toTimeString()} ago</small></p>
                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem

