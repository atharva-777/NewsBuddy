import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faDragon } from "@fortawesome/free-solid-svg-icons"

import '../App.css'


export class NewsItem extends Component {


  render() {
    let {title,description,img,url} = this.props;
    return (
      <div className="news my-3">
          <div className="card my-3" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="Image" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={url} target="_blank" className="btn btn-dark btn-sm">
                <FontAwesomeIcon icon={faCircleInfo} style={{marginRight:'5px'}}/>
                Read More Here 
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default NewsItem;
