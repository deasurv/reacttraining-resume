import React, {Component} from 'react'
import './FASocialIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

export default class FASocialIcons extends Component{
    render(){
        return(
            <a href={this.props.link} className={`fa-social-icons ${this.props.icon || ''}`}>
                <FontAwesomeIcon icon={['fab',this.props.icon]}/>
            </a>
        );
    }
}