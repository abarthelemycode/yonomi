import {
    ADD_ITEM,
    DELETE_ITEM,
    TOGGLE_ITEM
} from './actions';

const initialState = {
    // Valeur possible pour le nombre d'items (de 1 à 10)
    nbItemsRange : [...Array(10).keys()].map(i => i + 1),
    items : []
};

export default (state = initialState, action) => {

  switch (action.type) {
     case ADD_ITEM:
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
     case DELETE_ITEM:
       return Object.assign({}, state, {
          items: state.items.filter(item => item.id !== action.item.id )
      })

     case TOGGLE_ITEM:
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
