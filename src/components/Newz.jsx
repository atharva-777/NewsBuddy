import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeftLong,
  faRightLong,
  faSpinner,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Spinner from "./Spinner";
import PropTypes  from "prop-types";

export class Newz extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
  }

  static defaultProps = {
    country : 'in',
    pageSize : 12,
    category : 'general',
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=117984fafb1e451e80b9409b8445e104&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleUpdate = async (pageNo) => {
    if(pageNo<= this.state.totalResults/this.props.pageSize && pageNo>0){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=117984fafb1e451e80b9409b8445e104&page=${pageNo}&pageSize=${this.props.pageSize}`;
      this.state.loading = true;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      }); 
    }
    
  }

  handleNextClick = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=117984fafb1e451e80b9409b8445e104&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.state.loading = true;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=117984fafb1e451e80b9409b8445e104&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.state.loading = true;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

   scrollTop = () => {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}
        <h2
          style={{
            textAlign: "center",
            marginTop: "5rem",
            marginBottom:'30px'
          }}
        >
          <FontAwesomeIcon icon={faStar} style={{ marginRight: "10px" }} />
          Top Headlines
          <FontAwesomeIcon icon={faStar} style={{ marginLeft: "10px" }} />
        </h2>

        <div className="flex-container">
          {!this.state.loading &&
            this.state.articles.map((Element) => {
              return (
                <div className="" key={Element.url}>
                  <NewsItem
                    title={Element.title}
                    description={Element.description}
                    img={Element.urlToImage}
                    url={Element.url}
                    publishedAt={Element.publishedAt}
                    source={Element.source}
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
            onClick={() => {
              // this.handleUpdate(this.state.page-1),
              this.handlePrevClick(),
               this.scrollTop();
            }}
          >
            <FontAwesomeIcon
              icon={faLeftLong}
              fade
              style={{ marginRight: "5px" }}
            />
            Previous
          </button>
          <p>{this.state.page}</p>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={() => {
              // this.handleUpdate(this.state.page+1),
              this.handleNextClick(), 
              this.scrollTop();
            }}
          >
            Next
            <FontAwesomeIcon
              icon={faRightLong}
              fade
              style={{ marginLeft: "5px" }}
            />
          </button>
        </div>
        {/* <FontAwesomeIcon icon={faSpinner} size="2x" spin/> */}
      </div>
    );
  }
}

export default Newz;
