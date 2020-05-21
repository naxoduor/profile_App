import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileDetail from './components/profiledetails'
import { connect } from 'react-redux';
import { updateProfiles } from './action/updateActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      good: "good guy",

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

  render() {
    return (
      <div className="App">
        <div class="sidebar">
          <a class="active" href="#home">Profile</a>
          <a href="#help">Help</a>
        </div>
        <div className="content">
          <ProfileDetail />
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
