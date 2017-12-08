import React, { Component } from 'react';
import './../styles/App.css';
import CookieButton from './CookieButton';
import Header from './Header';
import mysterious_figure from './../images/mysterious_figure.jpg';
import merchant from './/../images/merchant.jpg'
import EatCookies from './EatCookies'
import UpgradeClick from './upgradeClick'
import MeMaw from './Memaw'

export default class App extends Component {
  state = {
    clicks: 1,
    power: 1,
    consecEat: 1,
    Ate: false,
  };
  componentDidMount() {
    const clicks = parseInt(localStorage.getItem('clicks'), 10);
    if (!isNaN(clicks)) {
      this.setState(() => ({ clicks }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks !== this.state.clicks) {
      const clicks = this.state.clicks;
      localStorage.setItem('clicks', clicks)
    }
  }
  makeCookies = (prevstate) => {
    this.setState((prevState) => {
      return {
        consecEat: 1,
        clicks: prevState.clicks + prevState.power,
        Ate: false
      }
    });
  };
  eatCookies = (prevState) => {
    this.setState((prevState) => {
      if (prevState.clicks - prevState.consecEat * 2 < 0) {
        return {
          clicks: 0
        }
      }
      return {
        consecEat: prevState.consecEat *= 2,
        clicks: prevState.clicks - prevState.consecEat,
        Ate: true
      }
    });
  }
  upgradeClick = (prevState) => {
    this.setState((prevState) =>{
      return {
        power: prevState.power + 1
      }
    })
  }
  render() {
    const subTitle = 'Welcome to Cookie Clicker';
    return (
      <div className="App">
        <header className="App-header">
          <Header subTitle={subTitle} />
          <CookieButton
            makeCookies={this.makeCookies}
          />
          <EatCookies
            eatCookies={this.eatCookies}
          />
          <h1>Count: {(this.state.clicks !== 0) ? this.state.clicks : "You Ate All The Cookies!"}</h1>
          <h2>{(this.state.Ate === true && this.state.clicks !== 0) && <p>You Ate {this.state.consecEat} Cookies!</p>} </h2>
        </header>
        <body>
          {(this.state.clicks < 10) ? <img align="left" src={mysterious_figure} /> : <img align="left" src={merchant} />}
          <MeMaw 
          />
          <UpgradeClick 
          upgradeClick={this.upgradeClick}
          />
        </body>
      </div>
    );
  }
}

