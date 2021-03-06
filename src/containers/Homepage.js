import React, {Component} from 'react'
import Login from './Login'
import SignUp from './SignUp'
// import { Link } from "react-router-dom"
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import {Link, Redirect} from "react-router-dom"

class Homepage extends Component {

  state = {
    signup: false,
    login: false,
  }

  signUpButtonClick = () => {
    this.setState({
      signup: true
    })
  }


  logInButtonClick = () => {
    this.setState({
      login: true
    })
  }



  render() {
    const homepagePrompt = () => {
      if (this.state.signup) {
        return <SignUp setUserId={this.props.setUserId}/>
      } else if (this.state.login) {
        return <Login setUserId={this.props.setUserId}/>
      } else {
        return <div>
                <button className="btn btn-primary" onClick={this.signUpButtonClick}>SignUp</button>
                <button className="btn btn-primary" onClick={this.logInButtonClick}>LogIn</button>
               </div>
      }
    }

    return (
    //   <div className="container">
    //   <div className="row">
    //     {/* {this.props.currentUserId && <Redirect to="/new-trip"/>} */}
    //     <div className="col-12">
    //       {/* {homepagePrompt()} */}
    //
    //     </div>
    //   </div>
    // </div>

    <div className="homepage-bg text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary"><Link to="/new-trip">New Trip</Link></button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary"><Link to="/trip-list">Trip List</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Homepage
