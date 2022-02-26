import React from 'react';
import './Clock.scss';

const Clock = () => {
  return (
    <div className='clock'>
      <div className='stand hour'></div>
      <div className='stand minute'></div>
      <div className='stand second'></div>
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
