// src/App.js

import React, { Component } from 'react';
import './App.css';
import DictionaryForm from './components/DictionaryForm';
import DictionaryList from './components/DictionaryList';
import { fetchWord, clearDefinitions, definitions } from './services/DictionaryService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definitions: [],
    };
  }

  handleSearch = async () => {
    const { word } = this.state;
    try {
      await fetchWord(word);
      console.log("Definitions after fetch:", definitions); // Log definitions after fetch
      this.setState({ definitions: [...definitions] });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  handleClear = () => {
    clearDefinitions();
    this.setState({ definitions: [], word: '' });
  };

  render() {
    const { word, definitions } = this.state;

    return (
      <div className="App">
        <h1>Dictionary App</h1>
        <DictionaryForm
          word={word}
          onChange={(e) => this.setState({ word: e.target.value })}
          onSearch={this.handleSearch}
          onClear={this.handleClear}
        />
        <DictionaryList definitions={definitions} />
      </div>
    );
  }
}

export default App;
