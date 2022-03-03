import React, { useState, useEffect } from "react";
import Footer from "./commonComponents/Footer";
import { motion } from "framer-motion";
import Dots from './commonComponents/Dots'

const FifthScreen = ({ gotoSection }) => {
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
      <Dots gotoSection={gotoSection} current={4} />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="fifth-section">
          <div className="fifth-section-container">
            <div className="verse-info">
              <span className="text">BIBLE VERSE</span>
            </div>

            {verse && (
              <>
                <motion.h3 transition={{ ease: "easeOut", duration: 2 }} >
                  {verse.bookname} {verse.chapter}:{verse.verse}
                </motion.h3>
                <p>"{verse.text}"</p>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FifthScreen;
