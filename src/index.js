/** @format */

import mongoose from "mongoose"
import listEndpoints from "express-list-endpoints"
import server from "./server.js"

const port = process.env.PORT || 3001

mongoose.connect(process.env.MONGO_CONNECTION_URL)

mongoose.connection.on("connected", () => {
  console.log("Mongo Connected!")
  server.listen(port, () => {
    console.table(listEndpoints(server))
    console.log(`Server is listening on port ${port}`)
  })
})
