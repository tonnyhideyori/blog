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
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <label>Title</label>
                <Field
                  name="title"
                  type="text"
                  autoComplete="none"
                  component="input"
                />
              </fieldset>
              <fieldset>
                <Field
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
                accept="image/*" />
              <button>submit</button>
            </form>
          </div>
        );
}
}
function mapStateToProps(state) {
    return{blog:state.blog}
}
export default compose(connect(mapStateToProps,actions),reduxForm({form:"blog"}))(Blog)