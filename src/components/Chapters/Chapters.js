import React from 'react';
import './Chapters.scss';
import { useStateValue } from '../../context/StateProvider';
import ChapterCard from '../Cards/ChapterCard';

const Chapters = () => {
  const [{ chapters }] = useStateValue();
  
  return (
    <div className='row justify-content-between'>
      <div className='col-md-6 col-lg-4 my-3'>
        <ul className='chapter-cards'>
          {chapters.map((item, i) => (
            <li key={i} className='chapter-card'>
              <ChapterCard {...item} />
            </li>
          ))}
        </ul>
      </div>
      {/* <div className='col-md-6 col-lg-4 my-3'>
        <ul className='chapter-cards'>
          <li className='chapter-card'>
            <ChapterCard />
          </li>
          <li className='chapter-card'>
            <ChapterCard />
          </li>
        </ul>
      </div>
      <div className='col-md-6 col-lg-4 my-3'>
        <ul className='chapter-cards'>
          <li className='chapter-card'>
            <ChapterCard />
          </li>
          <li className='chapter-card'>
            <ChapterCard />
          </li>
        </ul>
      </div> */}
      fsafd
    </div>
  );
};

export default Chapters;
