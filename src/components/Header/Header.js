import React from 'react';
import { Select } from 'antd';
import logo from '../../assets/images/quran.png';
import SelectMode from '../Theme/SelectMode';
import './Header.scss';
const { Option } = Select;
const Header = ({ data }) => {
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
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
                  <Option value='1'>Fateha</Option>
                </Select>
              </li>
              <li className='nav-item ml-2'>
                <SelectMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
