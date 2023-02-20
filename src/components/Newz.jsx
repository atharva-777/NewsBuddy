import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class Newz extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true, page: 1, totalResults: 0 };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsBuddy`;
  }

  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    this.props.handleClick(10);
      this.handleUpdate();
  }

  handleUpdate = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=117984fafb1e451e80b9409b8445e104&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.state.loading = true;
    this.props.handleClick(20);
    let data = await fetch(url);
    this.props.handleClick(50);
    let parsedData = await data.json();
    this.props.handleClick(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.handleClick(100);

  };

  fetchMoreData = () => {
    setTimeout(async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${
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
        articles: this.state.articles.concat(parsedData.articles),
        page: this.state.page + 1,
        loading: false,
      });
    }, 1500);
  };

  render() {
    return (
      <div className="container my-3">
        <h2
          style={{
            textAlign: "center",
            marginTop: "5rem",
            marginBottom: "30px",
          }}
        >
          <FontAwesomeIcon icon={faStar} style={{ marginRight: "10px" }} />
          Top Headlines in {this.capitalizeFirstLetter(this.props.category)}
          <FontAwesomeIcon icon={faStar} style={{ marginLeft: "10px" }} />
          {this.state.loading && <Spinner />}
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="flex-container">
            {this.state.articles.map((Element) => {
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
        </InfiniteScroll>

        <hr className="line" />
      </div>
    );
  }
}

export default Newz;

