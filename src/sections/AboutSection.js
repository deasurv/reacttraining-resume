import React, {Component} from 'react';
import FullScreenPage from '../components/FullScreenPage';
import {Element} from 'react-scroll';

import data from "../data";
import './AboutSection.css';
import ScrollDown from "../components/ScrollDown";

export default class AboutSection extends Component {
    render() {
        return (
            <Element name="about" className="element">
                <FullScreenPage className={'second'}>
                    <h2 className={'title'}>{data.sections[0].title}</h2>
                    <div>
                        {data.sections[0].items.map(item => {
                            return <p>{item.content}</p>
                        })}
                    </div>
                    <ScrollDown to={'skills'}/>
                </FullScreenPage>
            </Element>
        );
    }
}