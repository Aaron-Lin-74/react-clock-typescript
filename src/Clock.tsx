import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import './Clock.scss';

const Clock = () => {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [secondRatio, setSecondRatio] = useState<number>(0);
  const [minuteRatio, setMinuteRatio] = useState<number>(0);
  const [hourRatio, setHourRatio] = useState<number>(0);

  /**
   * Set the ratio of rotation for second, minute, and hour hands.
   * Added second ratio to the minute ratio for smooth minute update.
   * Same for hour ratio.
   * Set relative hand's element css variable '--rotation' property
   */
  const setClock = useCallback(() => {
    const currentDate: Date = new Date();
    setSecondRatio(currentDate.getSeconds() / 60);
    setMinuteRatio((secondRatio + currentDate.getMinutes()) / 60);
    setHourRatio((minuteRatio + currentDate.getHours()) / 12);
    secondRef.current?.style.setProperty(
      '--rotation',
      `${secondRatio * 360}deg`
    );
    minuteRef.current?.style.setProperty(
      '--rotation',
      `${minuteRatio * 360}deg`
    );
    hourRef.current?.style.setProperty('--rotation', `${hourRatio * 360}deg`);
  }, [secondRatio, minuteRatio, hourRatio]);

  // Set position of the clock hands during re-rendering
  useLayoutEffect(() => {
    setClock();
    const clockInterval = setInterval(setClock, 1000);
    return () => clearInterval(clockInterval);
  }, [setClock]);

  return (
    <div className='clock'>
      <div className='stand hour' ref={hourRef}></div>
      <div className='stand minute' ref={minuteRef}></div>
      <div className='stand second' ref={secondRef}></div>
      {}
      <div className='number number1'>1</div>
      <div className='number number2'>2</div>
      <div className='number number3'>3</div>
      <div className='number number4'>4</div>
      <div className='number number5'>5</div>
      <div className='number number6'>6</div>
      <div className='number number7'>7</div>
      <div className='number number8'>8</div>
      <div className='number number9'>9</div>
      <div className='number number10'>10</div>
      <div className='number number11'>11</div>
      <div className='number number12'>12</div>
    </div>
  );
};

export default Clock;
