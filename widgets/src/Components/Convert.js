import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, SetTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeId);
    };
  }, [text]);

  useEffect(() => {
    const doTransaltion = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      SetTranslated(data.data.translations[0].translatedText);
    };

    doTransaltion();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 ui header>
        {translated}
      </h1>
    </div>
  );
};

export default Convert;
