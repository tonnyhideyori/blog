import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form"
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../actions'
class Signup extends Component{
    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push("/home")
        })
    }
    render() {
        const {handleSubmit}=this.props
        return (
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset className="form-group">
              <label>firstname</label>
              <Field
                name="firstname"
                placeholder="firstname"
                className="form-control"
                type="text"
                component="input"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>lastname</label>
              <Field
                name="lastname"
                placeholder="lastname"
                className="form-control"
                type="text"
                component="input"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>email</label>
              <Field
                name="email"
                placeholder="email"
                type="text"
                className="form-control"
                component="input"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>password</label>
              <Field
                name="password"
                placeholder="*********"
                className="form-control"
                type="password"
                component="input"
              />
            </fieldset>
            <div>{this.props.errorMessage}</div>
            <div>
              <button className="btn btn-danger btn-lg">Signup</button>
            </div>
          </form>
        );
}
}
function mapStateToProps(state) {
    return {
        errorMessage:state.auth.errorMessage
    }
}
export default compose(connect(mapStateToProps, actions), reduxForm({ form: "signup" }))(Signup)