import React, {Component} from 'react';

import {Link} from 'react-scroll';

import './ScrollDown.css';

export default class ScrollDown extends Component{
    render(){
        return(
            <div className={'scroll-down bounce'}>
                <Link activeClass="active" to={this.props.to} spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                    <span>Click Me!</span>
                    <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        );
    }
}