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


export default class App extends Component {
  timer = setInterval(() => {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + prevState.meMaws + prevState.farmPower + prevState.factoryPower,
        Ate: false
      }
    });

  }, 1000)
  state = {
    clicks: 1,
    upgradeClickPrice: 100,
    upgrades: 0,
    power: 1,
    consecEat: 1,
    Ate: false,
    meMaws: 0,
    meMawPrice: 100,
    farmPower: 0,
    farmPrice: 1100,
    farms: 0,
    factoryPower: 0,
    factoryPrice: 130000,
    factories: 0
  };
  componentDidMount() {
    const upgrades = parseInt(localStorage.getItem('upgrades'), 10) || 0;
    const upgradeClickPrice = parseInt(localStorage.getItem('upgradeClickPrice'), 10) || 100;
    const clicks = parseInt(localStorage.getItem('clicks'), 10) || 0;
    const power = parseInt(localStorage.getItem('power'), 10) || 1;
    const meMaws = parseInt(localStorage.getItem('meMaws'), 10) || 0;
    const meMawPrice = parseInt(localStorage.getItem('meMawPrice'), 10) || 100;
    const farmPower = parseInt(localStorage.getItem('farmPower'), 10) || 0;
    const farmPrice = parseInt(localStorage.getItem('farmPrice'), 10) || 1100;
    const farms = parseInt(localStorage.getItem('farms'), 10) || 0;
    const factoryPower = parseInt(localStorage.getItem('factoryPower'), 10) || 0;
    const factoryPrice = parseInt(localStorage.getItem('factoryPrice'), 10) || 130000;
    const factories = parseInt(localStorage.getItem('factories'), 10) || 0;
    this.setState(() => {
      return { upgrades, upgradeClickPrice, clicks, power, meMaws, meMawPrice, farmPower, farmPrice, farms, factoryPower, factoryPrice, factories };
    });

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.factories !== this.state.factories) {
      const factories = this.state.factories;
      localStorage.setItem('factories', factories)
    }
    if (prevState.farms !== this.state.farms) {
      const farms = this.state.farms;
      localStorage.setItem('farms', farms)
    }
    if (prevState.upgradeClickPrice !== this.state.upgradeClickPrice) {
      const upgradeClickPrice = this.state.upgradeClickPrice;
      localStorage.setItem('upgradeClickPrice', upgradeClickPrice)
    }
    if (prevState.upgrades !== this.state.upgrades) {
      const upgrades = this.state.upgrades;
      localStorage.setItem('upgrades', upgrades)
    }
    if (prevState.factoryPrice !== this.state.factoryPrice) {
      const factoryPrice = this.state.factoryPrice;
      localStorage.setItem('factoryPrice', factoryPrice)
    }
    if (prevState.farmPrice !== this.state.farmPrice) {
      const farmPrice = this.state.farmPrice;
      localStorage.setItem('farmPrice', farmPrice)
    }
    if (prevState.meMawPrice !== this.state.meMawPrice) {
      const meMawPrice = this.state.meMawPrice;
      localStorage.setItem('meMawPrice', meMawPrice)
    }
    if (prevState.factoryPower !== this.state.factoryPower) {
      const factoryPower = this.state.factoryPower;
      localStorage.setItem('factoryPower', factoryPower)
    }
    if (prevState.meMaws !== this.state.meMaws) {
      const meMaws = this.state.meMaws;
      localStorage.setItem('meMaws', meMaws)
    }
    if (prevState.farmPower !== this.state.farmPower) {
      const farmPower = this.state.farmPower;
      localStorage.setItem('farmPower', farmPower)
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
        upgrades: prevState.upgrades + 1
      }
    })
  }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades < 3) {
      this.setState((prevState) => {
        return {
          power: prevState.power * 2,
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 3) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + .1 * prevState.meMaws + .1 * prevState.farms + .1 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 4) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + .5 * prevState.meMaws + .5 * prevState.farms + .5 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 5) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + 5 * prevState.meMaws + 5 * prevState.farms + 5 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 6) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + 50 * prevState.meMaws + 50 * prevState.farms + 50 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 7) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + 500 * prevState.meMaws + 500 * prevState.farms + 500 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 8) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + 5000 * prevState.meMaws + 5000 * prevState.farms + 5000 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 9) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + 50000 * prevState.meMaws + 50000 * prevState.farms + 50000 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 10) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + 500000 * prevState.meMaws + 500000 * prevState.farms + 500000 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }
    if (this.state.clicks - this.state.upgradeClickPrice >= 0 && this.state.upgrades === 11) {
      this.setState((prevState) => {
        return {
          power: Math.ceil(prevState.power + 5000000 * prevState.meMaws + 5000000 * prevState.farms + 5000000 * prevState.factories),
          clicks: prevState.clicks - prevState.upgradeClickPrice,
          upgradeClickPrice: prevState.upgradeClickPrice * 10,
          consecEat: prevState.consecEat = 1
        }
      })
    }

  }
  makeCookies = (prevstate) => {
    this.setState((prevState) => {
      return {
        consecEat: 1,
        clicks: prevState.clicks + prevState.power,
        Ate: false,
        consecEat: prevState.consecEat = 1
      }
    });
  };
  eatCookies = (prevState) => {
    this.setState((prevState) => {
      if (prevState.clicks - prevState.consecEat * 2 < 0) {
        return {
          clicks: 0,
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
          meMawPrice: Math.floor(prevState.meMawPrice * 1.15),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  fireMemaw = () => {
    if (this.state.meMaws > 0 && this.state.meMawPrice >= 10) {
      this.setState((prevState) => {
        return {
          meMaws: prevState.meMaws - 1,
          meMawPrice: Math.ceil(prevState.meMawPrice * .87),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  buildFarm = () => {
    if (this.state.clicks - this.state.farmPrice >= 0) {
      this.setState((prevState) => {
        return {
          farms: prevState.farms + 1,
          farmPower: prevState.farmPower + 8,
          clicks: prevState.clicks - prevState.farmPrice,
          farmPrice: Math.floor(prevState.farmPrice * 1.15),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  burnFarm = () => {
    if (this.state.farmPower > 0 && this.state.farmPrice >= 10) {
      this.setState((prevState) => {
        return {
          farmPower: prevState.farmPower - 8,
          farmPrice: Math.ceil(prevState.farmPrice * .8695),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  buildFactory = () => {
    if (this.state.clicks - this.state.factoryPrice >= 0) {
      this.setState((prevState) => {
        return {
          factories: prevState.factories + 1,
          factoryPower: prevState.factoryPower + 260,
          clicks: prevState.clicks - prevState.factoryPrice,
          factoryPrice: Math.floor(prevState.factoryPrice * 1.15),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  burnFactory = () => {
    if (this.state.factoryPower > 0 && this.state.factoryPrice >= 10) {
      this.setState((prevState) => {
        return {
          factoryPower: prevState.factoryPower - 260,
          factoryPrice: Math.ceil(prevState.factoryPrice * .869559),
          consecEat: prevState.consecEat = 1
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
                    upgradeClickPrice={this.state.upgradeClickPrice}
                  />
                </li>
                <br />
                <li>
                  <Memaw
                    Memaw={this.Memaw}
                    meMawPrice={this.state.meMawPrice}
                  />
                  
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
                    farmPrice={this.state.farmPrice}
                  />

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
                    factoryPrice={this.state.factoryPrice}
                  />

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

