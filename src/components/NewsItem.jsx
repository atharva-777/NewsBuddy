import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faDragon } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

import "../App.css";

export class NewsItem extends Component {
  render() {
    let { title, description, img, url, publishedAt, source } = this.props;
    return (
      <div className="news my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span
            className="position-absolute top-0 start-50 translate-middle badge rounded-pill  bg-dark"
            style={{ padding: "8px" }}
          >
            {source.name}
          </span>

          <img
            src={img != null ? img : logo}
            className="card-img-top"
            alt="Image"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" className="btn btn-dark btn-sm">
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ marginRight: "5px" }}
              />
              Read More
            </a>
            <p style={{ margin: "5px" }}>
              {new Date(publishedAt).toUTCString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
