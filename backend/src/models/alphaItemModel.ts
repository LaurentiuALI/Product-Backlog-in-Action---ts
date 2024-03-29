import mongoose from "mongoose";
import { cardSchema } from "./cardsModel";

const Schema = mongoose.Schema;

// Create a schema for checklist items

const alphaItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  storyPoints: {
    type: Number,
    default: 1,
  },
  priority: {
    type: Number,
    default: 1,
  },
  state: {
    type: String,
    default: "Identified",
  },
  cards: {
    type: [cardSchema],
    default: [],
  },
  user_id: {
    type: String,
    required: true,
  },
});

const AlphaItem = mongoose.model("alphaItem", alphaItemSchema);

export default AlphaItem;
