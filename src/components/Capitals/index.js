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

// Write your code here

class Capitals extends Component {
  state = {capitalId: 'NEW_DELHI'}

  updateCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  filterCountry = () => {
    const {capitalId} = this.state

    const country = countryAndCapitalsList.filter(each => each.id === capitalId)
    return country
  }

  render() {
    const {capitalId} = this.state
    console.log(capitalId)

    const countryDetails = this.filterCountry()

    const {country} = countryDetails[0]

    console.log(countryDetails)

    return (
      <div className="bg-container">
        <div className="detailed-container">
          <h1 className="title">Countries And Capitals</h1>

          <select id="selectEl" onChange={this.updateCapital}>
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id} className="each-option">
                {each.capitalDisplayText}
              </option>
            ))}
          </select>

          <label htmlFor="selectEl">is capital of which country?</label>

          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
