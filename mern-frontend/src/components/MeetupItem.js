import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { getMeetup } from "../actions/meetupActions";

class MeetupItem extends Component {
    constructor(){
        super();


    }

    componentDidMount(){
        this.props.getMeetup();
    }

    render(){
        const { meetup } = this.props.meetup;

        return (

            <div className='card' style={{width: 18 + 'rem'}}>
                <img className='card-img-top' src='https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.0-9/37693319_1874620105909446_4281311383057858560_n.png?_nc_cat=0&oh=349a68f60a7e24abc465afafc0d8b679&oe=5C0D23DF'
                     alt='Card image cap'
                     style={{borderBottom: 'solid 1px rgba(0,0,0,.125)'}}
                />
                <div className='card-body'>
                    <div>
                       {/* {meetup}*/}
                    </div>
                    <h4 className="card-title"><a>Some meetup</a></h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi aperiam beatae deleniti, dicta, dolores eveniet fugit ipsam laborum nesciunt, nostrum perferendis quaerat quidem repellat sint tempora vel veritatis.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                </div>
            </div>
        )
    }
}

MeetupItem.propTypes = {
    getMeetup: PropTypes.func.isRequired,
    meetup: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    meetup: state.meetup
});

export default connect(mapStateToProps, { getMeetup })(MeetupItem);