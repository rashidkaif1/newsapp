import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
//import News1 from './component/News1';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

export default class App extends Component {
  settings={
    NewsApiKey:'15f83fb0d1fd4da6947ef1e37c160bd8',
    NewsApiURL:'https://newsapi.org/v2/top-headlines',
    pageSize:3,
    country:'in',
    category:'sports',
    newsDataApiKey:'pub_11135ab6ebde6dc18876f530b78a7145d8098',
    newsDataApiURL:'https://newsdata.io/api/1/news'


  }
    

  
  render() {
    return (
      <div>
        <Router>
       <Navbar />
       <Switch>
      

          <Route exact path='/'><News key="general" url={this.settings.NewsApiURL} country={this.settings.country}  apiKey={this.settings.NewsApiKey} category='general' /></Route>
          <Route exact path='/business'><News key="business" url={this.settings.NewsApiURL} country={this.settings.country}  apiKey={this.settings.NewsApiKey} category='business' /></Route>
          <Route exact path='/entertainment'><News key="entertainment" url={this.settings.NewsApiURL} country={this.settings.country}  apiKey={this.settings.NewsApiKey} category='entertainment' /></Route>
          <Route exact path='/health'><News key="health" url={this.settings.NewsApiURL} country={this.settings.country}  apiKey={this.settings.NewsApiKey} category='health' /></Route>
          <Route exact path='/science'><News key="science" url={this.settings.NewsApiURL} country={this.settings.country}  apiKey={this.settings.NewsApiKey} category='science' /></Route>
          <Route exact path='/sports'><News key="sports" url={this.settings.NewsApiURL} country={this.settings.country}  apiKey={this.settings.NewsApiKey} category='sports' /></Route>
          <Route exact path='/technology'><News key="technology" url={this.settings.NewsApiURL} country={this.settings.country}  apiKey={this.settings.NewsApiKey} category='technology' /></Route>
          
       </Switch>
       </Router>
      </div>
    )
  }
}
