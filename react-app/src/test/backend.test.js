/* backend.test.js */
import { describe, test, expect, beforeAll } from 'vitest'
import request from 'supertest'

var app

beforeAll(async () => {
  // Dynamically import the CommonJS app into this ESM context
  const imported = await import('../backend/express.cjs')
  app = imported.default || imported // handle possible interop
})

describe('local dummy test', ()=>{
    test('1', ()=>{
        expect(1).toBe(1)
    })
})

describe('Backend', () => {
  test('GET /candies returns initial candies', async () => {
    // TODO - expect status=200


    // TODO - assert body as array

  })

  test('POST /candy adds a candy', async () => {
    const newCandy = {name: "Test Candy", mass: "50g", origin: "US"}
    // TODO - expect status=201


    // TODO - test new record existence

  })

  test('DELETE /candies clears all candies', async () => {
    // TODO - expect status=200


    // TODO - expect body array length=0

  })
})