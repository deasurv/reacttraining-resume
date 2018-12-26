import React, {Component} from 'react';
import FullScreenPage from '../components/FullScreenPage';
import SkillCard from '../components/SkillCard'
import {Element, Link} from 'react-scroll';
import '../components/ScrollToTop';

import data from "../data";
import './SkillSection.css';
import ScrollToTop from "../components/ScrollToTop";

export default class SkillSection extends Component {
    render() {
        return (
            <Element name="skills" className="element">
                <FullScreenPage className={'third'}>
                    <h2 className={'title'}>{data.sections[1].title}</h2>
                    <div className={'card-container'}>
                        {data.sections[1].items.map(skill => {
                            return (
                                <SkillCard skill={skill}/>
                            );
                        })}
                    </div>
                    <ScrollToTop to={'first'}/>
                </FullScreenPage>
            </Element>
        );
    }
}