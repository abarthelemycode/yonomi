import { default as types } from "./types";

const addItem = (item) => {
  return { type: types.ADD_ITEM, item }
}

const deleteItem = (item) => {
  return { type: types.DELETE_ITEM, item }
}

const toggleItem = (item) => {
  return { type: types.TOGGLE_ITEM, item }
}


export default {
  addItem,
  deleteItem,
  toggleItem
}
