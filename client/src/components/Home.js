import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions";
import {Link} from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
      this.props.fetch();
  }
  renderImage(url) {

    if (url) {
      return (
        <img
          src={
            "https://blogbacket.s3.eu-west-3.amazonaws.com/" +
            url
          }
        />
      );
    }
  }
  renderContent() {
    let contents = this.props.content.map(content => {
      return (
        <div className="col-sm-12" key={content._id}>
          <div
            className="w3-crd-4"
            style={{ marginRight: "2px", marginBottom: "10px" }}
            key={content._id}
          >
            <header className="w3-container w3-red">
              <span>
                <h5>{content.title}</h5>
              </span>
            </header>
            <div className="w3-container w3-khaki">
              <p>{content.content}</p>
              {this.renderImage(content.imageUrl)}
            </div>
          </div>
        </div>
      );
    });
    return contents;
  }
  render() {
    console.log(this.props.content);
    return (
      <div>
        {this.renderContent()}
        <Link to="/blog">
          <button className="w3-button w3-circle w3-black w3-xxxlarge" style={{ position: "fixed", bottom: "5px", right: "1px" }}><b>+</b></button>
          </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { content: state.content };
}
export default connect(mapStateToProps, action)(Home);
