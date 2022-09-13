/** @format */

// By default jest doesn't work with the new import syntax
// We should add NODE_OPTIONS=--experimental-vm-modules to the test script to fix that
import supertest from "supertest"
import dotenv from "dotenv"
import mongoose from "mongoose"
import server from "../src/server.js"
import BlogPosts from "../src/api/blogPosts/model.js"

dotenv.config() // This command forces .env variables to be loaded into process.env. This is the way to go when you can't use -r dotenv/config

const client = supertest(server) // Supertest is capable of running server.listen and it gives us back a client to be used to run http req against that server

const validProduct = {
  name: "test",
  description: "bla bla bla",
  price: 20,
}

const notValidProduct = {
  name: "test",
  description: "bla bla bla",
}

beforeAll(async () => {
  // beforeAll hook could be used to connect to Mongo and also to do some initial setup (like inserting mock data into the db)
  await mongoose.connect(process.env.MONGO_CONNECTION_URL)
  const newProduct = new BlogPosts(validProduct)
  await newProduct.save()
})

afterAll(async () => {
  // afterAll hook could be used to close the connection with Mongo properly and to clean up db/collections
  await BlogPosts.deleteMany()
  await mongoose.connection.close()
})

describe("test api", () => {
  test("should check that mongo env var is set correctly", () => {
    expect(process.env.MONGO_CONNECTION_URL).toBeDefined()
  })
  test("Should test that GET /posts returns a success status code and a body", async () => {
    const response = await client.get("/posts").expect(200)
    console.log(response.body)
  })
  // test("Should test that POST /products returns a valid _id and 201", async () => {
  //   const response = await client.post("/posts").send(validProduct).expect(201)
  //   expect(response.body._id).toBeDefined()
  //   console.log(response.body)
  // })
  // test("Should test that POST /posts returns 400 in case of not valid product", async () => {
  //   await client.post("/posts").send(notValidProduct).expect(400)
  // })
  // test("should test that GET /posts/test endpoint returns a success status code", async () => {
  //   const response = await client.get("/test").expect(200)
  //   //expect(response.body.message).toEqual("test")
  //   console.log(response.body)
  // })
})
