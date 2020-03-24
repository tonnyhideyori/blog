import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import * as actions from '../actions'

class Header extends Component{
    renderUser() {
        return this.props.auth.user.firstname
    }
    renderLink() {
        console.log(this.props.auth);
        if (!this.props.auth) {
            return (
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li> 
                       < Link to="/signup"> < span className = "glyphicon glyphicon-shopping-cart" > </span> Create a account 
                       </Link>
                    </li> 
                        <li>
                            <Link to="/signin" ><i><span className="glyphicon glyphicon-log-in"></span></i> Login</Link>
                        </li>
                    </ul>
                    
              </div>
          )
        } else {
            console.log(this.props.auth)
            return (
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/profile">
                      {" "}
                      <i className="glyphicon glyphicon-user"> </i>{" "}
                      {this.renderUser()}
                    </Link>
                  </li>
                  <li>
                            <Link to="/" onClick={e => {
                                this.props.signout()
                            }}>
                      {" "}
                      <i className="glyphicon glyphicon-log-out"> </i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            );
      }
  }
    render() {
        return (
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link to ="/home"className="navbar-brand">Duka App</Link>
              </div>

              <ul className="nav navbar-nav"></ul>
              {this.renderLink()}
            </div>
          </nav>
        );
    }

}


function mapStateToProps(state) {
    return {
      auth: state.auth.authenticated
    };
}
export default connect(mapStateToProps,actions) (Header)