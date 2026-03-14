import React from 'react';
import RotatingEarth from '../assets/earth.gif';

const HelloWorld = () => {
  return (
    <main className="main flex text padding">
        <div className="hello">
            <h2>Hello</h2>
        </div>
        <div className="world">
            <img src={RotatingEarth} alt="Rotating Earth Gif" />
        </div>
        <div className="author">
            <span>using <strong className="react">React</strong> by</span>
            <h2>Muhammad Ammad Hassan</h2>
        </div>
    </main>
  )
}

export default HelloWorld;