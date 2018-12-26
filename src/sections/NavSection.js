import React, {Component} from 'react';
import {Link} from 'react-scroll';

import './NavSection.css';

export default class NavSection extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className={'change-color'} onMouseUp={this.props.colorize}>
                    <i className="fas fa-palette"></i>
                    <span>Colorize!</span>
                </div>
                <div id={'menu'}>
                    <div className={'sub-menu'}>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                            About
                        </Link>
                    </div>
                    <div className={'sub-menu'}>
                        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                            Portfolio
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}