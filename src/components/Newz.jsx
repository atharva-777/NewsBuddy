import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newz = (props) => {
  const [state, setState] = useState({
    articles: [],
    loading: true,
    page: 1,
    totalResults: 0,
  });
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(props.category)}-NewsBuddy`;

  useEffect(() => {
    props.handleClick(10);
    handleUpdate();
  }, []);

  const handleUpdate = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page}&pageSize=${props.pageSize}`;
    state.loading = true;
    props.handleClick(20);
    let data = await fetch(url);
    props.handleClick(50);
    let parsedData = await data.json();
    props.handleClick(70);

    setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    props.handleClick(100);
  };

  const fetchMoreData = () => {
    setTimeout(async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey} &page=${
        state.page + 1
      }&pageSize=${props.pageSize}`;
      state.loading = true;
      let data = await fetch(url);
      let parsedData = await data.json();
      setState({
        articles: state.articles.concat(parsedData.articles),
        page: state.page + 1,
        loading: false,
      });
    }, 1500);
  };

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
        Top Headlines in {capitalizeFirstLetter(props.category)}
        <FontAwesomeIcon icon={faStar} style={{ marginLeft: "10px" }} />
        {state.loading && <Spinner />}
      </h2>

      <InfiniteScroll
        dataLength={state.articles.length}
        next={fetchMoreData}
        hasMore={state.articles.length !== state.totalResults}
        loader={<Spinner />}
      >
        <div className="flex-container">
          {state.articles.map((Element) => {
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
};

Newz.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

Newz.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};
export default Newz;
