/** @format */

import mongoose from "mongoose"

const { Schema, model } = mongoose

const blogPostsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export default model("blogPosts", blogPostsSchema)
