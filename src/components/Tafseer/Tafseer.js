import React from 'react';
import { Collapse } from 'react-bootstrap';

const Tafseer = ({ tafseer, showTafseer }) => {
  console.log(tafseer.ahsanul_bayan);
  return (
    <Collapse in={showTafseer}>
      <div className='mt-3'>
        <p
          className='text-bn'
          style={{ fontFamily: 'BornopataRegular !important' }}
        >
          {tafseer?.ahsanul_bayan}
        </p>
      </div>
    </Collapse>
  );
};

export default Tafseer;
