import {
    ADD_ITEM,
    DELETE_ITEM,
    TOGGLE_ITEM
} from './actions';

const initialState = {
    // Valeur possible pour le nombre d'items (de 1 à 10)
    nbItemsRange : [...Array(10).keys()].map(i => i + 1),

    // TODO - A compléter
};

export default (state = initialState, action) => {
    // TODO - A compléter
    return state;
}