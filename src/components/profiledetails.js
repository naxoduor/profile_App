import { connect } from 'react-redux';
import { updateProfiles } from '../action/updateActions'
import React, { Component } from 'react';
import './profiledetails.css';
class ProfileDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showCart: false,
            id: "",
        }
    }
    render() {
        console.log(this.props.activeProfile)
        return (
            <div className="profileContent">
            <h>Profile</h>
                <div className="profileInfo">
                    <div><label>Full Name:</label>
                        {this.props.activeProfile.item.userAccountInfo.fullName}
                    </div>
                    <div><label>Email:</label>
                        {this.props.activeProfile.item.userAccountInfo.email}
                    </div>
                    <div><label>Athorities:</label>
                        {this.props.activeProfile.item.userAccountInfo.authorities.map((authority) => (
                            <ul><li>{authority}</li></ul>
                        ))}
                    </div>
                    <div>Change Password</div>
                    <div>Select App Language</div>
                    <div>Logout</div>
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

