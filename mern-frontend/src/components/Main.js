import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Main extends Component{

    componentDidMount(){
         if(this.props.auth.isAuthenticated){
             this.props.history.push('/profile');
         }
    }

    render() {
            return (
                <div className="landing">
                    <Link to='/register'>Sign up</Link>
                    {' | '}
                    <Link to='/login'>Log in</Link>
                </div>
            );
        }
}

    Main.propTypes = {
        auth: PropTypes.object.isRequired
    };

    const mapStateToProps = (state) => ({
        auth: state.auth
    });

export default connect(mapStateToProps)(Main);
