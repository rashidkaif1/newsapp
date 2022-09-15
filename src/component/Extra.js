import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
//Wimport News from './component/News';
import News1 from './component/News1';
import About from './component/About';
import About1 from './component/About1';
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
       <Route exact path="/about" element={<About />} />
       <Route exact path="/about1" element={<About1 />} />

          <Route exact path='/'><News1 key="general" url={this.settings.newsDataApiURL} country={this.settings.country}  apiKey={this.settings.newsDataApiKey} category='general' /></Route>
          <Route exact path='/business'><News1 key="business" url={this.settings.newsDataApiURL} country={this.settings.country}  apiKey={this.settings.newsDataApiKey} category='business' /></Route>
          <Route exact path='/entertainment'><News1 key="entertainment" url={this.settings.newsDataApiURL} country={this.settings.country}  apiKey={this.settings.newsDataApiKey} category='entertainment' /></Route>
          <Route exact path='/health'><News1 key="health" url={this.settings.newsDataApiURL} country={this.settings.country}  apiKey={this.settings.newsDataApiKey} category='health' /></Route>
          <Route exact path='/science'><News1 key="science" url={this.settings.newsDataApiURL} country={this.settings.country}  apiKey={this.settings.newsDataApiKey} category='science' /></Route>
          <Route exact path='/sports'><News1 key="sports" url={this.settings.newsDataApiURL} country={this.settings.country}  apiKey={this.settings.newsDataApiKey} category='sports' /></Route>
          <Route exact path='/technology'><News1 key="technology" url={this.settings.newsDataApiURL} country={this.settings.country}  apiKey={this.settings.newsDataApiKey} category='technology' /></Route>
          
       </Switch>
       </Router>
      </div>
    )
  }
}
