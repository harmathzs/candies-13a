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
    // TODO - render candy

    // TODO - assert name, mass, origin

  })
})

describe('App', () => {
  test('renders App heading', () => {
    // TODO - render App

    // TODO - test heading

  })

  test('allows user to add a new candy', async () => {
    // TODO - render App

    // TODO - test typing into input fields: New Candy, 150g, US

    // TODO - assert Add Candy button click

  })  
})