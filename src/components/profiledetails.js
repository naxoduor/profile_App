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
        return(
            <div>
            <div>Full Name:{this.props.activeProfile.item.fullName}</div>
            <div>Email:{this.props.activeProfile.item.email}</div>
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
  
