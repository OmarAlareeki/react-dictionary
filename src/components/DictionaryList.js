// src/components/DictionaryList.js

import React, { Component } from 'react';

class DictionaryList extends Component {
  render() {
    const { definitions } = this.props;

    return (
      <div className="dictionary-list">
        {definitions.length > 0 ? (
          <ul>
            {definitions.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p><strong>Class:</strong> {item.class}</p>
                <p><strong>Definition:</strong> {item.def}</p>
                <audio controls>
                  <source src={item.audioUrl} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        ) : (
          <p>No definitions found.</p>
        )}
      </div>
    );
  }
}

export default DictionaryList;
