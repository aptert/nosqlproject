import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from 'material-ui-search-bar'


class App extends Component {
  render() {
    const dataForTable = [
      {fruit: "Apple", color: "Green"}, 
      {fruit: "Banana", color: "Orange"}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <SearchBar
       onChange={(value)=> this.setState({searchValue: value})}
       onRequestSearch={() => {
         console.log(this.state.value)
       } }
       />
      

      </div>
    );
  }
}

export default App;
