import React, {useEffect} from 'react'
import { useTimer } from 'react-timer-hook';

const Timer = () => {

  const date = new Date();
  //date.setHours(20,0,0,0)
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
  } = useTimer({ date, onExpire: () => console.log('onExpire called') });
  console.log(date)
  useEffect(() => {
    start()
  },[])
  return (
    <div className="timer">{hours} : {minutes} : {seconds}</div>
  )
}

export default Timer