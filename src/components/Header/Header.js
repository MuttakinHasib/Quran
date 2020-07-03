import React from 'react';
import { Select } from 'antd';
import './Header.scss';
import logo from '../../assets/images/quran.png';
import quranMajeed from '../../assets/images/quranul-karim.png';
import SelectMode from '../Theme/SelectMode';
const { Option } = Select;
const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <img
              src={logo}
              width='30'
              height='30'
              class='d-inline-block align-top'
              alt=''
              loading='lazy'
            />
            <span className='font-weight-bold'>&nbsp;Al Quran</span>
          </a>
          <div className='navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder='Search surah...'
                  optionFilterProp='children'
                  // onChange={e => }
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value='jack'>Fateha</Option>
                  <Option value='lucy'>Lucy</Option>
                  <Option value='tom'>Tom</Option>
                </Select>
              </li>
              <li className='nav-item ml-2'>
                <SelectMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='row justify-content-center p-5  flex-column align-items-center banner'>
        <div className='col-sm-6 col-md-4 col-lg-3 col-xl-2 justify-content-center align-items-center d-flex'>
          <img src={quranMajeed} alt='Quran Majeed' className='img-fluid' />
        </div>
        <h1 className='text-light text-center pt-3 mb-0'>The Novel Qur'an</h1>
      </div>
    </header>
  );
};

export default Header;
