// src/components/DictionaryForm.js

import React, { Component } from 'react';

class DictionaryForm extends Component {
  render() {
    const { word, onChange, onSearch, onClear } = this.props;

    return (
      <div className="dictionary-form">
        <input
          type="text"
          value={word}
          onChange={onChange}
          placeholder="Enter a word"
        />
        <button onClick={onSearch}>Search</button>
        <button onClick={onClear}>Clear</button>
      </div>
    );
  }
}

export default DictionaryForm;
