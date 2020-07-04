import React from 'react';
import './QuickLinks.scss';
const QuickLinks = () => {
  return (
    <div className='row justify-content-center mb-5'>
      <div className='col-md-10 justify-content-center'>
        <h5 className='quick-links mb-0'>
          <span>Quick Links</span>
          <span>
            <a href='f'>Surah Al-Kahf</a>
          </span>
          <span>
            <a href='f'>Surah Yasin</a>
          </span>
          <span>
            <a href='f'>Surah Ar-Rahman</a>
          </span>
          <span>
            <a href='f'>Al Mulk</a>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default QuickLinks;
