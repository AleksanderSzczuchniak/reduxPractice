import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/counter'

const mapStateToProps = store => ({
    counterValue: store.counter
})
const mapDispatchToProps = dispatch => ({
    increment: ()=> dispatch(increment()),
    decrement: ()=> dispatch(decrement())
})

const Counter = props => {
    console.log('Counter props', props)
    return <div>
        <div>Count state: {props.counterValue}</div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
    </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)