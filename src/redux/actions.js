export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'

export function addItem(item) {
  return { type: ADD_ITEM, item }
}

export function deleteItem(item) {
  return { type: DELETE_ITEM, item }
}

export function toggleItem(item) {
  return { type: TOGGLE_ITEM, item }
}
