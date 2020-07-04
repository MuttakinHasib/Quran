import React from 'react';
// import { Link } from 'react-router-dom';
import quranMajeed from '../../assets/images/quranul-karim.png';
import './Home.scss';
import Chapters from '../../components/Chapters/Chapters';
import QuickLinks from '../../components/QuickLinks/QuickLinks';
const Home = ({data}) => {
  return (
    <div>
      {/* Banner */}
      <div className='banner p-5'>
        <div className='container'>
          <div className='row justify-content-center flex-column align-items-center'>
            <div className='col-sm-6 col-md-4 col-lg-3 col-xl-3 justify-content-center align-items-center d-flex'>
              <img src={quranMajeed} alt='Quran Majeed' className='img-fluid' />
            </div>
            <h1 className='text-light text-center pt-3 mb-0'>
              The Novel Quran
            </h1>
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <QuickLinks />
        <h4 className='text-muted'>Surahs (Chapters)</h4>
        <Chapters surah={data}/>
      </div>
    </div>
  );
};

export default Home;
