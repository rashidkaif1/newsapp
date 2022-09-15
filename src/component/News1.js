import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News1 extends Component {
  static defaultProps ={
    country : 'us',
   
  }
  static propTypes ={
    country :PropTypes.string,
   
  }

  
  constructor() {
    super();
    console.log("hello I am constructr from News1 compnent");
    this.state = {

      articles : [],
      loading : false,
      page:1,
      

    }
  }
  async componentDidMount(){
    console.log("cdm News 1")
     let url = `${this.props.url}?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&page=1`;
     console.log("url :",url)
     this.setState({
      loading:true
     })
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     
      this.setState({
        articles:parsedData.results,
        totalResults:0,
        loading : false
      });
     
  
   
  }
  handleNextClick= async ()=>{
    console.log("next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `${this.props.url}?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page+1}`;
        this.setState({
          loading:true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
       this.setState({
            page : this.state.page +1,
            articles:parsedData.results,
            loading:false

        })

    }

  }
  handlePrevClick = async ()=>{

   console.log("prev")
   let url = `${this.props.url}?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page-1}`;
   this.setState({
    loading:true
   })  
   let data = await fetch(url);
     let parsedData = await data.json();
     //console.log(parsedData);
     this.setState({
        page : this.state.page -1,
        articles:parsedData.results,
        loading:false

     })
  }
  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1 className="text-center">News1 - Top News</h1>
        {this.state.loading && <Spinner />}
        
        <div className="row">
        {console.log("test",this.state.articles)}
        {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.link}>
           <NewsItem  title={element.title?element.title.length>=51?element.title.slice(0,50)+'...':element.title:""} description={element.description?element.description.length>=88?element.description.slice(0,88)+'...':element.description:""}  imageurl={element.image_url} newsurl={element.link} />
         </div>
        
  })}
         
         
        </div>
        <div className="container d-flex justify-content-between">
        

        <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-2" onClick={this.handlePrevClick}>&larr; Prev</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        

      </div>
    );
  }
}

export default News1;
