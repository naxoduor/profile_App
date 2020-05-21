import { connect } from 'react-redux';
import { updateProfiles } from '../action/updateActions'
import React, { Component } from 'react';
import './profiledetails.css';
import { Link } from 'react-router-dom'
class ProfileDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCart: false,
            id: "",
        }
    }

     logout=(e)=>{

    }
    render() {
        console.log(this.props.activeProfile)
        return (
            <div className="profileContent">
            <h className="title">Profile</h>
                <div className="profileInfo">
                    <div className="detail-elements"><label className="label">Full Name:</label><br/>
                        {this.props.activeProfile.item.userAccountInfo.fullName}
                    </div>
                    <div className="detail-elements"><label className="label">Email:</label><br/>
                        {this.props.activeProfile.item.userAccountInfo.email}
                    </div>
                    <Link className="detail-elements" to="/">Change Password</Link>
                    <Link className="detail-elements" to="/">Select App Language</Link>
                    <Link className="detail-elements" to="/">Logout</Link>
                </div>
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

