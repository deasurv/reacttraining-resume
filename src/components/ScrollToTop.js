import React, {Component} from 'react';

import {Link} from 'react-scroll';

import './ScrollDown.css';

export default class ScrollToTop extends Component{
    render(){
        return(
            <div className={'scroll-down bounce'}>
                <Link activeClass="active" to={this.props.to} spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                    <span>To Top</span>
                    <i className="fas fa-chevron-up"></i>
                </Link>
            </div>
        );
    }
}