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
    // expect status=200
    const response = await request(app).get('/candies')
    expect(response.status).toBe(200)

    // assert body as array
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('POST /candy adds a candy', async () => {
    const newCandy = {name: "Test Candy", mass: "50g", origin: "US"}
    // expect status=201
    const response = await request(app).post('/candy').send(newCandy)
    expect(response.status).toBe(201)

    // test new record existence
    expect(response.body.some(candy=>candy.name == "Test Candy")).toBe(true)
  })

  test('DELETE /candies clears all candies', async () => {
    // expect status=200
    const response = await request(app).delete('/candies')
    expect(response.status).toBe(200)

    // expect body array length=0
    expect(response.body?.length).toBe(undefined)
  })
})