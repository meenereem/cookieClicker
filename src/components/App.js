import React, { Component } from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CookieButton from './CookieButton';
import Header from './Header';
import mysterious_figure from './../images/mysterious_figure.jpg';
import merchant from './/../images/merchant.jpg'
import EatCookies from './EatCookies'
import UpgradeClick from './upgradeClick'
import Memaw from './Memaw'
import FireMemaw from './FireMemaw';
import Farm from './Farm'
import BurnFarm from './BurnFarm'
import Factory from './Factory'
import BurnFactory from './BurnFactory'
// import { Button } from 'react-bootstrap';


export default class App extends Component {
  timer = setInterval(() => {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + prevState.meMaws + prevState.farms + prevState.factories,
        Ate: false
      }
    });

  }, 1000)
  state = {
    clicks: 1,
    upgradeClickPrice: 10,
    power: 1,
    consecEat: 1,
    Ate: false,
    meMaws: 0,
    meMawPrice: 10,
    farms: 0,
    farmPrice: 10,
    factories: 0,
    factoryPrice: 10
  };
  componentDidMount() {
    const clicks = parseInt(localStorage.getItem('clicks'), 10);
    const meMaws = parseInt(localStorage.getItem('meMaws'), 10);
    const power = parseInt(localStorage.getItem('power'), 10);
    const farms = parseInt(localStorage.getItem('farms'), 10);
    const factories = parseInt(localStorage.getItem('factories'), 10);
    if (!isNaN(clicks) && !isNaN(meMaws) && !isNaN(power) && !isNaN(farms) && !isNaN(factories)) {
      this.setState(() => ({ clicks, meMaws, power, farms, factories }));
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.factories !== this.state.factories) {
      const factories = this.state.factories;
      localStorage.setItem('factories', factories)
    }
    if (prevState.meMaws !== this.state.meMaws) {
      const meMaws = this.state.meMaws;
      localStorage.setItem('meMaws', meMaws)
    }
    if (prevState.farms !== this.state.farms) {
      const farms = this.state.farms;
      localStorage.setItem('farms', farms)
    }
    if (prevState.clicks !== this.state.clicks) {
      const clicks = this.state.clicks;
      localStorage.setItem('clicks', clicks)
    }
    if (prevState.power !== this.state.power) {
      const power = this.state.power;
      localStorage.setItem('power', power)
    }
  }
  upgradeClick = (prevState) => {
    if (this.state.clicks - this.state.upgradeClickPrice >= 0) {
      this.setState((prevState) => {
        return {
          power: prevState.power + 1,
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice + 10
        }
      })
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
  Memaw = (prevState) => {
    if (this.state.clicks - this.state.meMawPrice >= 0) {
      this.setState((prevState) => {
        return {
          meMaws: prevState.meMaws + 1,
          clicks: prevState.clicks - prevState.meMawPrice,
          meMawPrice: prevState.meMawPrice + 10
        }
      })
    }
  }
  fireMemaw = () => {
    if (this.state.meMaws > 0 && this.state.meMawPrice >= 10) {
      this.setState((prevState) => {
        return {
          meMaws: prevState.meMaws - 1,
          meMawPrice: prevState.meMawPrice - 10
        }
      })
    }
  }
  buildFarm = () => {
    if (this.state.clicks - this.state.farmPrice >= 0) {
      this.setState((prevState) => {
        return {
          farms: prevState.farms + 1,
          clicks: prevState.clicks - prevState.farmPrice,
          farmPrice: prevState.farmPrice + 10
        }
      })
    }
  }
  burnFarm = () => {
    if (this.state.farms > 0 && this.state.farmPrice >= 10) {
      this.setState((prevState) => {
        return {
          farms: prevState.farms - 1,
          farmPrice: prevState.farmPrice - 10
        }
      })
    }
  }
  buildFactory = () => {
    if (this.state.clicks - this.state.factoryPrice >= 0) {
      this.setState((prevState) => {
        return {
          factories: prevState.factories + 1,
          clicks: prevState.clicks - prevState.factoryPrice,
          factoryPrice: prevState.factoryPrice + 10
        }
      })
    }
  }
  burnFactory = () => {
    if (this.state.factories > 0 && this.state.factoryPrice >= 10) {
      this.setState((prevState) => {
        return {
          factories: prevState.factories - 1,
          factoryPrice: prevState.factoryPrice - 10
        }
      })
    }
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
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              {(this.state.clicks < 10) ? <img align="left" src={mysterious_figure} /> : <img align="left" src={merchant} />}
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <br />
              <ul>
                <li>
                  <UpgradeClick
                    upgradeClick={this.upgradeClick}
                  />
                  <p>Cost: {this.state.upgradeClickPrice}</p>
                </li>
                <br />
                <li>
                  <Memaw
                    Memaw={this.Memaw}
                  />
                  <p>Cost: {this.state.meMawPrice}</p>
                </li>
                <br />
                <li>
                  <FireMemaw
                    fireMemaw={this.fireMemaw}
                  />
                </li>
                <br />
                <li>
                  <Farm
                    buildFarm={this.buildFarm}
                  />
                  <p>Cost: {this.state.farmPrice}</p>
                </li>
                <br />
                <li>
                  <BurnFarm
                    burnFarm={this.burnFarm}
                  />
                </li>
                <br />
                <li >
                  <Factory
                    buildFactory={this.buildFactory}
                  />
                  <p>Cost: {this.state.factoryPrice}</p>
                </li>
                <br />
                <li>
                  <BurnFactory
                    burnFactory={this.burnFactory}
                  />
                </li>
                <br />
              </ul>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

