import { default as types } from "./types";

const initialState = {
    // Valeur possible pour le nombre d'items (de 1 à 10)
    nbItemsRange : [...Array(10).keys()].map(i => i + 1),
    items : []
};

const productsReducer = (state = initialState, action) => {

  switch (action.type) {
     case types.ADD_ITEM:
       return Object.assign({}, state, {
          items: [
            ...state.items,
            {
              id: state.items.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
              nbItem: action.item.nbItem,
              text: action.item.text,
              checked: false
            }
          ]
        })
     case types.DELETE_ITEM:
       return Object.assign({}, state, {
          items: state.items.filter(item => item.id !== action.item.id )
      })

     case types.TOGGLE_ITEM:
       return Object.assign({}, state, {
         items: state.items.map((item) => {
           if (item.id === action.item.id) {
             return Object.assign({}, item, { checked: !item.checked })
           }
           return item
         })
       })

     default:
       return state
   }
}

export default productsReducer
