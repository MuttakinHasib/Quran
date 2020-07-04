import React from 'react';
import ChapterCard from '../Cards/ChapterCard';
import './Chapters.scss';
const Chapters = ({ surah }) => {
  return (
    <div className='row justify-content-between'>
      <div className='col-md-6 col-lg-4 my-3'>
        <ul className='chapter-cards'>
          {surah.map((item, i) => (
            <li key={i} className='chapter-card'>
              <ChapterCard data={item}/>
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
    </div>
  );
};

export default Chapters;
