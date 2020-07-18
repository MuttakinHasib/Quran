import React from 'react';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import './Verse.scss';
import ChapterIcon from '../Chapters/ChapterIcon';
const Verse = () => {
  const { pathname } = useLocation();
  const getId = pathname.slice(1);
  const [{ chapters }] = useStateValue();
  const getVerses = chapters.filter(chapter => chapter.id === getId);
  return (
    <div className='container'>
      {getVerses.map(({ id, name, ayah }) => (
        <div key={name}>
          <div className='row justify-content-center align-items-center my-5'>
            <h1>{name}</h1>
            <ChapterIcon id={id} />
          </div>
          {ayah.map(item => (
            <div className='card card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='font-weight-bold text-success'>
                  {id}:{item.id}
                </p>
                <h4 className='arabic-font' key={item.id}>
                  {item.text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Verse;
