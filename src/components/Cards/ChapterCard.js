import React from 'react';
import './ChapterCard.scss';
import ChapterIcon from '../Chapters/ChapterIcon';
const ChapterCard = ({ data }) => {
  return (
    <a href={data.id} className='block'>
      <div className='d-flex justify-content-between align-items-center'>
        <p className='number'>{data.id}</p>
        <div className='surah-info'>
          <h4 className='surah-name'>{data.name}</h4>
          <span className='translated-name'>{data.translated_name}</span>
        </div>
        <ChapterIcon id={data.id} />
      </div>
    </a>
  );
};

export default ChapterCard;
