const ADD_TO_CART = 'ADD_TO_CART'
const INITIAL_STATE = {
    cartTotal: 0,
    items: []
}

export const addToCart = (price, title) => ({
    type: ADD_TO_CART,
    item: {
        price,
        title: [title]
    }
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.item],
                cartTotal: (state.cartTotal + action.item.price)
            }
        default:
            return state
    }
}