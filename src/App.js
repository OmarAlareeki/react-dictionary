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
      darkMode: false, // Initially set to false for light mode
    };
  }

  handleSearch = async () => {
    const { word } = this.state;
    console.log("Searching for word:", word);
    try {
      await fetchWord(word);
      console.log("Definitions after fetch:", definitions);
      this.setState({ definitions });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  handleClear = () => {
    clearDefinitions();
    this.setState({ definitions: [], word: '' });
  };

  toggleDarkMode = () => {
    const { darkMode } = this.state;
    document.body.classList.toggle('dark-mode', !darkMode);
    this.setState({ darkMode: !darkMode });
  };

  render() {
    const { word, definitions, darkMode } = this.state;

    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={darkMode ? 'dark-mode' : ''}>Dictionary App</h1>
        <button className="toggle-dark-mode" onClick={this.toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
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
