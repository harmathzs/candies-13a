/* frontend.test.jsx */ 
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // adds custom matchers like toBeInTheDocument
import userEvent from '@testing-library/user-event'
import Candy from '../Candy'
import App from '../App' 

describe('local dummy test', () => {
  test('2', () => {
    expect(2).toBe(2)
  })
})

describe('Candy', () => {
  test('renders candy details', () => {
    const candy = <Candy name="TestCandy" mass="100g" origin="HU" />
    // render candy
    render(candy)
    // assert name, mass, origin
    expect(screen.getByText(/TestCandy/i)).toBeInTheDocument()
  })
})

describe('App', () => {
  test('renders App heading', () => {
    // render App
    render(<App />)
    // test heading
    // expect(screen.getAllByText(/Candies/i))
    expect(screen.getByRole('heading', {name: /Candies/i})).toBeInTheDocument()
  })

  test('allows user to add a new candy', async () => {
    // render App
    render(<App />)

    // test typing into input field: New Candy
    await userEvent.type(screen.getByPlaceholderText(/Candy name/i), 'Test Candy')

    // assert Add Candy button click
    await userEvent.click(screen.getByRole('button', {name: /Add Candy/i}))
  })   

  test('allows user to add a new candy', async () => {
    // render App
    render(<App />)

    // test typing into input fields: New Candy, 150g, US
    await userEvent.type(screen.getByPlaceholderText(/Candy name/i), 'Test Candy')
    await userEvent.type(screen.getByPlaceholderText(/e.g. 100g/i), '69g')
    await userEvent.type(screen.getByPlaceholderText(/Country code/i), 'HU')

    // assert Add Candy button click
    await userEvent.click(screen.getByRole('button', {name: /Add Candy/i}))
  }) 
})