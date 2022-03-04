import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp }) => {

  //console.log(expiryTimestamp())
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.log('onExpire called') });
  useEffect(() => {
    start()
  }, [])
  return (
    <div className="timer">
      {isRunning ?
        (
          <>
           {days} : {hours} : {minutes} : {seconds}
          </>

        ) : (
          <p>We are live!</p>
        )
      }</div>
  )
}

export default Timer