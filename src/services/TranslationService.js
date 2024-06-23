// src/services/TranslationService.js

const translationApiUrl = "https://translation.googleapis.com/language/translate/v2";
const translationApiKey = "YOUR_GOOGLE_TRANSLATE_API_KEY";

const translateText = async (text, targetLanguage) => {
  try {
    const response = await fetch(`${translationApiUrl}?key=${translationApiKey}`, {
      method: "POST",
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
        format: "text"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Failed to translate text:', error.message);
    throw new Error('Failed to translate text');
  }
};

export { translateText };
