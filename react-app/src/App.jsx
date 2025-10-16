import React from 'react'
import Candy from './Candy'
import './App.css'

export default class App extends React.Component {
  state = {
    candies: [],
    newCandy: {
      name: '',
      mass: '',
      origin: '',
    },
  }

  async fetchCandies() {
    const candiesJson = await fetch('http://localhost:3000/candies')
    const candies = await candiesJson.json()
    this.setState({candies})
  }

  async componentDidMount() {
    await this.fetchCandies()
  }

  handleDeleteAll = async () => {
    await fetch('http://localhost:3000/candies', {method: 'DELETE'})
    await this.fetchCandies()
  }

  handleInputChange = (e) => {
    const {name, value} = e.target
    this.setState(prevState => ({
      newCandy: {
        ...prevState.newCandy,
        [name]: value,
      }
    }))
  }

  handleAddCandy = async (e) => {
    e.preventDefault()
    const {name, mass, origin} = this.state.newCandy
    if (!name || !mass || !origin) {
      alert('Please fill all fields')
      return
    }
    await fetch('http://localhost:3000/candy', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, mass, origin}),
    })
    this.setState({
      newCandy: {name: '', mass: '', origin: ''}
    })
    await this.fetchCandies()
  }

  render() {
    const {candies, newCandy} = this.state
    return (
      <>
        <h1>Candies</h1>
        <div className="container">
          <section className="data-section">
            {candies.length === 0 ? (
              <p>No candies available.</p>
            ) : (
              <div className="cards-grid">
                {candies.map(({name, mass, origin}) => (
                  <Candy key={name} name={name} mass={mass} origin={origin} />
                ))}
              </div>
            )}
          </section>

          <section className="controls-section">
            <button onClick={this.handleDeleteAll} className="delete-button">
              Delete All Candies
            </button>
            <form onSubmit={this.handleAddCandy} className="add-candy-form">
              <h2>Add New Candy</h2>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={newCandy.name}
                  onChange={this.handleInputChange}
                  placeholder="Candy name"
                />
              </label>
              <label>
                Mass:
                <input
                  type="text"
                  name="mass"
                  value={newCandy.mass}
                  onChange={this.handleInputChange}
                  placeholder="e.g. 100g"
                />
              </label>
              <label>
                Origin:
                <input
                  type="text"
                  name="origin"
                  value={newCandy.origin}
                  onChange={this.handleInputChange}
                  placeholder="Country code"
                />
              </label>
              <button type="submit">Add Candy</button>
            </form>
          </section>
        </div>
      </>
    )
  }
}
