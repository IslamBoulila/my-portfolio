import React, { Component } from 'react';
import SideBar from './components/SideBar/SideBar';
import Slider from './components/Slider/Slider';
import Main from './components/Main';
import './App.css';

class App extends Component {

    render() {
        return (
            <div id="colorlib-page">
                <div className="container-wrap">
                    <SideBar fullName="Islam BOULILA" />

                   <Main/>

                </div>

            </div>

        );
    }


}

export default App;
