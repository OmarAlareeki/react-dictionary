// src/services/DictionaryService.js

const marApiUrl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
const apiKey = "eb36528a-241a-49e3-bfbd-7a7ccdd8967e";

let definitions = [];

const fetchWord = async (word) => {
  try {
    const response = await fetch(`${marApiUrl}${word}?key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("API response:", data);

    definitions = data.map(item => {
      if (item.hwi && item.hwi.prs && item.hwi.prs[0] && item.hwi.prs[0].sound) {
        const audio = item.hwi.prs[0].sound.audio;
        const subdirectory = audio[0];
        const audioUrl = `https://media.merriam-webster.com/soundc11/${subdirectory}/${audio}.wav`;

        return {
          name: item.hwi.hw,
          class: item.fl,
          def: item.shortdef.join(", "),
          audioUrl: audioUrl,
        };
      }
      return null;
    }).filter(item => item !== null);

    console.log("Processed definitions:", definitions);

  } catch (error) {
    console.error('Failed to fetch data from API:', error.message);
    throw new Error('Failed to fetch data from API');
  }
};

const clearDefinitions = () => {
  definitions = [];
};

export { fetchWord, clearDefinitions, definitions };
