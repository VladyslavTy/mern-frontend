import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component{

render() {
        return (
            <div className="landing">
                <Link to='/register'>Sign up</Link>
            </div>
        );
    }

}
export default Main;