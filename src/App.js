import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileDetail from './components/profiledetails'
import ContactDetails from './components/contacts'
import { connect } from 'react-redux';
import { updateProfiles } from './action/updateActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProfile:true,
      showHelp: false
    }
  }

  componentWillMount() {
    let user = {
      "userAccountInfo": {
        "id": 9999999997, "email": "super@admin.com",
        "fullName": "super admin", "enabled": true,
        "authorities": ["ROLE_SUPER_ADMIN"]
      }
    }
    this.props.updateProfiles(user)
  }

  displayProfile=()=>{
    this.setState({showProfile:true})
    this.setState({showHelp:false})
  }

  displayHelp=()=>{
    this.setState({showProfile:false})
    this.setState({showHelp:true})
  }

  render() {
    return (
      <div className="App">
        <div class="sidebar">
          <a className={this.state.showProfile? "active":""} href="#home" onClick={this.displayProfile}>Profile</a>
          <a className={this.state.showHelp? "active":""} href="#help" onClick={this.displayHelp}>Help</a>
        </div>
        <div className="content">
          <ProfileDetail show={this.state.showProfile}/>
          <ContactDetails show={this.state.showHelp}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfiles: (user) => dispatch(updateProfiles(user)),
  }
}

const mapStateToProps = (state) => {
  return {

    activeProfile: state.activeProfile,
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
