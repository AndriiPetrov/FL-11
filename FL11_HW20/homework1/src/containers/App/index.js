import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Element} from '../../components/Element'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:1337/emoji-shop')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState(() => ({
          elements: json
        }))
        // console.log(this.state.elements);
      })
  }
  render() {
    if (this.state.elements.length === 0) {
      return <span>Loading...</span>;
    }
    return (
      <div className="App">
        
        <Element arr={this.state.elements}/>
      </div>
    );
  }
  
}

export default App;
