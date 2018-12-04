import React from 'react'
import ReactDOM from 'react-dom'
//IMPORTING REDUX STUFF
import { createStore, combineReducers } from 'redux'

import todos, { addTodo, toggleTodo, deleteTodo } from './store/todos'
import counter, { increment, decrement, reset } from './store/counter'
import cart, { addToCart } from './store/cart'

import App from './App'
import { Provider } from 'react-redux'

//REDUX STUFF GOES HERE
const rootReducer = combineReducers({
    todos,
    counter,
    cart
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
//END OF REDUX STUFF

store.dispatch(addTodo('Go shopping'))
store.dispatch(addTodo('Make bed'))
store.dispatch(addTodo('Wash the dishes'))
store.dispatch(addTodo('Clean the bathroom'))
store.dispatch(increment())
store.dispatch(addToCart(20, 'Jeansy'))
store.dispatch(addToCart(20, 'Kurtka'))

window.increaseCounter = () => store.dispatch(increment())
window.decreaseCounter = () => store.dispatch(decrement())
window.resetCounter = () => store.dispatch(reset())
window.addTodo = (text) => store.dispatch(addTodo(text))

window.toggleTodo = (index) => store.dispatch(toggleTodo(index))
window.deleteTodo = (index) => store.dispatch(deleteTodo(index))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
    
