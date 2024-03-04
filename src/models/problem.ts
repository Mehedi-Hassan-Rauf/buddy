import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const problemSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },

    // createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);

const Problem =
  mongoose.models.Problem || mongoose.model("Problem", problemSchema);

export default Problem;
