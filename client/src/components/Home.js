import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions";

class Home extends Component {
  componentDidMount() {
      this.props.fetch();
  }
  renderContent() {
    let contents = this.props.content.map(content => {
      return (
        <div className="col-sm-4" key={content._id}>
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
        this home
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { content: state.content };
}
export default connect(mapStateToProps, action)(Home);
