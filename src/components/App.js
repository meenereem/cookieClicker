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
import Mine from './Mine'
import DemolishMine from './DemolishMine'
import Bank from './Bank'
import DestroyBank from './DestroyBank'

export default class App extends Component {
  timer = setInterval(() => {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + prevState.meMaws + prevState.farmPower + prevState.factoryPower + prevState.minePower + prevState.bankPower,
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
    farms: 0,
    farmPower: 0,
    farmPrice: 1100,
    mines: 0,
    minePower: 0,
    minePrice: 12000,
    factoryPower: 0,
    factoryPrice: 130000,
    factories: 0,
    banks: 0,
    bankPrice: 1400000,
    bankPower: 0
  };
  componentDidMount() {
    const banks = parseInt(localStorage.getItem('banks'), 10) || 0;
    const bankPrice = parseInt(localStorage.getItem('bankPrice'), 10) || 1400000;
    const bankPower = parseInt(localStorage.getItem('bankPower'), 10) || 0;
    const mines = parseInt(localStorage.getItem('mines'), 10) || 0;
    const minePower = parseInt(localStorage.getItem('minePower'), 10) || 0;
    const minePrice = parseInt(localStorage.getItem('minePrice'), 10) || 12000;
    const clicks = parseInt(localStorage.getItem('clicks'), 10) || 0;
    const upgradeClickPrice = parseInt(localStorage.getItem('upgradeClickPrice'), 10) || 100;
    const upgrades = parseInt(localStorage.getItem('upgrades'), 10) || 0;
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
      return { banks, bankPrice, bankPower, mines, minePower, minePrice, clicks, upgradeClickPrice, upgrades, power, meMaws, meMawPrice, farmPower, farmPrice, farms, factoryPower, factoryPrice, factories };
    });

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.banks !== this.state.banks) {
      const banks = this.state.banks;
      localStorage.setItem('banks', banks)
    }
    if (prevState.bankPrice !== this.state.bankPrice) {
      const bankPrice = this.state.bankPrice;
      localStorage.setItem('bankPrice', bankPrice)
    }
    if (prevState.bankPower !== this.state.bankPower) {
      const bankPower = this.state.bankPower;
      localStorage.setItem('bankPower', bankPower)
    }
    if (prevState.mines !== this.state.mines) {
      const mines = this.state.mines;
      localStorage.setItem('mines', mines)
    }
    if (prevState.minePower !== this.state.minePower) {
      const minePower = this.state.minePower;
      localStorage.setItem('minePower', minePower)
    }
    if (prevState.minePrice !== this.state.minePrice) {
      const minePrice = this.state.minePrice;
      localStorage.setItem('minePrice', minePrice)
    }
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
      if (this.state.upgrades < 3) {
        this.setState((prevState) => ({ power: prevState.power * 2 }));
      }
      if (this.state.upgrades === 3) {
        this.setState((prevState) => ({ power: prevState.power + 3 * prevState.meMaws + 3 * prevState.farms + 3 * prevState.factories }));
      }
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power + 4 * prevState.meMaws + 4 * prevState.farms + 4 * prevState.factories }));
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power + 5 * prevState.meMaws + 5 * prevState.farms + 5 * prevState.factories }));
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power + 50 * prevState.meMaws + 50 * prevState.farms + 50 * prevState.factories }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power + 500 * prevState.meMaws + 500 * prevState.farms + 500 * prevState.factories }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power + 5000 * prevState.meMaws + 5000 * prevState.farms + 5000 * prevState.factories }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power + 50000 * prevState.meMaws + 50000 * prevState.farms + 50000 * prevState.factories }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power + 500000 * prevState.meMaws + 500000 * prevState.farms + 500000 * prevState.factories }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power + 5000000 * prevState.meMaws + 5000000 * prevState.farms + 5000000 * prevState.factories }))
      }
      this.setState((prevState) => {
        return {
          upgrades: prevState.upgrades + 1,
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
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power + 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power + 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power + 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power + 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power + 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power + 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power + 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power + 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power + 5555562 }))
      }
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
    if (this.state.meMaws > 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power - 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power - 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power - 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power - 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power - 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power - 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power - 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power - 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power - 5555562 }))
      }
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
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power + 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power + 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power + 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power + 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power + 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power + 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power + 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power + 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power + 5555562 }))
      }
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
    if (this.state.farms > 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power - 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power - 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power - 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power - 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power - 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power - 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power - 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power - 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power - 5555562 }))
      }
      this.setState((prevState) => {
        return {
          farms: prevState.farms - 1,
          farmPower: prevState.farmPower - 8,
          farmPrice: Math.ceil(prevState.farmPrice * .8695),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  buildMine = () => {
    if (this.state.clicks - this.state.minePrice >= 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power + 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power + 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power + 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power + 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power + 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power + 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power + 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power + 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power + 5555562 }))
      }
      this.setState((prevState) => {
        return {
          mines: prevState.mines + 1,
          minePower: prevState.minePower + 47,
          clicks: prevState.clicks - prevState.minePrice,
          minePrice: Math.floor(prevState.minePrice * 1.15),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  demolishMine = () => {
    if (this.state.mines > 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power - 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power - 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power - 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power - 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power - 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power - 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power - 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power - 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power - 5555562 }))
      }
      this.setState((prevState) => {
        return {
          mines: prevState.mines - 1,
          minePower: prevState.minePower - 47,
          minePrice: Math.ceil(prevState.minePrice * .869565),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  buildFactory = () => {
    if (this.state.clicks - this.state.factoryPrice >= 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power + 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power + 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power + 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power + 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power + 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power + 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power + 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power + 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power + 5555562 }))
      }
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
    if (this.state.factories > 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power - 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power - 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power - 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power - 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power - 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power - 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power - 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power - 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power - 5555562 }))
      }
      this.setState((prevState) => {
        return {
          factories: prevState.factories - 1,
          factoryPower: prevState.factoryPower - 260,
          factoryPrice: Math.ceil(prevState.factoryPrice * .869565),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  buildBank = () => {
    if (this.state.clicks - this.state.bankPrice >= 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power + 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power + 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power + 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power + 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power + 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power + 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power + 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power + 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power + 5555562 }))
      }
      this.setState((prevState) => {
        return {
          banks: prevState.banks + 1,
          bankPower: prevState.bankPower + 1400,
          clicks: prevState.clicks - prevState.bankPrice,
          bankPrice: Math.floor(prevState.bankPrice * 1.15),
          consecEat: prevState.consecEat = 1
        }
      })
    }
  }
  destroyBank = () => {
    if (this.state.banks > 0) {
      if (this.state.upgrades === 4) {
        this.setState((prevState) => ({ power: prevState.power - 3 }))
      }
      if (this.state.upgrades === 5) {
        this.setState((prevState) => ({ power: prevState.power - 7 }))
      }
      if (this.state.upgrades === 6) {
        this.setState((prevState) => ({ power: prevState.power - 12 }))
      }
      if (this.state.upgrades === 7) {
        this.setState((prevState) => ({ power: prevState.power - 62 }))
      }
      if (this.state.upgrades === 8) {
        this.setState((prevState) => ({ power: prevState.power - 562 }))
      }
      if (this.state.upgrades === 9) {
        this.setState((prevState) => ({ power: prevState.power - 5562 }))
      }
      if (this.state.upgrades === 10) {
        this.setState((prevState) => ({ power: prevState.power - 55562 }))
      }
      if (this.state.upgrades === 11) {
        this.setState((prevState) => ({ power: prevState.power - 555562 }))
      }
      if (this.state.upgrades === 12) {
        this.setState((prevState) => ({ power: prevState.power - 5555562 }))
      }
      this.setState((prevState) => {
        return {
          banks: prevState.banks - 1,
          bankPower: prevState.bankPower - 1400,
          bankPrice: Math.ceil(prevState.bankPrice * .8695655),
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
              {(this.state.clicks < 50) ? <img align="left" src={mysterious_figure} /> : <img align="left" src={merchant} />}
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
                  <Mine
                    buildMine={this.buildMine}
                    minePrice={this.state.minePrice}
                  />
                </li>
                <br />
                <li>
                  <DemolishMine
                    demolishMine={this.demolishMine}
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
                <li >
                <Bank
                  buildBank={this.buildBank}
                  bankPrice={this.state.bankPrice}
                />
              </li>
              <br />
              <li>
                <DestroyBank
                destroyBank={this.destroyBank}
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





