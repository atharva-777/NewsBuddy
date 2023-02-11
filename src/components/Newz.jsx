import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeftLong,
  faRightLong,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export class Newz extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1, totalResults:0};
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=chatgpt&language=en&apiKey=117984fafb1e451e80b9409b8445e104&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults});
  }

  handleNextClick = async () => {
    if(this.state.page+1  <= Math.ceil(this.state.totalResults/this.props.pageSize)){
    let url = `https://newsapi.org/v2/everything?q=chatgpt&language=en&apiKey=117984fafb1e451e80b9409b8445e104&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , page: this.state.page + 1 });
    }
  };

  handlePrevClick = async() => {
    let url = `https://newsapi.org/v2/everything?q=chatgpt&language=en&apiKey=117984fafb1e451e80b9409b8445e104&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , page: this.state.page - 1 });
  };

  render() {
    return (
      <div className="container my-3">
        <h2
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          <FontAwesomeIcon icon={faStar} style={{ marginRight: "10px" }} />
          Top Headlines
          <FontAwesomeIcon icon={faStar} style={{ marginLeft: "10px" }} />
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
        <hr className="line" />
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            <FontAwesomeIcon
              icon={faLeftLong}
              fade
              style={{ marginRight: "5px" }}
            />
            Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next
            <FontAwesomeIcon
              icon={faRightLong}
              fade
              style={{ marginLeft: "5px" }}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Newz;
