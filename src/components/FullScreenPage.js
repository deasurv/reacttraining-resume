import React, {Component} from 'react';
import './FullPageScreen.css'

export default class FullScreenPage extends Component{

    render(){
        const {children} = this.props;
        return (
            <div className={`full-screen-page ${this.props.className || ''}`}>
                {children}
            </div>
        );
    }
}