import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps ={
    country : 'us',
    pageSize:6,
   }
  static propTypes ={
    country :PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
    
  }

  capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    //console.log("hello I am constructr from news compnent");
    this.state = {

      articles : [],
      loading : false,
      page:1,
      totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`;
  }
  async componentDidMount(){
    console.log("cdm News ")
    this.updateNews();
   
  }
  fetchMoreData = () => {
    this.setState({page:this.state.page +1});
    this.updateNews();
  };
  // handleNextClick= async ()=>{
  //   console.log("next");
  //   console.log(this.state.page);
  //   await this.setState({page:this.state.page + 1});
  //    console.log(this.state.page);
  //    this.updateNews();
  // }
  // handlePrevClick = async ()=>{
  //   console.log("prev")
  //   this.setState({page:this.state.page - 1});
  //   this.updateNews();
  // }
  async updateNews(){

    console.log("updateNews",this.state.page)
   let url = `${this.props.url}?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   console.log("url ",url)
   this.setState({
    loading:true
   })  
   let data = await fetch(url);
     let parsedData = await data.json();
     //console.log(parsedData);
     this.setState({
        page : this.state.page,
        articles:parsedData.articles,
        loading:false,
        totalResults:parsedData.totalResults

     })

  }
  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1 className="text-center">News - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.totalResults}
          loader={<Spinner />}
        >
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <NewsItem  title={element.title?element.title.length>=51?element.title.slice(0,50)+'...':element.title:""} description={element.description?element.description.length>=88?element.description.slice(0,88)+'...':element.description:""}  imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
         </div>
     
  })}
       </div>

        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-2" onClick={this.handlePrevClick}>&larr; Prev</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        

      </div>
    );
  }
}

export default News;
