import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Meetups extends Component{

    componentDidMount() {
        this.props.getMeetups();
    }

    render(){
        const { meetupItem } = this.props.meetup;

        return (
            <div>

            </div>
        )
    }
}

/*Meetups.propTypes = {
    getMeetups: PropTypes.func.isRequired,
    meetup: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    meetup: state.meetup;
};*/

export default Meetups;