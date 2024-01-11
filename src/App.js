// App.jsx
import React from 'react';
import './App.css';
import sound from './assets/music/music.mp3';
import logo from './assets/logo.png';
import Overlay from './components/Overlay';
import leftGirl from './assets/leftg.png';
import rightGirl from './assets/rightg.png';
import round from './assets/round2.png';
import telegram from './assets/telegram.svg';
import twitter from './assets/twitter.svg';

function App() {
  const contract = 'TBA';
  const symbol = '$PEG ';
  const supply = "1,000,000,000"

  const playAudio = () => {
    const audio = document.querySelector('.audio');
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="App">
      <div className="insideApp">
        <Overlay playAudio={playAudio} />
        <audio autoPlay className="audio" loop>
          <source src={sound} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="main">
          <div className="header">
            <img className="logo" alt="logo" src={logo}/>
          </div>
          <div className="runningStringBlock">
            <h1 className="runningString peg">
              <span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span><span className="white">{symbol}</span><span className="purple">{symbol}</span>
            </h1>
          </div>
          <div className="home">
            <div className="homeContent">
              <img className="girl lgirl" alt="girl" src={leftGirl}/>
                <div className="headingButton">
                  <div className="headingSection">
                    <div className="headingBlock">
                      <h1 className="heading">
                        NOT INDIAN, NOT A RUG
                      </h1>
                    </div>
                    <a href="https://raydium.io/"><button className="buyButton">
                      <h2>BUY $PEG</h2>
                    </button></a>
                  </div>
                </div>
              <img className="girl rgirl" alt="girl" src={rightGirl}/>
            </div>
          </div>
          <div className="about">
            <div className="aboutContent">
              <img className="roundImg" alt="head" src={round} />
              <div className="info">
                <h3 className="subheading">
                  CA: <span className="purple">{contract}</span>
                </h3>
                <h3 className="subheading">
                  SUPPLY: <span className="purple">{supply}</span>
                </h3>
                <h3 className="subheading">
                  LP BURN: <span className="purple">AFTER LAUNCH</span>
                </h3>
                <h3 className="subheading">
                  MINT REVOKE: <span className="purple">YES</span>
                </h3>
                <div className="socials">
                  <a href="https://t.me/pegirlforvacation"><img className="socialIcon" alt="telegram" src={telegram}/></a>
                  <a href="https://twitter.com/PerfectGirl_Sol"><img className="socialIcon" alt="x" src={twitter}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
