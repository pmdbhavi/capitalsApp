import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = capitalId => {
    const filtered = countryAndCapitalsList.find(each => each.id === capitalId)
    return filtered.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)

    return (
      <div className="container">
        <div className="con">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="searchCon">
            <select
              className="search"
              onChange={this.onChangeCapital}
              value={capitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  value={eachItem.id}
                  key={eachItem.id}
                  className="option"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
