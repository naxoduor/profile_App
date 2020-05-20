import { connect } from 'react-redux';
import {updateProfiles} from '../action/updateActions'
import React, { Component } from 'react';
class ProfileDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCart: false,
            id: "",
        }
    }
    render(){
        console.log(this.props.activeProfile)
        return(
            <div>
            <div>Full Name:{this.props.activeProfile.item.userAccountInfo.fullName}</div>
            <div>Email:{this.props.activeProfile.item.userAccountInfo.email}</div>
            </div>
        )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail)
  
