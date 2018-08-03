import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Profile extends Component {

    render(){
        const { user } = this.props.auth;

        return (
            <div className="card " style={{width: 18 + 'rem'}} >
                <img className="card-img-top" src={user.avatar} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <label>Email:</label>
                    <li className="list-group-item">{user.email}</li>

                </ul>
            </div>
        )
    }
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Profile);