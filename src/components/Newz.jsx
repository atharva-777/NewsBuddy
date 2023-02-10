import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faStar } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

export class Newz extends Component {
  
  constructor() {
    super();
    this.state = { articles: [], loading: false };
  }

  
 async componentDidMount(){
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=117984fafb1e451e80b9409b8445e104";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles : parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h2
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          <FontAwesomeIcon icon={faStar} flip style={{ marginRight: "10px" }} />
          Top Headlines
          <FontAwesomeIcon icon={faStar} flip style={{ marginLeft: "10px" }} />
        </h2>

        <div className="flex-container">
        {this.state.articles.map((Element) => {
          return (
            <div className="" key={Element.url}>
              <NewsItem
                title={Element.title}
                description={Element.description}
                img={Element.urlToImage}
                url={Element.url}
              />
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default Newz

