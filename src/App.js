import React from 'react';
import Counter from './Counter'
import './index.css';


class App extends React.Component {
  render() {
    console.log('App props', this.props)
    return <Counter />
  }
}

export default App;
