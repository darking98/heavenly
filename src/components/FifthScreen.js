import React, { useState, useEffect } from "react";
import Footer from "./commonComponents/Footer";
const FifthScreen = () => {
  const [verse, setVerse] = useState();
  useEffect(() => {
    fetch("https://labs.bible.org/api/?passage=random&type=json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setVerse(data[0]);
      });
  }, []);

  //console.log(verse.bookname)

  return (
    <>
      <div className="fifth-section">
        <div className="fifth-section-container">
          <div className="verse-info">
            <span>BIBLE VERSE</span>
          </div>

          {verse && (
            <>
              <h3>
                {verse.bookname} {verse.chapter}:{verse.verse}
              </h3>
              <p>"{verse.text}"</p>
            </>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FifthScreen;
