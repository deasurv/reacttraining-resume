import React, {Component} from 'react';

import FullScreenPage from '../components/FullScreenPage';
import FASocialIcons from "../components/FASocialIcons";
import ScrollDown from "../components/ScrollDown";

import data from "../data";
import './TitleSection.css'

export default class TitleSection extends Component{

    render(){
        return(
            <FullScreenPage name="first" className={'first'}>
                <h1 className={'title'}>{data.title}</h1>
                <h3 className={'subtitle'}>{data.subtitle}</h3>
                <div>
                    {Object.keys(data.links).map(key => {
                        return(
                            <FASocialIcons icon={key} link={data.links[key]}/>
                        );
                    })}
                </div>
                <ScrollDown to={'about'}/>
            </FullScreenPage>
        );
    }
}