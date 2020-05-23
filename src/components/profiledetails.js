import { connect } from 'react-redux';
import { updateProfiles } from '../action/updateActions'
import React, { Component } from 'react';
import './profiledetails.css';
import { Link } from 'react-router-dom'
import { Form, Row, Col, FormGroup, FormLabel, FormControl, Button, FormCheck } from 'react-bootstrap';
class ProfileDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "1",
            
        }
    }

    render() {
        console.log(this.props.activeProfile)
        const showModal=this.props.show? "display-block":"display-none"
        return (
            <div className={showModal}>
            <div className="profileContent">
                <h className="title">Profile</h>
                
                <div className="profileInfo">
                <div className="image_wrapper">
                        <img
                            title="logo"
                            src="/images/logo192.png"
                        />
                        </div>
                    <div className="detail-elements"><label className="label">Full Name:</label><br/>
                        {this.props.activeProfile.item.userAccountInfo.fullName}
                    </div>
                    <div className="detail-elements"><label className="label">Email:</label><br />
                        {this.props.activeProfile.item.userAccountInfo.email}
                    </div>
                    <div className="detail-elements">
                        <Link className="detail-link" to="/">Change Password</Link>
                    </div>
                    <div className="detail-elements">
                        <Link className="detail-link" to="/">Select App Language</Link>
                        <FormControl as="select" onChange={this.logout}>
                            <option>Choose...</option>
                            <option>English</option>
                            <option>Swahili</option>
                        </FormControl>
                    </div>
                    <div className="checkboxx detail-elements">
                        <div>
                            <Link className="detail-link" to="/">Logout</Link>
                        </div>
                        <div className="input-element"><input className="check" type="checkbox" label="Check me out" />Logout on all devices</div>                    </div>
                </div>
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

