import React, {Component} from 'react';

import NavSection from "./sections/NavSection";
import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import './App.css';


class App extends Component {

    constructor(){
        super();
        this.state = {
            backgroundColor : '255, 255, 255',
            color: '#000'
        };
    }

    colorize = () => {
        this.setState({
            backgroundColor: this.state.backgroundColor == '255, 255, 255' ? '44, 62, 80' : '255, 255, 255',
            color:  this.state.color == '#000' ? '#fff' : '#000',
        });
    };

    render() {
        return (
            <div className="App" style={{color: this.state.color, backgroundColor: `rgb(${this.state.backgroundColor})`}}>
                <NavSection colorize={this.colorize}/>
                <TitleSection/>
                <AboutSection/>
                <SkillSection/>
            </div>
        );
    }
}

export default App;
