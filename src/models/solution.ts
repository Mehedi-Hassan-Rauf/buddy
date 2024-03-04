import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const solutionSchema = new Schema(
  {
    senderId: {
      type: String,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    problemId: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    // createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);

const Solution =
  mongoose.models.Solution || mongoose.model("Solution", solutionSchema);

export default Solution;
