import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../actions'
import{Link} from "react-router-dom"

class Blog extends Component{
  state={file:null}
    onSubmit = (formProps) => {
        this.props.blog(formProps,this.state.file, () => {
            this.props.history.push("/home")
        })
    }
    
  onFileChange(event) {
    this.setState({ file: event.target.files[0] })
    
  }

    render() {
        const {handleSubmit}=this.props
        return (
          <div>
            <form
              className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin"
              onSubmit={handleSubmit(this.onSubmit)}
            >
              <h2 className="w3-center">write your article</h2>
              <fieldset className="w3-rest">
                <label>Title</label>
                <Field
                  className="w3-input w3-border w3-round"
                  name="title"
                  type="text"
                  autoComplete="none"
                  component="input"
                />
              </fieldset>
              <fieldset className="w3-rest">
                <label>content</label>
                <Field
                  className="w3-input w3-border w3-round"
                  name="content"
                  type="text"
                  autoComplete="none"
                  component="textarea"
                />
              </fieldset>
              <label>add image</label>
              <input
                onChange={this.onFileChange.bind(this)}
                type="file"
                accept="image/*"
              />
              <button className="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">
                submit
              </button>
            </form>
          </div>
        );
}
}
function mapStateToProps(state) {
    return{blog:state.blog}
}
export default compose(connect(mapStateToProps,actions),reduxForm({form:"blog"}))(Blog)