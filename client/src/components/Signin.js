import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Signin extends Component{
    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/home')
        })
    }
    render()
    {
        const { handleSubmit } = this.props;
        return (
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset className="form-group">
              <label>email</label>
              <Field
                name="email"
                type="text"
                component="input"
                className="form-control"
                placeholder="email"
                    />
                    <label>password</label>
                </fieldset>
                <fieldset>
              <Field
                name="password"
                type="password"
                component="input"
                placeholder="**********"
                className="form-control"
              />
                </fieldset>
                <div>{this.props.errorMessage}</div>
            <div>
              <button className="btn btn-danger btn-lg">signin</button>
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
export default compose(connect(mapStateToProps,actions),reduxForm({form:"signin"}))(Signin)
